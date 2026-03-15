<script setup lang="ts">
import type { GetOrderDetailResponse } from '@/types/order.type'
import { DownloadCloud, LoaderIcon, SearchCheck } from 'lucide-vue-next'

const props = defineProps<{
  data: GetOrderDetailResponse
  isPendingUpdate: boolean
}>()

const emits = defineEmits<{
  (e: 'update'): void
}>()

const handleUpdate = () => {
  emits('update')
}
</script>

<template>
  <div class="card space-y-4">
    <a
      v-if="
        data.data?.status != 'cancelled' &&
        data.data?.status != 'failed' &&
        data.data?.status != 'expired' &&
        data.data?.status != 'paid'
      "
      :href="data.data?.qris_url"
      target="_blank"
      download="QRIS.png"
      class="btn btn-secondary w-full"
    >
      <DownloadCloud class="size-5" /> Unduh QRIS
    </a>
    <button class="btn btn-primary w-full" @click="handleUpdate">
      <LoaderIcon v-if="isPendingUpdate" class="size-5 animate-spin" />
      <SearchCheck v-if="!isPendingUpdate" class="size-5" />
      <span v-if="isPendingUpdate">Harap Tunggu..</span>
      <span v-if="!isPendingUpdate">Perbarui Transaksi</span>
    </button>
  </div>
</template>
