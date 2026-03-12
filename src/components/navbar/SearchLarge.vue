<script setup lang="ts">
import { useGetCategories } from '@/hooks/useGetCategories'
import type { Category } from '@/types/category'
import { InfoIcon, SearchIcon } from 'lucide-vue-next'
import { computed, watch } from 'vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const emits = defineEmits<{
  (e: 'changeActive', value: boolean): void
}>()

// state
const router = useRouter()
const isFocus = ref(false)
const search = ref('')
const debouncedSearch = ref('')
const params = computed(() => ({ limit: '5', search: debouncedSearch.value }))
const categories = ref<Category[]>([])

// hooks
const { data, isPending } = useGetCategories(params)

// methods
const handleGo = (id: string) => {
  router.push(`/top-up/${id}`)
  search.value = ''
}

// watchers
let timeout: ReturnType<typeof setTimeout>
watch(search, (value) => {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    debouncedSearch.value = value
  }, 500)
})
watch(data, (newValue) => {
  if (newValue && newValue.data) {
    categories.value = newValue.data
  }
})
</script>

<template>
  <div class="w-full outline-none col-span-8 hidden lg:flex relative">
    <!-- input  -->
    <div class="relative flex w-full items-center">
      <SearchIcon class="size-4 left-3 absolute z-50" />
      <input
        class="input input-sm ps-10 w-full outline-none focus:border-primary bg-base-100"
        type="email"
        placeholder="Cari Produk..."
        v-model="search"
        required
        @focus="isFocus = true"
        @blur="isFocus = false"
      />
    </div>

    <!-- card  -->
    <div v-if="isFocus" class="absolute w-full top-10 bg-base-100 border border-base-content/20 card p-4">
      <!-- empty -->
      <div
        v-if="categories.length < 1 || search.length < 1 || isPending"
        role="alert"
        class="alert alert-vertical gap-2 py-4"
      >
        <InfoIcon />
        <div>
          <h3 class="font-bold">Tidak ada hasil!</h3>
          <div class="text-xs">Cari produk yang sesuai</div>
        </div>
      </div>

      <!-- list  -->
      <div v-if="categories.length > 0 && search.length > 0 && !isPending" class="flex flex-col gap-2">
        <div
          v-for="item in categories"
          :key="item.id"
          @click="handleGo(item.id)"
          class="grid grid-cols-9 items-center p-4 gap-4 bg-base-200 card cursor-pointer hover:bg-base-300 transition"
        >
          <img :src="item.image_url" alt="image" class="aspect-square object-cover rounded-md col-span-1" />

          <div class="col-span-5">
            <p class="line-clamp-1 text-base font-medium">
              {{ item.title }}
            </p>
            <p class="line-clamp-1 text-sm text-base-content/50">
              {{ item.studio }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
