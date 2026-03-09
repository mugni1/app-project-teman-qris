<script setup lang="ts">
import { InfoIcon, SearchIcon } from 'lucide-vue-next'
import { motion } from 'motion-v'

// props
const props = defineProps<{
  active: boolean
}>()
const emits = defineEmits<{
  (e: 'changeActive', value: boolean): void
}>()

// methods
const handleChange = () => {
  emits('changeActive', !props.active)
}
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
      <label class="input w-full outline-none">
        <search-icon class="size-6" />
        <input type="email" placeholder="Cari Produk..." required />
      </label>
      <div role="alert" class="alert alert-vertical gap-2 py-4 sm:alert-horizontal">
        <InfoIcon />
        <div>
          <h3 class="font-bold">Tidak ada hasil!</h3>
          <div class="text-xs">Cari produk yang sesuai</div>
        </div>
      </div>
    </motion.div>
  </section>
</template>
