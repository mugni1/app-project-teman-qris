<script setup lang="ts">
import { DownloadCloud, SearchCheck } from 'lucide-vue-next'

const props = defineProps<{
  qris_url: string
  pending: boolean
  trx_id: string
  id: string
}>()
</script>

<template>
  <div v-if="!pending" class="card space-y-4">
    <a :href="qris_url" target="_blank" download="QRIS.png" class="btn btn-secondary w-full">
      <DownloadCloud class="size-5" /> Unduh QRIS
    </a>
    <button class="btn btn-primary w-full">
      <SearchCheck class="size-5" /> Perbarui Transaksi
    </button>
  </div>
  <div v-else class="card space-y-4">
    <div class="w-full h-10 skeleton"></div>
    <div class="w-full h-10 skeleton"></div>
  </div>
</template>
