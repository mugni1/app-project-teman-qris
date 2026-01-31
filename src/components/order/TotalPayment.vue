<script setup lang="ts">
const props = defineProps<{
  pending: boolean
  totalPrice: number
}>()
</script>

<template>
  <div class="border-2 border-primary bg-base-200 p-4 card">
    <div class="flex justify-between w-full font-semibold text-base text-primary">
      <span>Total Pembayaran</span>
      <span v-if="!pending">Rp {{ totalPrice.toLocaleString('id-ID') }}</span>
      <span v-else class="h-6 w-40 skeleton"></span>
    </div>
  </div>
</template>
