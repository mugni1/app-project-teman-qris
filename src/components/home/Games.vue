<script setup lang="ts">
import { computed } from 'vue'
import type { Category } from '@/types/category'
import type { HttpStatusCode } from 'axios'
import { Gamepad2, InfoIcon, Loader } from 'lucide-vue-next'

const props = defineProps<{
  data: Category[] | undefined
  isPending: boolean
  isRefetching: boolean
  status: HttpStatusCode
  message: string
}>()
const emits = defineEmits<{
  (e: 'refetch'): void
}>()
const isError = computed(() => !props.isPending && props.status !== 200)
const hasData = computed(() => Array.isArray(props.data) && props.data.length > 0)
const isEmpty = computed(() => !props.isPending && !isError.value && !hasData.value)

// methods
const handleRefetch = () => {
  emits('refetch')
}
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
  <div v-else-if="isError">
    <div class="w-full card flex flex-col gap-2 justify-center items-center border border-error py-10">
      <p class="flex items-center gap-2 text-error capitalize"><InfoIcon class="size-5" /> {{ message }}</p>
      <button class="btn btn-sm md:btn-md btn-success" @click="handleRefetch">
        <Loader :class="['size-4 md:size-5', isRefetching && 'animate-spin']" /> Coba Lagi
      </button>
    </div>
  </div>
  <div v-else-if="hasData" class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
    <div v-for="item in data" :key="item.id">
      <img
        :src="item.image_url"
        alt="image"
        class="card bg-base-300 border border-base-300 aspect-square w-full h-full object-cover origin-center"
      />
    </div>
  </div>
  <div v-else-if="isEmpty">
    <div class="w-full card flex justify-center items-center border border-base-300 py-10">
      <p class="flex items-center gap-2"><InfoIcon class="size-5" /> Belum ada item</p>
    </div>
  </div>
</template>
