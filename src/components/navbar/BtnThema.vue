<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'
import { motion } from 'motion-v'

const props = defineProps<{
  active: boolean
}>()
const emits = defineEmits<{
  (e: 'changeActive', value: boolean): void
}>()

const handleChange = () => {
  emits('changeActive', !props.active)
}
</script>

<template>
  <button @click="handleChange" class="btn btn-sm btn-square md:hidden overflow-hidden">
    <motion.div
      class="absolute"
      :initial="{ opacity: 0, y: -20 }"
      :animate="{ opacity: !active ? 1 : 0, y: !active ? 0 : -20 }"
      :transition="{ duration: 0.2 }"
    >
      <div class="group-hover:border-base-content/20 grid grid-cols-2 gap-0.5 rounded-md p-1">
        <div class="bg-base-content size-1.5 rounded-full"></div>
        <div class="bg-primary size-1.5 rounded-full"></div>
        <div class="bg-secondary size-1.5 rounded-full"></div>
        <div class="bg-accent size-1.5 rounded-full"></div>
      </div>
    </motion.div>
    <motion.div
      class="absolute"
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: active ? 1 : 0, y: active ? 0 : 20 }"
      :transition="{ duration: 0.2 }"
    >
      <X class="size-4.5" />
    </motion.div>
  </button>
</template>
