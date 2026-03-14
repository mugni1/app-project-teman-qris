<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { motion } from 'motion-v'
import { themes } from '@/components/navbar/data'

const props = defineProps<{
  active: boolean
}>()
const emits = defineEmits<{
  (e: 'changeActive', value: boolean): void
}>()

// state
const { setTheme, theme } = useAppStore()

// methods
const handleChange = () => {
  emits('changeActive', !props.active)
}
</script>

<template>
  <motion.section
    @click.self="handleChange"
    :initial="{ opacity: 0 }"
    :animate="{ opacity: active ? 1 : 0 }"
    :transition="{ duration: 0.2 }"
    :class="['fixed inset-0 z-40 backdrop-blur-sm transition-all duration-200 px-4 ', active ? 'visible' : 'invisible']"
  >
    <div class="mx-auto mt-20 lg:mt-32 max-w-3xl">
      <motion.div
        :initial="{ opacity: 0, y: 200 }"
        :animate="{ opacity: active ? 1 : 0, y: active ? 0 : 200 }"
        :transition="{ duration: 0.2 }"
        class="card bg-base-100 mt-20 border border-base-300 md:mx-4 py-4 px-2"
      >
        <ul class="w-full max-h-[60vh] flex flex-col overflow-y-scroll space-y-2">
          <li v-for="item in themes" :key="theme">
            <label class="flex items-center gap-3 px-2">
              <div :data-theme="item" class="bg-base-100 grid grid-cols-2 gap-0.5 rounded-md p-1 shadow">
                <div class="bg-base-content size-2 rounded-full"></div>
                <div class="bg-primary size-2 rounded-full"></div>
                <div class="bg-secondary size-2 rounded-full"></div>
                <div class="bg-accent size-2 rounded-full"></div>
              </div>
              <input
                type="radio"
                name="theme-dropdown"
                class="theme-controller btn btn-sm btn-ghost flex-1 justify-start capitalize"
                :value="item"
                v-model="theme"
                @change="setTheme(item)"
                :aria-label="item"
              />
            </label>
          </li>
        </ul>
      </motion.div>
    </div>
  </motion.section>
</template>
