<script setup lang="ts">
import type { GetOrderDetailResponse } from '@/types/order.type'

const props = defineProps<{
  data: GetOrderDetailResponse
}>()
</script>

<template>
  <div class="card bg-base-200 border border-base-300 p-4 grid grid-cols-12 gap-4">
    <div class="col-span-3 aspect-square bg-white overflow-hidden rounded-md">
      <img :src="data.data?.item.category.image_url ?? ''" alt="image" />
    </div>
    <div class="col-span-9 space-y-2">
      <h3 class="font-semibold text-base">Informasi Transaksi</h3>
      <div class="flex flex-col gap-1 text-xs md:text-sm">
        <div class="w-full grid grid-cols-2 justify-between overflow-hidden gap-4">
          <p class="truncate">Produk :</p>
          <p class="truncate">{{ data.data?.item.title ?? '-' }}</p>
        </div>
        <div class="w-full grid grid-cols-2 justify-between overflow-hidden gap-4">
          <p class="truncate">{{ data.data?.item.category.column_1_title ?? '-' }} :</p>
          <p class="truncate">
            <span>{{ data.data?.destination ?? '-' }}</span>
            <span v-if="data.data && data.data.destination_second"> ({{ data.data.destination_second ?? '' }})</span>
          </p>
        </div>
        <div class="w-full grid grid-cols-2 justify-between overflow-hidden gap-4">
          <p class="truncate">Email :</p>
          <p class="truncate">{{ data.data?.user.email ?? '-' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
