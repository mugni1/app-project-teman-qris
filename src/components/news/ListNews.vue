<script setup lang="ts">
import type { News } from '@/types/news.type'
import { useRelativeTime } from '@/composables/useRelativeTime'
import { RouterLink } from 'vue-router'
import { computed } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next'

const props = defineProps<{
  page: string
  limit: string
  data: News[]
}>()
const emits = defineEmits<{
  (e: 'changePage', v: number): void
}>()

// state
const isLastPage = computed(() => {
  return props.data.length < Number(props.limit)
})
const isFirstPage = computed(() => {
  return Number(props.page) == 1
})

// methods
const handleNext = () => {
  emits('changePage', Number(props.page) + 1)
}
const handlePrev = () => {
  emits('changePage', Number(props.page) - 1)
}
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
  <section :class="['w-full flex mt-4', Number(page) > 1 ? 'justify-between' : ' justify-end']">
    <button class="btn btn-sm btn-primary" @click="handlePrev" v-show="!isFirstPage">
      <ChevronLeftIcon class="size-5" /> Baru Sebelumnya
    </button>
    <button class="btn btn-sm btn-primary" @click="handleNext" v-show="!isLastPage">
      Lama Selanjutnya <ChevronRightIcon class="size-5" />
    </button>
  </section>
</template>
