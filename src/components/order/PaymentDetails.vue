<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
  <div class="collapse collapse-arrow overflow-visible space-y-2" @click="checked = !checked">
    <input type="radio" name="my-accordion-2" :checked="checked" />
    <div class="collapse-title font-semibold bg-base-200 border border-base-300 card">
      Rincian Pembayaran
    </div>
    <div
      v-if="checked"
      class="collapse-content text-xs md:text-sm bg-base-200 border border-base-300 card pt-4 space-y-4"
    >
      <div class="flex justify-between">
        <span>Harga</span>
        <span>Rp 1.150</span>
      </div>
      <div class="flex justify-between">
        <span>Jumlah</span>
        <span>x1</span>
      </div>
      <div class="w-full bg-base-300 h-[2px]"></div>
      <div class="flex justify-between">
        <span>Subtotal</span>
        <span>Rp 1.150</span>
      </div>
    </div>
  </div>
</template>
