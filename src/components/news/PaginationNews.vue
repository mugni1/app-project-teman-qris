<script setup lang="ts">
import type { News } from '@/types/news.type'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next'
import { computed } from 'vue'

const emits = defineEmits<{
  (e: 'changePage', v: number): void
}>()

const props = defineProps<{
  page: string
  limit: string
  data: News[]
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
  <section :class="['w-full flex mt-4', Number(page) > 1 ? 'justify-between' : ' justify-end']">
    <button class="btn btn-sm btn-primary" @click="handlePrev" v-show="!isFirstPage">
      <ChevronLeftIcon class="size-5" /> Baru Sebelumnya
    </button>
    <button class="btn btn-sm btn-primary" @click="handleNext" v-show="!isLastPage">
      Lama Selanjutnya <ChevronRightIcon class="size-5" />
    </button>
  </section>
</template>
