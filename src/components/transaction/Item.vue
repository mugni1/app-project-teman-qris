<script setup lang="ts">
const props = defineProps<{
  title: string
  status: string
  trxId: string
  phone: string
  provider: string
}>()
</script>
<template>
  <div class="p-4 card w-full bg-base-200 grid grid-cols-12 gap-4" role="button">
    <div class="col-span-3 md:col-span-2 aspect-square bg-accent card overflow-hidden">
      <img
        src="https://topup.ebelanja.id/_next/image?url=https%3A%2F%2Fs3.belanjapasti.com%2Fmedia%2Fimage%2Faxis-198257.png&w=384&q=75"
        alt="image"
      />
    </div>
    <div class="col-span-9 md:col-span-10 text-base flex flex-col justify-between">
      <div class="space-y-1">
        <h3 class="font-semibold line-clamp-1">{{ title }}</h3>
        <div class="badge capitalize badge-success badge-sm" v-show="status == 'paid'">{{ status }}</div>
        <div class="badge capitalize badge-error badge-sm" v-show="status == 'expired'">{{ status }}</div>
        <div class="badge capitalize badge-error badge-sm" v-show="status == 'failed'">{{ status }}</div>
        <div class="badge capitalize badge-warning badge-sm" v-show="status == 'pending'">{{ status }}</div>
      </div>
      <div class="flex justify-between">
        <span class="text-sm mt-auto">{{ trxId }}</span>
        <span class="text-sm mt-auto">{{ phone }}</span>
      </div>
    </div>
  </div>
</template>
