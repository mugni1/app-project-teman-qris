<script setup lang="ts">
import { Home, Loader2 } from 'lucide-vue-next'
import { useRoute, useRouter } from 'vue-router'
import { useGetOrderDetail } from '@/hooks/useGetOrderDetail'
import { watch } from 'vue'
import Header from '@/components/order/Header.vue'
import Content from '@/components/content/Content.vue'
import Steps from '@/components/order/Steps.vue'
import Information from '@/components/order/Information.vue'
import PaymentDetails from '@/components/order/PaymentDetails.vue'
import TotalPayment from '@/components/order/TotalPayment.vue'
import MethodeHeader from '@/components/order/MethodeHeader.vue'
import QrisImage from '@/components/order/QrisImage.vue'
import MethodeFooter from '@/components/order/MethodeFooter.vue'

const route = useRoute()
const router = useRouter()
const id = route.params.id as string
const { data, isPending, refetch, isFetching } = useGetOrderDetail({ id })

watch(data, (value) => {
  if (value && value.status == 404) {
    router.push({ name: 'not_found' })
  }
})
</script>

<template>
  <Content
    v-if="!isPending && data?.status != 200"
    class="min-h-dvh flex flex-col justify-center items-center pb-25 gap-8"
  >
    <h1 class="text-center capitalize font-bold mb-1 text-xl md:text-2xl">
      Oops, Sepertinya terjadi kesalahan
    </h1>
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
    <Header :status="data?.data?.status || ''" :pending="isPending" />
    <Content>
      <div class="space-y-8">
        <Steps :status="data?.data?.status || ''" :pending="isPending" />
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section class="space-y-4">
            <Information
              :pending="isPending"
              :product="data?.data?.item.title"
              :phone="data?.data?.phone_number"
              :fullname="data?.data?.user.fullname"
              :email="data?.data?.user.email"
            />
            <PaymentDetails
              :pending="isPending"
              :price="data?.data?.item.price || 0"
              :total-price="data?.data?.amount || 0"
            />
            <TotalPayment :pending="isPending" :total-price="data?.data?.amount || 0" />
          </section>
          <section class="space-y-4">
            <MethodeHeader
              :pending="isPending"
              :trx-id="data?.data?.transaction_id || ''"
              :status="data?.data?.status || ''"
            />
            <QrisImage :pending="isPending" :image-url="data?.data?.qris_url || ''" />
            <MethodeFooter
              :id="data?.data?.id || ''"
              :trx_id="data?.data?.transaction_id || ''"
              :qris_url="data?.data?.qris_url || ''"
              :pending="isPending"
            />
          </section>
        </div>
      </div>
    </Content>
  </section>
</template>
