<script setup lang="ts">
import IconCreditCard from '@/icons/IconCreditCard.vue'

const props = defineProps<{
  pending: boolean
  status: string
}>()
</script>

<template>
  <div v-if="pending" class="w-full h-[40vh] skeleton mb-4 rounded-none"></div>
  <div
    v-if="!pending && status == 'pending'"
    class="w-full h-[40vh] px-4 bg-warning mb-4 flex flex-col items-center justify-center"
  >
    <IconCreditCard class="w-3/12 md:w-2/12 lg:w-1/12" />
    <h1 class="text-center font-bold text-2xl md:text-3xl lg:text-4xl">
      Harap Selesaikan Pembayaran
    </h1>
    <p class="text-center">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, pariatur?
    </p>
  </div>
  <div
    v-if="!pending && status == 'cancelled'"
    class="w-full h-[40vh] px-4 bg-error mb-4 flex flex-col items-center justify-center"
  >
    <IconCreditCard class="w-3/12 md:w-2/12 lg:w-1/12" />
    <h1 class="text-center font-bold text-2xl md:text-3xl lg:text-4xl">
      Transaksi Dibatalkan Oleh Sistem
    </h1>
    <p class="text-center">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, pariatur?
    </p>
  </div>
  <div
    v-if="!pending && status == 'failed'"
    class="w-full h-[40vh] px-4 bg-error mb-4 flex flex-col items-center justify-center"
  >
    <IconCreditCard class="w-3/12 md:w-2/12 lg:w-1/12" />
    <h1 class="text-center font-bold text-2xl md:text-3xl lg:text-4xl">Transaksi Gagal</h1>
    <p class="text-center">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, pariatur?
    </p>
  </div>
</template>
