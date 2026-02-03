<script setup lang="ts">
const props = defineProps<{
  pending: boolean
  trxId: string
  status: string
}>()
</script>

<template>
  <div v-if="!pending" class="card text-base space-y-1 lg:mt-10">
    <h3>Metode Pembayaran</h3>
    <p class="font-semibold">QRIS (All Payment)</p>
  </div>
  <div v-else class="card text-base space-y-1 lg:mt-10 text-transparent">
    <span class="skeleton w-fit">Metode Pembayaran</span>
    <span class="font-semibold skeleton w-fit">QRIS (All Payment)</span>
  </div>
  <div class="card text-sm">
    <table class="border-separate border-spacing-y-2">
      <tbody v-if="!pending">
        <tr>
          <td class="w-4/12">ID Transaksi</td>
          <td>: {{ trxId }}</td>
        </tr>
        <tr>
          <td>Status</td>
          <td>
            :
            <span v-if="status == 'pending'" class="badge-sm badge badge-warning">Pending</span>
            <span v-if="status == 'cancelled'" class="badge-sm badge badge-error">Cancelled</span>
            <span v-if="status == 'failed'" class="badge-sm badge badge-error">Failed</span>
            <span v-if="status == 'expired'" class="badge-sm badge badge-error">Expired</span>
            <span v-if="status == 'paid'" class="badge-sm badge badge-success">Paid</span>
          </td>
        </tr>
      </tbody>
      <tbody v-else class="text-transparent">
        <tr>
          <td class="w-4/12 skeleton">ID Transaksi</td>
        </tr>
        <tr>
          <td class="skeleton">Status</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
