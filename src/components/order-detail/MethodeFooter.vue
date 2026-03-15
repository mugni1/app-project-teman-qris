<script setup lang="ts">
import { DownloadCloud, Loader2, SearchCheck } from 'lucide-vue-next'

const props = defineProps<{
  qris_url: string
  get_order_pending: boolean
  update_order_pending: boolean
  status: string
  trx_id: string
  id: string
}>()

const emits = defineEmits<{
  (e: 'update'): void
}>()

const handleUpdate = () => {
  emits('update')
}
</script>

<template>
  <div v-if="!get_order_pending" class="card space-y-4">
    <a
      v-if="status != 'cancelled' && status != 'failed' && status != 'expired' && status != 'paid'"
      :href="qris_url"
      target="_blank"
      download="QRIS.png"
      class="btn btn-secondary w-full"
    >
      <DownloadCloud class="size-5" /> Unduh QRIS
    </a>
    <button class="btn btn-primary w-full" @click="handleUpdate">
      <Loader2 v-if="update_order_pending" class="size-5 animate-spin" />
      <SearchCheck v-if="!update_order_pending" class="size-5" />
      Perbarui Transaksi
    </button>
  </div>
  <div v-else class="card space-y-4">
    <div class="w-full h-10 skeleton"></div>
    <div class="w-full h-10 skeleton"></div>
  </div>
</template>
