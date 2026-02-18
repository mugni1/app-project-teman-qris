<script setup lang="ts">
const props = defineProps<{
  title: string
  image_url: string
  name: string | undefined
  destination: string | undefined
  pending: boolean
  product: string | undefined
}>()
</script>

<template>
  <div class="card bg-base-200 border border-base-300 p-4 grid grid-cols-12 gap-4">
    <div v-if="!pending" class="col-span-3 aspect-square bg-white overflow-hidden card">
      <img :src="image_url" alt="image" />
    </div>
    <div v-else class="col-span-3 aspect-square overflow-hidden card skeleton"></div>
    <div class="col-span-9 space-y-2">
      <h3 v-if="!pending" class="font-semibold text-base">Informasi Transaksi</h3>
      <div v-else class="text-transparent">
        <span class="skeleton">Informasi Transaksi</span>
      </div>
      <div v-if="!pending" class="flex flex-col gap-1 text-xs md:text-sm">
        <div class="w-full flex justify-between">
          <p>Produk :</p>
          <p>{{ product ?? '' }}</p>
        </div>
        <div class="w-full flex justify-between">
          <p>{{ title }} :</p>
          <p>{{ destination ?? '' }}</p>
        </div>
        <div class="w-full flex justify-between">
          <p>Nama :</p>
          <p>{{ name ?? '' }}</p>
        </div>
      </div>
      <div v-else class="flex flex-col gap-1 text-xs md:text-sm">
        <div class="w-full flex justify-between">
          <p class="skeleton text-transparent">Produk :</p>
          <p class="skeleton text-transparent">Name Produk</p>
        </div>
        <div class="w-full flex justify-between">
          <p class="skeleton text-transparent">Id Server:</p>
          <p class="skeleton text-transparent">Contoh id server</p>
        </div>
        <div class="w-full flex justify-between">
          <p class="skeleton text-transparent">Nama :</p>
          <p class="skeleton text-transparent">Contoh nama</p>
        </div>
      </div>
    </div>
  </div>
</template>
