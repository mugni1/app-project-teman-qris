<script setup lang="ts">
const props = defineProps<{
  pending: boolean
  status: string
  imageUrl: string
}>()
</script>
<template>
  <div v-if="pending" class="card space-y-1">
    <div class="skeleton w-6/12 lg:w-4/12 aspect-square"></div>
  </div>
  <div
    v-if="
      !pending &&
      status != 'expired' &&
      status != 'failed' &&
      status != 'cancelled' &&
      status != 'paid'
    "
    class="card space-y-1"
  >
    <img :src="imageUrl" loading="eager" class="w-6/12 lg:w-4/12 border-2" alt="qris" />
  </div>
</template>
