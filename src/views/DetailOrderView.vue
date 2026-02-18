<script setup lang="ts">
import { AlarmClock, Home, Loader2 } from 'lucide-vue-next'
import { useRoute, useRouter } from 'vue-router'
import { useGetOrderDetail } from '@/hooks/useGetOrderDetail'
import { computed, ref, watch } from 'vue'
import { useCountdown } from '@vueuse/core'
import { toast } from 'vue-sonner'
import { useUpdateOrderDetail } from '@/hooks/useUpdateOrderDetail'
import { useQueryClient } from '@tanstack/vue-query'
import Header from '@/components/order/Header.vue'
import Content from '@/components/content/Content.vue'
import Steps from '@/components/order/Steps.vue'
import Information from '@/components/order/Information.vue'
import PaymentDetails from '@/components/order/PaymentDetails.vue'
import TotalPayment from '@/components/order/TotalPayment.vue'
import MethodeHeader from '@/components/order/MethodeHeader.vue'
import QrisImage from '@/components/order/QrisImage.vue'
import MethodeFooter from '@/components/order/MethodeFooter.vue'

// state
const route = useRoute()
const router = useRouter()
const queryClient = useQueryClient()
const id = route.params.id as string
const { data, isPending: isPendingGetOrder, refetch, isFetching } = useGetOrderDetail({ id })
const { mutateAsync, isPending: isPendingUpdateOrder } = useUpdateOrderDetail()
const expiredCount = ref(0)
const { remaining, start } = useCountdown(expiredCount, {
  interval: 1000,
  async onComplete() {
    if (data.value && data.value.data?.status == 'pending') {
      await updateOrderDetail()
    }
  },
})
const formattedTime = computed(() => {
  const totalSeconds = remaining.value
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  return `${hours} Jam ${minutes} Menit ${seconds} Detik`
})

// methods
const updateOrderDetail = async () => {
  try {
    const res = await mutateAsync({ id: data.value?.data?.transaction_id || '' })
    if (res.status != 200) {
      toast.error(res.message, { action: { label: 'Close' } })
    } else {
      queryClient.refetchQueries({
        queryKey: ['oder_detail', id],
      })
      toast.success(res.message, { action: { label: 'Close' } })
    }
  } catch {
    toast.error('Internal server error', { action: { label: 'Close' } })
  }
}

// watchers
watch(data, (value) => {
  if (value && value?.data?.expired_time && value?.data?.server_time) {
    const expiredTime = value.data.expired_time
    const serverTime = value.data.server_time
    if (expiredTime - serverTime > 1 && value.data.status == 'pending') {
      expiredCount.value = Math.floor((expiredTime - serverTime) / 1000)
    } else {
      expiredCount.value = 0
    }
    start()
  }
  if (value && value.status == 404) {
    router.push({ name: 'not_found' })
  }
})
</script>

<template>
  <Content
    v-if="!isPendingGetOrder && data?.status != 200"
    class="min-h-dvh flex flex-col justify-center items-center pb-25 gap-8"
  >
    <h1 class="text-center capitalize font-bold mb-1 text-xl md:text-2xl">Oops, Sepertinya terjadi kesalahan</h1>
    <h1 class="text-center capitalize font-semibold mb-4 text-sm md:text-base">
      {{ data?.message }}
    </h1>
    <div class="w-full flex justify-center gap-4">
      <button class="btn btn-sm md:btn-md btn-success" @click="refetch()">
        <Loader2 :class="['size-5', isFetching && 'animate-spin']" /> Coba Lagi
      </button>
      <button class="btn btn-sm md:btn-md btn-primary" @click="router.push('/')">
        <Home class="size-5" /> Kembali Ke Beranda
      </button>
    </div>
  </Content>
  <section v-else>
    <Header :status="data?.data?.status || ''" :pending="isPendingGetOrder" />
    <Content>
      <div class="space-y-8">
        <Steps :status="data?.data?.status || ''" :pending="isPendingGetOrder" />
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section class="space-y-4">
            <div v-if="!isPendingGetOrder" class="badge badge-error font-bold">
              <AlarmClock class="size-4" />
              {{ formattedTime }}
            </div>
            <div v-else class="badge skeleton text-transparent">Fotmated time time time time</div>
            <Information
              :title="data?.data?.item.category.column_1_title || 'Pengiriman'"
              :image_url="data?.data?.item.category.image_url || ''"
              :provider="data?.data?.item.provider || 'axis'"
              :pending="isPendingGetOrder"
              :product="data?.data?.item.title"
              :destination="data?.data?.destination"
              :name="data?.data?.user.fullname"
            />
            <PaymentDetails
              :pending="isPendingGetOrder"
              :price="data?.data?.item.price || 0"
              :total-price="data?.data?.amount || 0"
            />
            <TotalPayment :pending="isPendingGetOrder" :total-price="data?.data?.amount || 0" />
          </section>
          <section class="space-y-4">
            <MethodeHeader
              :pending="isPendingGetOrder"
              :trx-id="data?.data?.transaction_id || ''"
              :status="data?.data?.status || ''"
            />
            <QrisImage
              :pending="isPendingGetOrder"
              :status="data?.data?.status || ''"
              :image-url="data?.data?.qris_url || ''"
            />
            <MethodeFooter
              :id="data?.data?.id || ''"
              :status="data?.data?.status || ''"
              :trx_id="data?.data?.transaction_id || ''"
              :qris_url="data?.data?.qris_url || ''"
              :get_order_pending="isPendingGetOrder"
              :update_order_pending="isPendingUpdateOrder"
              @update="updateOrderDetail"
            />
          </section>
        </div>
      </div>
    </Content>
  </section>
</template>
