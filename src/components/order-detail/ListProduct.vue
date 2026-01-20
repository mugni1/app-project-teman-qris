<script setup lang="ts">
import type { item } from '@/types/item.type'
import { PercentCircle, Share2Icon, StarIcon } from 'lucide-vue-next'

const props = defineProps<{
  selectedItem: item | null
  items: item[]
}>()
const emits = defineEmits<{
  (e: 'onSelect', value: item): void
}>()
</script>

<template>
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
    <div
      class="rounded-lg overflow-hidden font-medium transition-all duration-300 select-none"
      :class="[
        selectedItem?.id == item.id && item.type == 'regular' && 'border border-primary',
        selectedItem?.id == item.id && item.type == 'promo' && 'border border-primary',
        item.type == 'promo' && selectedItem?.id != item.id && 'border border-secondary/20',
        item.type == 'regular' && selectedItem?.id != item.id && 'border border-base-content/20',
      ]"
      role="button"
      v-for="(item, i) in items"
      :key="i"
      @click="emits('onSelect', item)"
    >
      <div
        class="p-2 px-4 text-base-content transition-all duration-300"
        :class="
          selectedItem?.id == item.id
            ? 'bg-primary/20 text-primary'
            : 'bg-secondary/20 text-secondary'
        "
        v-if="item.type == 'promo'"
      >
        <p class="flex items-center gap-2"><PercentCircle class="size-5" /> Promo</p>
      </div>
      <div
        class="p-2 px-4 text-base-content transition-all duration-300"
        :class="selectedItem?.id == item.id ? 'bg-primary/20 text-primary' : 'bg-base-content/20'"
        v-if="item.type == 'regular'"
      >
        <p class="flex items-center gap-2"><StarIcon class="size-5" /> Regular</p>
      </div>
      <div
        class="p-2 px-4 text-lg transition-all duration-300"
        :class="selectedItem?.id == item.id ? 'bg-primary text-secondary-content' : 'bg-base-200'"
      >
        <b>{{ item.title }} </b>
      </div>
      <div
        class="pb-2 px-4 flex items-center justify-between transition-all duration-300"
        :class="
          selectedItem?.id == item.id ? 'bg-primary text-secondary-content' : 'text-secondary'
        "
      >
        <b>Rp {{ item.price.toLocaleString('id-ID') }}</b>
        <div>
          <Share2Icon class="size-4" />
        </div>
      </div>
    </div>
  </div>
</template>
