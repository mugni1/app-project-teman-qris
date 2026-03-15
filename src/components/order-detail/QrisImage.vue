<script setup lang="ts">
import type { GetOrderDetailResponse } from '@/types/order.type'

const props = defineProps<{
  data: GetOrderDetailResponse
}>()
</script>
<template>
  <div
    v-if="
      data.data?.status != 'expired' &&
      data.data?.status != 'waiting' &&
      data.data?.status != 'processing' &&
      data.data?.status != 'error' &&
      data.data?.status != 'failed' &&
      data.data?.status != 'cancelled' &&
      data.data?.status != 'paid'
    "
    class="card space-y-1"
  >
    <img :src="data.data?.qris_url ?? ''" loading="eager" class="w-6/12 lg:w-4/12 border-2" alt="qris" />
  </div>
</template>
