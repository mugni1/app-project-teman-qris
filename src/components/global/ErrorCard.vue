<script setup lang="ts">
import { LoaderIcon, TriangleAlertIcon } from 'lucide-vue-next'

const props = defineProps<{
  message: string
  status: number
  isRefetching: boolean
}>()
const emits = defineEmits<{
  (e: 'refetch'): void
}>()

// methods
const refetch = () => {
  emits('refetch')
}
</script>

<template>
  <section class="flex justify-center items-center text-center py-8 bg-error/10 card border border-error">
    <h3 class="font-bold text-xl md:text-3xl text-error">{{ status }}</h3>
    <p v-if="props.status == 500" class="capitalize card-title text-sm text-error md:text-base">
      <TriangleAlertIcon class="size-4 md:size-5" /> Terjadi Kesalahan Pada Server.
    </p>
    <p v-else class="capitalize card-title text-sm text-error md:text-base">
      <TriangleAlertIcon class="size-4 md:size-5" /> {{ message }}
    </p>
    <button v-if="status == 500" class="btn btn-success btn-sm md:btn-md mt-2" @click="refetch()">
      <LoaderIcon :class="['size-4 md:size-5', isRefetching && 'animate-spin']" />
      <span v-if="isRefetching">Tunggu..</span>
      <span v-else>Coba Lagi</span>
    </button>
  </section>
</template>
