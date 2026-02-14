<script setup lang="ts">
import IconInstant from '@/icons/IconInstant.vue'
import { ref, watch } from 'vue'
import { data } from './data'

export interface ItemNew {
  id: string
  title: string
  price: number
  image_url: string
}

// state
const emits = defineEmits<{
  (e: 'changeItem', value: ItemNew | undefined): void
}>()
const selectedItem = ref<undefined | ItemNew>()

// watcher
watch(selectedItem, (newValue) => {
  emits('changeItem', newValue)
})
</script>

<template>
  <div class="card-item">
    <h3 class="card-title text-primary">2. Pilih Item</h3>
    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <label class="block cursor-pointer" v-for="item in data.items" :key="item.id">
        <input type="radio" v-model="selectedItem" name="item" :value="item" class="sr-only peer" />
        <div class="card-product">
          <div class="p-4">
            <p class="stat-title text-base-content truncate">{{ item.title }}</p>
            <div class="flex gap-2">
              <p class="text-primary text-base font-semibold truncate">Rp {{ item.price.toLocaleString('id-ID') }}</p>
            </div>
          </div>
          <div class="bg-base-content/20 p-2 flex justify-end">
            <div class="p-1 bg-base-200 card">
              <IconInstant />
            </div>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>

<style scoped>
@import '../../assets/main.css';

.card-item {
  @apply card bg-base-200 border border-base-300 space-y-2 p-4;
}
.card-product {
  @apply w-full border card bg-base-100 border-base-content/20 peer-checked:border-primary peer-checked:bg-primary/10 overflow-hidden;
}
</style>
