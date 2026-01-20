<script setup lang="ts">
import { CloudLightning, LucideSquareSplitVertical } from 'lucide-vue-next'
</script>

<template>
  <div class="col-span-1">
    <div class="card">
      <img
        src="https://topup.ebelanja.id/_next/image?url=https%3A%2F%2Fs3.belanjapasti.com%2Fmedia%2Fimage%2Faxis-799858.png&w=1920&q=75"
        alt="banner"
        class="w-full aspect-square object-cover object-center rounded-md"
      />
      <div class="flex text-sm lg:text-base items-center gap-4">
        <span class="row"> <CloudLightning /> Proses Cepat </span>
        <span class="row"> <LucideSquareSplitVertical /> Pembayaran Aman </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../../assets/main.css';

.row {
  @apply flex items-center gap-1 font-medium;
}

.card {
  @apply p-4 bg-base-200 rounded-lg space-y-4 shadow-lg border border-base-content/20;
}
</style>
