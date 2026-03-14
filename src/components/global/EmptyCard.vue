<script setup lang="ts">
import { InfoIcon } from 'lucide-vue-next'

const props = defineProps<{
  title: string
}>()
</script>

<template>
  <section class="flex justify-center items-center text-center py-8 bg-base-100 card border border-base-content/20">
    <h3 class="font-bold text-xl md:text-3xl">404</h3>
    <p class="capitalize card-title text-sm md:text-base"><InfoIcon class="size-4 md:size-5" /> {{ title }}</p>
  </section>
</template>
