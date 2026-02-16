<script setup lang="ts">
import type { Item } from '@/types/item.type'
import { Info, PercentCircle, Share2Icon, StarIcon } from 'lucide-vue-next'

const props = defineProps<{
  selectedItem: Item | null
  items: Item[]
}>()
const emits = defineEmits<{
  (e: 'onSelect', value: Item): void
}>()
</script>

<template>
  <div v-if="items.length > 0" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div
      class="rounded-lg overflow-hidden font-medium transition-all duration-300 select-none"
      role="button"
      v-for="(item, i) in items"
      :key="i"
      @click="emits('onSelect', item)"
    >
      <div
        class="p-2 px-4 lg:text-lg transition-all duration-300 text-sm"
        :class="selectedItem?.id == item.id ? 'bg-primary text-secondary-content' : 'bg-base-200 text-base-content'"
      >
        <b>{{ item.title }} </b>
      </div>
      <div
        class="pb-2 px-4 flex items-center justify-between transition-all duration-300 text-sm lg:text-base"
        :class="selectedItem?.id == item.id ? 'bg-primary text-secondary-content' : 'text-base-content'"
      >
        <b>Rp {{ item.price.toLocaleString('id-ID') }}</b>
        <div>
          <Share2Icon class="size-3 lg:size-4" />
        </div>
      </div>
    </div>
  </div>
  <div v-else class="w-full flex items-center justify-center flex-col card border py-4 border-base-content/20">
    <h2 class="font-medium text-base flex items-center gap-2"><Info class="size-5" /> Produk belum tersedia</h2>
  </div>
</template>
