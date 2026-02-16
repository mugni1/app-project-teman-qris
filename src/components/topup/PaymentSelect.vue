<script setup lang="ts">
import type { Item } from '@/types/item.type'
import { ScanBarcode } from 'lucide-vue-next'

const emits = defineEmits<{
  (e: 'onSelect', value: string): void
}>()
const props = defineProps<{
  payment: string | null
  item: Item | null
}>()
</script>

<template>
  <div class="card p-4 bg-base-200 border border-base-content/20 space-y-2">
    <h3 class="card-title"><ScanBarcode class="size-6" /> Pilih Pembayaran</h3>
    <div
      class="card grid grid-cols-2 px-4 items-center"
      :role="'button'"
      :class="payment == 'qris' ? 'bg-primary border border-primary' : 'bg-base-200 border border-base-content/20'"
      @click="emits('onSelect', 'qris')"
    >
      <img src="https://topup.ebelanja.id/payment-method/qris-left-light.svg" alt="" />
      <div :class="['py-4', payment == 'qris' ? 'text-secondary-content' : 'text-secondary']">
        <p class="font-medium text-sm">Harga</p>
        <p class="font-bold">Rp {{ item?.price.toLocaleString('id-ID') || 0 }}</p>
      </div>
    </div>
  </div>
</template>
