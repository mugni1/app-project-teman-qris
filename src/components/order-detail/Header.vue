<script setup lang="ts">
import { CloudLightning, LucideSquareSplitVertical } from 'lucide-vue-next'
</script>

<template>
  <div class="col-span-1">
    <div class="card bg-base-200 shadow-md overflow-hidden border border-base-content/20">
      <figure>
        <img
          src="https://topup.ebelanja.id/_next/image?url=https%3A%2F%2Fs3.belanjapasti.com%2Fmedia%2Fimage%2Faxis-799858.png&w=1920&q=75"
          alt="banner"
          class="w-full aspect-square object-cover object-center"
        />
      </figure>
      <div class="card-body grid grid-cols-2">
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
</style>
