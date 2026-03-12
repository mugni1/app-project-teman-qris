<script setup lang="ts">
import type { Category } from '@/types/category'
import type { HttpStatusCode } from 'axios'
import type { Meta } from '@/types/meta.type'
import { LoaderIcon } from 'lucide-vue-next'
import ErrorCard from '../global/ErrorCard.vue'
import EmptyCard from '../global/EmptyCard.vue'
import Title from '../global/Title.vue'
import PendingCategory from '../cateory/PendingCategory.vue'
import ListCategory from '../cateory/ListCategory.vue'

const props = defineProps<{
  title: string
  icon: unknown
  data: Category[]
  meta?: Meta
  isPending: boolean
  isRefetching: boolean
  status: HttpStatusCode
  message: string
}>()
const emits = defineEmits<{
  (e: 'refetch'): void
  (e: 'increment'): void
}>()

// methods
const handleRefetch = () => {
  emits('refetch')
}
</script>

<template>
  <section class="space-y-4">
    <Title :icon="icon" :title="title" />

    <!-- pending category  -->
    <PendingCategory v-if="isPending" />

    <!-- list category  -->
    <ListCategory v-if="!isPending && data && data.length > 0 && status == 200" :data="data" />

    <!-- empty category  -->
    <EmptyCard v-if="!isPending && data && data.length < 1 && status == 200" title="Tidak ada kategori." />

    <!-- error poroduk  -->
    <ErrorCard
      v-if="!isPending && data && data.length < 1 && status != 200"
      :is-refetching="isRefetching"
      :status="status"
      :message="message"
      @refetch="handleRefetch"
    />

    <!-- load more  -->
    <button
      v-if="meta && data.length < meta.total && !isPending"
      @click="emits('increment')"
      class="btn btn-sm md:btn-md btn-primary flex mx-auto md:mx-0"
    >
      <LoaderIcon class="size-4 md:size-5" /> Muat Lainnya
    </button>
  </section>
</template>
