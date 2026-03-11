<script setup lang="ts">
import { computed } from 'vue'
import type { Category } from '@/types/category'
import type { HttpStatusCode } from 'axios'
import { InfoIcon } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import ErrorCard from '../global/ErrorCard.vue'
import EmptyCard from '../global/EmptyCard.vue'

const props = defineProps<{
  title: string
  icon: unknown
  data: Category[] | undefined
  isPending: boolean
  isRefetching: boolean
  status: HttpStatusCode
  message: string
}>()
const emits = defineEmits<{
  (e: 'refetch'): void
}>()

// state
const isError = computed(() => !props.isPending && props.status !== 200)
const hasData = computed(() => Array.isArray(props.data) && props.data.length > 0)
const isEmpty = computed(() => !props.isPending && !isError.value && !hasData.value)

// methods
const handleRefetch = () => {
  emits('refetch')
}
</script>

<template>
  <section class="space-y-4">
    <h1 class="font-bold text-base lg:text-xl flex items-center gap-2 mb-3 text-primary">
      <component :is="icon" class="size-5 lg:size-6" />
      {{ title }}
    </h1>
    <div v-if="isPending" class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <div
        v-for="_ in 12"
        class="card skeleton border border-base-300 aspect-square w-full h-full object-cover origin-center"
      ></div>
    </div>
    <ErrorCard
      v-else-if="isError"
      :is-refetching="isRefetching"
      :status="status"
      :message="message"
      @refetch="handleRefetch"
    />
    <div v-else-if="hasData" class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <div v-for="item in data" :key="item.id">
        <RouterLink :to="`/top-up/${item.id}`">
          <img
            :src="item.image_url"
            alt="image"
            class="card bg-base-200 border border-base-300 aspect-square w-full h-full object-cover origin-center"
          />
        </RouterLink>
      </div>
    </div>
    <EmptyCard v-else-if="isEmpty" title="Tidak ada produk." />
  </section>
</template>
