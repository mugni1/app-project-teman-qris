<script setup lang="ts">
const props = defineProps<{
  pending: boolean
  imageUrl: string
}>()
</script>
<template>
  <div class="card space-y-1">
    <img
      v-if="!pending"
      :src="imageUrl"
      loading="eager"
      class="w-6/12 lg:w-4/12 border-2"
      alt="qris"
    />
    <div v-else class="skeleton w-6/12 lg:w-4/12 aspect-square"></div>
  </div>
</template>
