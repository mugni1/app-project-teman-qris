<script setup lang="ts">
import type { Category } from '@/types/category'
import { Gamepad2 } from 'lucide-vue-next'

const props = defineProps<{
  data: Category[] | undefined
  isPending: boolean
}>()
</script>

<template>
  <h1 class="font-bold text-base lg:text-2xl flex items-center gap-2 mb-2">
    <Gamepad2 class="size-5 lg:size-7" />
    TOPUP GAMES
  </h1>
  <div v-if="isPending" class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
    <div
      v-for="_ in 12"
      class="card skeleton border border-base-300 aspect-square w-full h-full object-cover origin-center"
    ></div>
  </div>
  <div v-if="data && !isPending" class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
    <div v-for="item in data" :key="item.id">
      <img
        :src="item.image_url"
        alt="image"
        class="card bg-base-300 border border-base-300 aspect-square w-full h-full object-cover origin-center"
      />
    </div>
  </div>
</template>
