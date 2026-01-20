<script setup lang="ts">
import type { item } from '@/types/item.type'
import { ShoppingBag } from 'lucide-vue-next'

const props = defineProps<{
  phoneNumber: string | null
  selectedItem: item | null
  selectedPayment: string | null
}>()
</script>

<template>
  <div class="card-checkout">
    <div class="col-span-1">
      <p class="text-sm text-base-content/60">Pulsa 20K</p>
      <b>Rp {{ selectedItem?.price.toLocaleString('id-ID') || 0 }}</b>
    </div>
    <button class="btn btn-primary" :disabled="!selectedItem || !selectedPayment || !phoneNumber">
      <ShoppingBag class="size-5" /> Beli Sekarang
    </button>
  </div>
</template>

<style scoped>
@import '../../assets/main.css';

.card-checkout {
  @apply p-4 bg-base-200 border border-base-content/20 rounded-lg grid grid-cols-2 items-center;
}
</style>
