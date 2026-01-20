<script setup lang="ts">
import type { item } from '@/types/item.type'

const emits = defineEmits<{
  (e: 'onSelect', value: string): void
}>()
const props = defineProps<{
  payment: string | null
  item: item | null
}>()
</script>

<template>
  <div class="card">
    <h3 class="card-title">Pilih Pembayaran</h3>
    <div
      :role="'button'"
      class="payment-card"
      :class="
        payment == 'qris'
          ? 'bg-primary border border-primary'
          : 'bg-base-200 border border-base-content/20'
      "
      @click="emits('onSelect', 'qris')"
    >
      <img src="https://topup.ebelanja.id/payment-method/qris-left-light.svg" alt="" />
      <div class="py-4">
        <p class="font-medium text-sm">Harga</p>
        <p class="font-bold text-secondary-content">
          Rp {{ item?.price.toLocaleString('id-ID') || 0 }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../../assets/main.css';

.card {
  @apply p-4 bg-base-200 rounded-lg space-y-4 shadow-lg flex flex-col border border-base-content/20;
}

.card-title {
  @apply font-semibold;
}

.payment-card {
  @apply px-4 rounded-lg grid grid-cols-2 items-center transition-all duration-300 select-none;
}
</style>
