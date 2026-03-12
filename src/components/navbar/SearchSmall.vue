<script setup lang="ts">
import type { Category } from '@/types/category'
import { computed, ref, watch } from 'vue'
import { useGetCategories } from '@/hooks/useGetCategories'
import { InfoIcon, SearchIcon } from 'lucide-vue-next'
import { motion } from 'motion-v'
import { useRouter } from 'vue-router'

const props = defineProps<{
  active: boolean
}>()
const emits = defineEmits<{
  (e: 'changeActive', value: boolean): void
}>()

// state
const router = useRouter()
const search = ref('')
const debouncedSearch = ref('')
const params = computed(() => ({ limit: '5', search: debouncedSearch.value }))
const categories = ref<Category[]>([])

// hooks
const { data, isPending } = useGetCategories(params)

// methods
const handleChange = () => {
  emits('changeActive', !props.active)
}
const handleGo = (id: string) => {
  router.push(`/top-up/${id}`)
  search.value = ''
  emits('changeActive', !props.active)
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
  <section
    @click.self="handleChange"
    :class="[
      'fixed inset-0 z-40 backdrop-blur-sm transition-all duration-200 px-4',
      props.active ? 'visible' : 'invisible',
    ]"
  >
    <motion.div
      :initial="{ opacity: 0, y: 200 }"
      :animate="{ opacity: active ? 1 : 0, y: active ? 0 : 200 }"
      :transition="{ duration: 0.2 }"
      class="container card bg-base-100 mt-20 border border-base-300 space-y-4 p-4"
    >
      <!-- input  -->
      <label class="input w-full outline-none">
        <search-icon class="size-6" />
        <input v-model="search" type="email" placeholder="Cari Produk..." required />
      </label>

      <!-- empty  -->
      <div
        v-if="categories.length < 1 || search.length < 1 || isPending"
        role="alert"
        class="alert alert-vertical gap-2 py-4 sm:alert-horizontal"
      >
        <InfoIcon />
        <div>
          <h3 class="font-bold">Tidak ada hasil!</h3>
          <div class="text-xs">Cari produk yang sesuai</div>
        </div>
      </div>

      <!-- list -->
      <div v-if="categories.length > 0 && search.length > 0 && !isPending" class="flex flex-col gap-2">
        <div
          class="grid grid-cols-8 items-center p-4 gap-4 bg-base-200 card"
          v-for="item in categories"
          @click="handleGo(item.id)"
        >
          <img :src="item.image_url" alt="image" class="aspect-square object-cover rounded-md col-span-2" />
          <div class="col-span-5">
            <p class="line-clamp-1 text-base font-medium">{{ item.title }}</p>
            <p class="line-clamp-1 text-sm text-base-content/50">{{ item.studio }}</p>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
</template>
