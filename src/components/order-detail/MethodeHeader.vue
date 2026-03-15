<script setup lang="ts">
import type { GetOrderDetailResponse } from '@/types/order.type'

const props = defineProps<{
  data: GetOrderDetailResponse
}>()
</script>

<template>
  <div class="card text-base space-y-1 lg:mt-10">
    <h3>Metode Pembayaran</h3>
    <p>QRIS (Semua Metode Pembayaran)</p>
  </div>

  <div class="card text-sm">
    <table class="border-separate border-spacing-y-2">
      <tbody>
        <tr>
          <td class="w-4/12">ID Transaksi</td>
          <td>: {{ data.data?.transaction_id ?? '-' }}</td>
        </tr>
        <tr>
          <td>Status</td>
          <td>
            :
            <span
              v-if="data.data?.status == 'failed' || data.data?.status == 'error'"
              class="badge-sm badge badge-error"
            >
              Gagal
            </span>
            <span
              v-if="data.data?.status == 'pending' || data.data?.status == 'waiting'"
              class="badge-sm badge badge-warning"
            >
              Menunggu
            </span>
            <span v-if="data.data?.status == 'expired'" class="badge-sm badge badge-error">Kadaluwarsa</span>
            <span v-if="data.data?.status == 'cancelled'" class="badge-sm badge badge-error">Dibatalkan</span>
            <span v-if="data.data?.status == 'paid'" class="badge-sm badge badge-success">Dibayar</span>
            <span v-if="data.data?.status == 'processing'" class="badge-sm badge badge-info">Diproses</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
