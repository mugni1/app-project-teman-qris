<script setup lang="ts">
import { ref, watch } from 'vue'
import { XCircleIcon } from 'lucide-vue-next'

const props = defineProps<{
  isPending: boolean
  error_1: string | null | undefined
  error_2: string | null | undefined
  column_1: boolean
  column_2: boolean
  column_1_title: string
  column_2_title: string
}>()
const emits = defineEmits<{
  (e: 'changeColumn1', value: string | undefined): void
  (e: 'changeColumn2', value: string | undefined): void
}>()
const column1 = ref<undefined | string>()
const column2 = ref<undefined | string>()

watch(column1, (newValue) => {
  emits('changeColumn1', newValue)
})
watch(column2, (newValue) => {
  emits('changeColumn2', newValue)
})
</script>

<template>
  <div class="card-item">
    <h3 class="card-title text-primary">1. Masukan Data Akun</h3>
    <div v-if="!isPending" class="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
      <fieldset class="fieldset" v-if="column_1">
        <legend class="fieldset-legend">{{ column_1_title }}</legend>
        <input
          type="text"
          v-model="column1"
          class="input focus:outline-none focus:border-primary w-full"
          :placeholder="`Masukan ${column_1_title}`"
        />
        <p v-if="error_1" class="label text-error text-xs"><XCircleIcon class="size-3" /> {{ error_1 }}</p>
      </fieldset>
      <fieldset class="fieldset" v-if="column_2">
        <legend class="fieldset-legend">{{ column_2_title }}</legend>
        <input
          type="text"
          v-model="column2"
          class="input focus:outline-none focus:border-primary w-full"
          :placeholder="`Masukan ${column_2_title}`"
        />
        <p v-if="error_2" class="label text-error text-xs"><XCircleIcon class="size-3" /> {{ error_2 }}</p>
      </fieldset>
    </div>
    <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
      <fieldset class="fieldset">
        <span class="w-30 h-5 skeleton"></span>
        <input type="text" class="border-none input focus:outline-none focus:border-primary w-full skeleton" />
      </fieldset>
      <fieldset class="fieldset">
        <span class="w-30 h-5 skeleton"></span>
        <input type="text" class="border-none input focus:outline-none focus:border-primary w-full skeleton" />
      </fieldset>
    </div>
  </div>
</template>

<style scoped>
@import '../../assets/main.css';

.card-item {
  @apply card bg-base-200 border border-base-300 space-y-2 p-4;
}
</style>
