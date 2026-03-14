<script setup lang="ts">
import { CheckCircle2Icon, LoaderIcon, ShoppingBag, TriangleAlertIcon, XCircleIcon } from 'lucide-vue-next'
import { watch } from 'vue'
import { isValid } from 'zod/v3'

const props = defineProps<{
  isPending: boolean
  isValid: boolean
  destination: string
  destinationSecond: string
  totalPrice: number
  prductName: string
}>()
const emits = defineEmits<{
  (e: 'validate'): void
  (e: 'changeIsValid', v: boolean): void
}>()

// dialog
const handleOpenModal = () => {
  ;(document.getElementById('dialogCheckout') as HTMLDialogElement).showModal()
}
const handleChangeIsValid = () => {
  emits('changeIsValid', !isValid)
}

// watch
watch(
  () => props.isValid,
  (newValue) => {
    if (newValue == true) {
      handleOpenModal()
    }
  },
)
</script>

<template>
  <button type="button" @click="emits('validate')" class="btn btn-primary w-full" :disabled="isPending">
    <ShoppingBag class="size-5" v-if="!isPending" />
    <LoaderIcon class="size-5 animate-spin" v-if="isPending" />
    <span v-if="!isPending">Pesan Sekarang</span>
    <span v-if="isPending">Harap tunggu..</span>
  </button>

  <dialog id="dialogCheckout" class="modal backdrop-blur-sm">
    <!-- content  -->
    <div class="modal-box">
      <h3 class="card-title text-error"><TriangleAlertIcon /> Apakah sudah sesuai?</h3>
      <p class="py-4">Pastikan semua sudah sesuai!</p>
      <div>
        <div class="flex justify-between">
          <span>Tujuan :</span>
          <div>
            <span>{{ destination }}</span>
            <span v-if="destinationSecond.length > 0"> ({{ destinationSecond }})</span>
          </div>
        </div>
        <div class="flex justify-between">
          <span>Produk :</span><span>{{ prductName }}</span>
        </div>
        <div class="flex justify-between">
          <span>Total Harga :</span><span>Rp {{ totalPrice.toLocaleString('id-ID') }}</span>
        </div>
      </div>
      <div class="modal-action">
        <form method="dialog" @submit="handleChangeIsValid()">
          <button class="btn btn-error"><XCircleIcon class="size-5" /> Tutup</button>
        </form>
        <button class="btn btn-primary"><CheckCircle2Icon class="size-5" />Selesai</button>
      </div>
    </div>
    <!-- helper -->
    <form method="dialog" @submit="handleChangeIsValid()" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
