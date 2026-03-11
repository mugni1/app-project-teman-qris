<script setup lang="ts">
import type { Category } from '@/types/category'
import { RouterLink } from 'vue-router'

const props = defineProps<{
  data: Category[]
}>()
</script>

<template>
  <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
    <div v-for="category in data" :key="category.id">
      <RouterLink :to="`/top-up/${category.id}`">
        <img
          :src="category.image_url"
          alt="image"
          class="card bg-base-200 border border-base-300 aspect-square w-full h-full object-cover origin-center"
        />
      </RouterLink>
    </div>
  </div>
</template>
