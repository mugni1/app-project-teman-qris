<script setup lang="ts">
import Content from '@/components/content/Content.vue'
import { DownloadCloud, SearchCheckIcon } from 'lucide-vue-next'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import Header from '@/components/order/Header.vue'
import Steps from '@/components/order/Steps.vue'
import Information from '@/components/order/Information.vue'
import PaymentDetails from '@/components/order/PaymentDetails.vue'
import TotalPayment from '@/components/order/TotalPayment.vue'

const route = useRoute()
const id = route.params.id as string
const checked = ref(false)
</script>

<template>
  <Header />
  <Content>
    <div class="space-y-8">
      <Steps />
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section class="space-y-4">
          <Information />
          <PaymentDetails />
          <TotalPayment />
        </section>
        <section class="space-y-4">
          <div class="card text-base">
            <h3>Metode Pembayaran</h3>
            <p class="font-semibold">QRIS (All Payment)</p>
          </div>
          <div class="card text-sm">
            <table class="border-separate border-spacing-y-2">
              <tbody>
                <tr>
                  <td class="w-5/12">ID Transaksi</td>
                  <td>: MUGN-39787IIHUA77</td>
                </tr>
                <tr>
                  <td>Status Transaksi</td>
                  <td>
                    :
                    <span class="badge-sm badge badge-warning">Pending</span>
                    <span class="badge-sm badge badge-error">Cancelled</span>
                    <span class="badge-sm badge badge-error">Failed</span>
                    <span class="badge-sm badge badge-success">Paid</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="card space-y-1">
            <img
              src="https://qris.pw/public/qr/qr_1769777958_16000.png"
              class="w-6/12 lg:w-4/12 border-2"
              alt="qris"
            />
          </div>
          <div class="card space-y-4">
            <a
              href="https://qris.pw/public/qr/qr_1769777958_16000.png"
              target="_blank"
              download="QRIS.png"
              class="btn btn-secondary w-full"
            >
              <DownloadCloud class="size-5" /> Unduh QRIS
            </a>
            <button class="btn btn-primary w-full">
              <SearchCheckIcon class="size-5" /> Cek Transaksi
            </button>
          </div>
        </section>
      </div>
    </div>
  </Content>
</template>
