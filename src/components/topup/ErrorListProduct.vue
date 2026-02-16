<script setup lang="ts">
import type { GetItemResponse } from '@/types/item.type'
import type { QueryObserverBaseResult } from '@tanstack/vue-query'
import { Loader2, TriangleAlert } from 'lucide-vue-next'

const props = defineProps<{
  error: Error | null
  isFetching: boolean
  refetch: () => Promise<QueryObserverBaseResult<GetItemResponse, Error>>
}>()
</script>

<template>
  <div class="flex items-center justify-center flex-col gap-2 card border py-4 border-base-content/20">
    <h1 class="text-error flex gap-2 items-center" v-if="error">
      <TriangleAlert class="size-5" /> {{ error.message }}
    </h1>
    <h1 class="text-error flex gap-2 items-center" v-else><TriangleAlert class="size-5" /> Oops, Terjadi kesalahan</h1>
    <button class="btn btn-soft btn-error gap-2" @click="refetch">
      <Loader2 :class="[isFetching && 'animate-spin', 'size-5']" />Coba Lagi
    </button>
  </div>
</template>
