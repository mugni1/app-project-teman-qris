<script setup lang="ts">
import IconInstant from '@/icons/IconInstant.vue'
import { ref, watch } from 'vue'
import { XCircleIcon } from 'lucide-vue-next'
import type { Item } from '@/types/item.type'
import type { HttpStatusCode } from 'axios'
import EmptyCard from '@/components/global/EmptyCard.vue'
import ErrorCard from '@/components/global/ErrorCard.vue'
import ItemsPending from './ItemsPending.vue'

// state
const props = defineProps<{
  status: HttpStatusCode
  message: string
  isRefetching: boolean
  isPending: boolean
  items: Item[]
  errMsg: string | null | undefined
}>()
const emits = defineEmits<{
  (e: 'changeItem', value: Item | undefined): void
  (e: 'refetch'): void
}>()

// state
const selectedItem = ref<undefined | Item>()

// watcher
watch(selectedItem, (newValue) => {
  emits('changeItem', newValue)
})
</script>

<template>
  <div class="card-item">
    <!-- title  -->
    <h3 class="card-title text-primary">2. Pilih Item</h3>

    <!-- pending  -->
    <ItemsPending v-if="isPending" />

    <!-- empty  -->
    <EmptyCard v-if="!isPending && status == 200 && items.length < 1" title="Produk belum tersedia." />

    <!-- error  -->
    <ErrorCard
      v-if="!isPending && status != 200"
      :status="status"
      :is-refetching="isRefetching"
      :message="message"
      @refetch="emits('refetch')"
    />

    <!-- list  -->
    <div v-if="!isPending && status == 200 && items.length > 0" class="container-data">
      <label class="block cursor-pointer" v-for="item in items" :key="item.id">
        <input type="radio" v-model="selectedItem" name="item" :value="item" class="sr-only peer" />
        <div class="card-product">
          <div class="p-4 flex flex-col md:flex-row gap-2 md:gap-4">
            <img :src="item.image_url" alt="icon" class="size-10 object-cover" />
            <div>
              <p class="stat-title text-base-content truncate">{{ item.title }}</p>
              <div class="flex gap-2">
                <p class="text-primary text-base font-semibold truncate">Rp {{ item.price.toLocaleString('id-ID') }}</p>
              </div>
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

    <!-- error message -->
    <p v-if="errMsg" class="text-xs label text-error"><XCircleIcon class="size-3" /> {{ errMsg }}</p>
  </div>
</template>

<style scoped>
@import '../../../assets/main.css';

.card-item {
  @apply card bg-base-200 border border-base-300 space-y-2 p-4;
}
.card-product {
  @apply w-full border card bg-base-100 border-base-content/20 peer-checked:border-primary peer-checked:bg-primary/10 overflow-hidden;
}
.card-product-pending {
  @apply w-full card peer-checked:border-primary peer-checked:bg-primary/10 overflow-hidden;
}
.container-data {
  @apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4;
}
.container-pending {
  @apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4;
}
.container-empty {
  @apply card flex py-8 bg-base-100 border border-base-content/20 justify-center items-center;
}
.container-error {
  @apply card flex py-8 bg-error/10 border border-error justify-center items-center space-y-2;
}
</style>
