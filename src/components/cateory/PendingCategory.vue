<script setup lang="ts">
const props = defineProps<{
  count?: number
}>()
</script>

<template>
  <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
    <div
      v-for="_ in count ?? 12"
      class="card skeleton border border-base-300 aspect-square w-full h-full object-cover origin-center"
    ></div>
  </div>
</template>
