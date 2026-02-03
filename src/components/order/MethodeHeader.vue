<script setup lang="ts">
const props = defineProps<{
  pending: boolean
  trxId: string
  status: string
}>()
</script>

<template>
  <div class="card text-base">
    <h3>Metode Pembayaran</h3>
    <p class="font-semibold">QRIS (All Payment)</p>
  </div>
  <div class="card text-sm">
    <table class="border-separate border-spacing-y-2">
      <tbody>
        <tr>
          <td class="w-4/12">ID Transaksi</td>
          <td v-if="!pending">: {{ trxId }}</td>
          <td v-else class="flex items-center gap-2">
            :
            <div class="skeleton w-60 h-5"></div>
          </td>
        </tr>
        <tr>
          <td>Status</td>
          <td v-if="!pending">
            :
            <span v-if="status == 'pending'" class="badge-sm badge badge-warning">Pending</span>
            <span v-if="status == 'cancelled'" class="badge-sm badge badge-error">Cancelled</span>
            <span v-if="status == 'failed'" class="badge-sm badge badge-error">Failed</span>
            <span v-if="status == 'expired'" class="badge-sm badge badge-error">Expired</span>
            <span v-if="status == 'paid'" class="badge-sm badge badge-success">Paid</span>
          </td>
          <td v-else class="flex items-center gap-2">
            :
            <div class="skeleton w-25 h-5"></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
