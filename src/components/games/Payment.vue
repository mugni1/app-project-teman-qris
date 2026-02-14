<script setup lang="ts">
import { ref, watch } from 'vue'
import IconQris from '@/icons/IconQris.vue'
import { data } from './data'

// state
const emits = defineEmits<{
  (e: 'changePayment', value: undefined | string): void
}>()
const selectedPayment = ref<undefined | string>()

// watchers
watch(selectedPayment, (newValue) => {
  emits('changePayment', newValue)
})
</script>

<template>
  <div class="card-item">
    <h3 class="card-title text-primary">3. Metode Pembayaran</h3>
    <div class="space-y-2">
      <label v-for="method in data.paymentMethods" :key="method.value" class="block cursor-pointer">
        <input
          v-model="selectedPayment"
          :value="method.value"
          type="radio"
          name="payment_method"
          class="peer sr-only"
        />
        <div class="card-payment">
          <div class="flex items-center gap-8">
            <IconQris v-if="method.value === 'qris'" class="size-15 shrink-0 text-base-content" />
            <div>
              <p class="card-title">{{ method.label }}</p>
              <p class="text-xs opacity-70">{{ method.description }}</p>
            </div>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>

<style scoped>
@import '../../assets/main.css';

.card-item {
  @apply card bg-base-200 border border-base-300 space-y-2 p-4;
}

.card-payment {
  @apply flex items-center justify-between rounded-xl border border-base-300 bg-base-100 p-4 peer-checked:border-primary peer-checked:bg-primary/10;
}
</style>
