<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = defineProps<{
  title: string
  status: string
  trxId: string
  phone: string
  provider: string
}>()
</script>
<template>
  <RouterLink :to="'/detail/' + trxId" class="p-4 card w-full bg-base-200 grid grid-cols-12 gap-4" role="button">
    <div class="col-span-3 md:col-span-2 aspect-square bg-accent card overflow-hidden">
      <img v-if="provider == 'axis'" src="/images/axis.webp" alt="image" />
      <img v-if="provider == 'byu'" src="/images/byu.webp" alt="image" />
      <img v-if="provider == 'telkomsel'" src="/images/telkomsel.webp" alt="image" />
      <img v-if="provider == 'xl'" src="/images/xl.webp" alt="image" />
      <img v-if="provider == 'indosat'" src="/images/indosat.webp" alt="image" />
      <img v-if="provider == 'three'" src="/images/three.webp" alt="image" />
      <img v-if="provider == 'smartfren'" src="/images/smartfren.webp" alt="image" />
    </div>
    <div class="col-span-9 md:col-span-10 text-base flex flex-col justify-between">
      <div class="md:space-y-1">
        <h3 class="font-semibold line-clamp-1 text-sm md:text-base">{{ title }}</h3>
        <div class="badge capitalize badge-success badge-xs md:badge-sm" v-show="status == 'paid'">{{ status }}</div>
        <div class="badge capitalize badge-error badge-xs md:badge-sm" v-show="status == 'expired'">{{ status }}</div>
        <div class="badge capitalize badge-error badge-xs md:badge-sm" v-show="status == 'failed'">{{ status }}</div>
        <div class="badge capitalize badge-warning badge-xs md:badge-sm" v-show="status == 'pending'">{{ status }}</div>
      </div>
      <div class="grid grid-cols-2 gap-1">
        <span class="text-xs md:text-sm mt-auto line-clamp-1">{{ trxId }}</span>
        <span class="text-xs md:text-sm mt-auto line-clamp-1">{{ phone }}</span>
      </div>
    </div>
  </RouterLink>
</template>
