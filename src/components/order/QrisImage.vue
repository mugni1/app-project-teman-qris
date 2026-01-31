<script setup lang="ts">
const props = defineProps<{
  pending: boolean
  status: string
  imageUrl: string
}>()
</script>
<template>
  <div class="card space-y-1">
    <div v-if="pending" class="skeleton w-6/12 lg:w-4/12 aspect-square"></div>
    <img
      v-if="!pending && status != 'expired' && status != 'failed' && status != 'cancelled'"
      :src="imageUrl"
      loading="eager"
      class="w-6/12 lg:w-4/12 border-2"
      alt="qris"
    />
  </div>
</template>
