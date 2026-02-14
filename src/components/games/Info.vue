<script setup lang="ts">
import { ref, watch } from 'vue'
import { data } from './data'
import { XCircleIcon } from 'lucide-vue-next'

const props = defineProps<{
  error: string | null
}>()
const emits = defineEmits<{
  (e: 'changeColumn1', value: string | undefined): void
  (e: 'changeColumn2', value: string | undefined): void
}>()
const column1 = ref<undefined | string>()
const column2 = ref<undefined | string>()

if (data.column1) {
  watch(column1, (newValue) => {
    emits('changeColumn1', newValue)
  })
}
if (data.column2) {
  watch(column2, (newValue) => {
    emits('changeColumn2', newValue)
  })
}
</script>

<template>
  <div class="card-item">
    <h3 class="card-title text-primary">1. Masukan Data Akun</h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
      <fieldset class="fieldset" v-if="data.column1">
        <legend class="fieldset-legend">{{ data.column1_title }}</legend>
        <input
          type="text"
          v-model="column1"
          class="input focus:outline-none focus:border-primary w-full"
          :placeholder="`Masukan ${data.column1_title}`"
        />
        <p v-show="error" class="label text-error"><XCircleIcon class="size-3" /> {{ error }}</p>
      </fieldset>
      <fieldset class="fieldset" v-if="data.column2">
        <legend class="fieldset-legend">{{ data.column2_title }}</legend>
        <input
          type="text"
          v-model="column2"
          class="input focus:outline-none focus:border-primary w-full"
          :placeholder="`Masukan ${data.column2_title}`"
        />
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
