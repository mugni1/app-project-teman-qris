<script setup lang="ts">
import { ref, watch } from 'vue'
import { XCircleIcon } from 'lucide-vue-next'
import InputPending from './InputPending.vue'
import type { HttpStatusCode } from 'axios'
import type { Category } from '@/types/category'
import ErrorCard from '@/components/global/ErrorCard.vue'

const props = defineProps<{
  category?: Category
  status: HttpStatusCode
  message: string
  isRefetching: boolean
  isPending: boolean
  errMsg1: string | null | undefined
  errMsg2: string | null | undefined
}>()
const emits = defineEmits<{
  (e: 'changeColumn1', value: string | undefined): void
  (e: 'changeColumn2', value: string | undefined): void
  (e: 'refetch'): void
}>()

// state
const column1 = ref<undefined | string>()
const column2 = ref<undefined | string>()

// watchers
watch(column1, (newValue) => {
  emits('changeColumn1', newValue)
})
watch(column2, (newValue) => {
  emits('changeColumn2', newValue)
})
</script>

<template>
  <div class="card-item">
    <!-- title  -->
    <h3 class="card-title text-primary">1. Masukan Data Akun</h3>

    <!-- pending  -->
    <InputPending v-if="isPending" />

    <!-- error  -->
    <ErrorCard
      v-if="!isPending && status != 200"
      :status="status"
      :message="message"
      :is-refetching="isRefetching"
      @refetch="emits('refetch')"
    />

    <!-- has-data  -->
    <div v-if="!isPending && category && status == 200" class="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
      <fieldset class="fieldset" v-if="category.column_1">
        <legend class="fieldset-legend">{{ category.column_1_title }}</legend>
        <input
          type="text"
          v-model="column1"
          class="input focus:outline-none focus:border-primary w-full"
          :placeholder="`Masukan ${category.column_1_title}`"
        />
        <p v-if="errMsg1" class="label text-error text-xs"><XCircleIcon class="size-3" /> {{ errMsg1 }}</p>
      </fieldset>
      <fieldset class="fieldset" v-if="category.column_2">
        <legend class="fieldset-legend">{{ category.column_2_title }}</legend>
        <input
          type="text"
          v-model="column2"
          class="input focus:outline-none focus:border-primary w-full"
          :placeholder="`Masukan ${category.column_2_title}`"
        />
        <p v-if="errMsg2" class="label text-error text-xs"><XCircleIcon class="size-3" /> {{ errMsg2 }}</p>
      </fieldset>
    </div>
  </div>
</template>

<style scoped>
@import '../../../assets/main.css';

.card-item {
  @apply card bg-base-200 border border-base-300 space-y-2 p-4;
}
</style>
