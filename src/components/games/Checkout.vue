<script setup lang="ts">
import { InfoIcon } from 'lucide-vue-next'
import type { ItemNew } from './Item.vue'
import { data } from './data'

// state
const props = defineProps<{
  item: undefined | ItemNew
}>()
</script>

<template>
  <div v-if="!item" class="card-item py-12!">
    <p class="stat-title text-center flex items-center justify-center gap-2">
      <InfoIcon class="size-4" /> Belum ada produk
    </p>
  </div>
  <div v-if="item" class="card-item">
    <div class="flex items-center gap-4">
      <img :src="data.image_url" alt="image" class="w-2/12 aspect-square card" />
      <div class="w-10/12 pe-4">
        <p class="card-title line-clamp-1 truncate">{{ data.title }}</p>
        <p>{{ item.title }}</p>
      </div>
    </div>
    <div class="space-y-2">
      <div class="flex justify-between">
        <p>Harga</p>
        <p>Rp {{ item.price.toLocaleString('id-ID') }}</p>
      </div>
      <div class="flex justify-between">
        <p>Jumlah</p>
        <p>x1</p>
      </div>
      <div class="flex justify-between">
        <p>Biaya</p>
        <p>Rp 0</p>
      </div>
      <div class="h-px w-full bg-base-content/20"></div>
      <div class="flex justify-between">
        <p class="card-title">Total</p>
        <p class="card-title text-primary">Rp {{ item.price.toLocaleString('id-ID') }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../../assets/main.css';

.card-item {
  @apply card bg-base-200 border border-dashed border-base-300 space-y-4 p-4;
}
</style>
