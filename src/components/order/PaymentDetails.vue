<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(false)
const props = defineProps<{
  pending: boolean
  price: number
  totalPrice: number
}>()
</script>

<template>
  <div class="collapse collapse-arrow overflow-visible space-y-2" @click="checked = !checked">
    <input type="radio" name="my-accordion-2" :checked="checked" />
    <div class="collapse-title font-semibold bg-base-200 border border-base-300 card">Rincian Pembayaran</div>
    <div v-if="checked" class="collapse-content text-sm bg-base-200 border border-base-300 card pt-4 space-y-4">
      <div class="flex justify-between">
        <span>Harga</span>
        <span v-if="!pending">Rp {{ price.toLocaleString('id-ID') }}</span>
        <span v-else class="skeleton text-transparent">testasdfytasd</span>
      </div>
      <div class="flex justify-between">
        <span>Jumlah</span>
        <span v-if="!pending">x1</span>
        <span v-else class="skeleton text-transparent">teytasd</span>
      </div>
      <div class="flex justify-between">
        <span>Biaya</span>
        <span v-if="!pending">Rp 0</span>
        <span v-else class="skeleton text-transparent">teytasd</span>
      </div>
      <div class="w-full bg-base-300 h-[2px]"></div>
      <div class="flex justify-between">
        <span>Subtotal</span>
        <span v-if="!pending">Rp {{ totalPrice.toLocaleString('id-ID') }}</span>
        <span v-else class="skeleton text-transparent">testasdfytasd</span>
      </div>
    </div>
  </div>
</template>
