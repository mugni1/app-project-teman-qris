<script setup lang="ts">
import IconInstant from '@/icons/IconInstant.vue'
import { ref, watch } from 'vue'
import { InfoIcon, LoaderIcon, TriangleAlert, XCircleIcon } from 'lucide-vue-next'
import type { Item } from '@/types/item.type'
import type { HttpStatusCode } from 'axios'
import { computed } from 'vue'

// state
const props = defineProps<{
  error: string | null
  data: Item[]
  errorMessage: string
  isPending: boolean
  isRefetching: boolean
  status: HttpStatusCode
}>()
const emits = defineEmits<{
  (e: 'changeItem', value: Item | undefined): void
  (e: 'refetch'): void
}>()
const selectedItem = ref<undefined | Item>()
const isError = computed(() => !props.isPending && props.status !== 200)
const hasData = computed(() => Array.isArray(props.data) && props.data.length > 0)
const isEmpty = computed(() => !props.isPending && !isError.value && !hasData.value)

// watcher
watch(selectedItem, (newValue) => {
  emits('changeItem', newValue)
})
</script>

<template>
  <div class="card-item">
    <h3 class="card-title text-primary">2. Pilih Item</h3>
    <div v-if="isPending" class="container-pending">
      <div v-for="_ in 6" class="card-product-pending aspect-video skeleton"></div>
    </div>
    <div v-else-if="hasData" class="container-data">
      <label class="block cursor-pointer" v-for="item in data" :key="item.id">
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
    <div v-else-if="isEmpty" class="container-empty">
      <p class="card-title text-center text-sm"><InfoIcon class="size-5" /> Belum ada produk</p>
    </div>
    <div v-else-if="isError" class="container-error">
      <p class="card-title text-error text-center text-sm"><TriangleAlert class="size-5" /> {{ errorMessage }}</p>
      <button class="btn btn-success btn-sm" type="button" @click="emits('refetch')">
        <LoaderIcon :class="['size-4', isRefetching && 'animate-spin']" /> Coba Lagi
      </button>
    </div>
    <p v-if="error" class="text-xs label text-error"><XCircleIcon class="size-3" /> {{ error }}</p>
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
.card-product-pending {
  @apply w-full card peer-checked:border-primary peer-checked:bg-primary/10 overflow-hidden;
}
.container-data {
  @apply grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4;
}
.container-pending {
  @apply grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4;
}
.container-empty {
  @apply card flex py-8 bg-base-100 border border-base-content/20 justify-center items-center;
}
.container-error {
  @apply card flex py-8 bg-error/10 border border-error justify-center items-center space-y-2;
}
</style>
