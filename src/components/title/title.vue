<script setup lang="ts">
const props = defineProps<{
  icon: unknown
  title: string
}>()
</script>

<template>
  <h1 class="font-bold text-base lg:text-xl flex items-center gap-2 text-primary">
    <component :is="icon" class="size-5 lg:size-6" />
    {{ title }}
  </h1>
</template>
