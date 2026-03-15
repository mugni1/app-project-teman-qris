<script setup lang="ts">
import { AlarmClock } from 'lucide-vue-next'
import { useRoute, useRouter } from 'vue-router'
import { useGetOrderDetail } from '@/hooks/useGetOrderDetail'
import { computed, ref, watch } from 'vue'
import { useCountdown } from '@vueuse/core'
import { toast } from 'vue-sonner'
import { useUpdateOrderDetail } from '@/hooks/useUpdateOrderDetail'
import { useQueryClient } from '@tanstack/vue-query'
import Header from '@/components/order-detail/Header.vue'
import Content from '@/components/global/Content.vue'
import Steps from '@/components/order-detail/Steps.vue'
import Information from '@/components/order-detail/Information.vue'
import PaymentDetails from '@/components/order-detail/PaymentDetails.vue'
import TotalPayment from '@/components/order-detail/TotalPayment.vue'
import MethodeHeader from '@/components/order-detail/MethodeHeader.vue'
import QrisImage from '@/components/order-detail/QrisImage.vue'
import MethodeFooter from '@/components/order-detail/MethodeFooter.vue'
import ErrorCard from '@/components/global/ErrorCard.vue'
import OrderDetailPending from '@/components/order-detail/OrderDetailPending.vue'

// state
const route = useRoute()
const router = useRouter()
const queryClient = useQueryClient()
const id = route.params.id as string
const { data, isPending: isPendingGetOrder, refetch, isRefetching } = useGetOrderDetail({ id })
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
      toast.error(res.message)
    } else {
      toast.success(res.message)
      queryClient.refetchQueries({
        queryKey: ['oder_detail', id],
      })
    }
  } catch {
    toast.error('Server sedang sibuk, Coba lagi nanti.')
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
  <!-- pending  -->
  <OrderDetailPending v-if="isPendingGetOrder" />

  <!-- error  -->
  <ErrorCard
    v-if="!isPendingGetOrder && data && data.status != 200"
    :status="data.status"
    :message="data.message"
    :is-refetching="isRefetching"
    @refetch="refetch"
  />

  <!-- has data  -->
  <section v-if="!isPendingGetOrder && data && data.data && data.status == 200">
    <Header :status="data.data.status" />
    <Content class="space-y-8">
      <!-- steps  -->
      <Steps :status="data.data.status" />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- content 1  -->
        <div class="space-y-4">
          <div class="badge badge-error font-bold">
            <AlarmClock class="size-4" />
            {{ formattedTime }}
          </div>
          <Information :data="data" />
          <PaymentDetails :data="data" />
          <TotalPayment :data="data" />
        </div>

        <!-- content 2  -->
        <div class="space-y-4">
          <MethodeHeader :data="data" />
          <QrisImage :data="data" />
          <MethodeFooter :data="data" :is-pending-update="isPendingUpdateOrder" @update="updateOrderDetail" />
        </div>
      </div>
    </Content>
  </section>
</template>
