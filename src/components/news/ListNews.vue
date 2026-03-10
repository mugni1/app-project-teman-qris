<script setup lang="ts">
import type { News } from '@/types/news.type'
import { useRelativeTime } from '@/composables/useRelativeTime'
import { RouterLink } from 'vue-router'

const props = defineProps<{
  data: News[]
}>()
</script>

<template>
  <section class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
    <div v-for="news in data" class="card bg-base-200 overflow-hidden border border-base-300 shadow-md">
      <RouterLink :to="`/news/${news.id}`">
        <img :src="news.image_url" :alt="news.title" class="w-full aspect-video object-cover" />
        <div class="p-4 space-y-2">
          <h1 class="card-title text-sm md:text-base line-clamp-2">{{ news.title }}</h1>
          <p class="menu-title p-0 text-xs md:text-sm line-clamp-4">{{ news.summary }}</p>
          <div class="flex justify-between">
            <span class="p-0 text-xs md:text-sm">{{
              new Date(news.created_at).toLocaleString('id-ID', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })
            }}</span>
            <span class="p-0 text-xs md:text-sm">{{ useRelativeTime(news.created_at).value }}</span>
          </div>
        </div>
      </RouterLink>
    </div>
  </section>
</template>
