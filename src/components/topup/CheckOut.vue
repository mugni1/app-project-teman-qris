<script setup lang="ts">
import { usePostPaymentQrisPw } from '@/hooks/useCreateOrder'
import type { Item } from '@/types/item'
import type { CreateOrderResponse } from '@/types/order.type'
import { HttpStatusCode } from 'axios'
import { CheckCircle2, Loader2, ShoppingBag, XCircleIcon } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'

// PROPS
const props = defineProps<{
  phoneNumber: string | null
  selectedItem: Item | null
  selectedPayment: string | null
}>()

// STATE
const { mutateAsync, isPending } = usePostPaymentQrisPw()
const router = useRouter()

// METHODS
const handleSubmit = async () => {
  try {
    const result = await mutateAsync({
      item_id: props.selectedItem?.id || '',
      amount: props.selectedItem?.price || 0,
      customer_phone: props.phoneNumber || '',
      destination: props.phoneNumber || '',
    })
    if (result.status == HttpStatusCode.Created) {
      toast.success(result.message, { action: { label: 'Close' } })
      router.push('/detail/' + result.data?.id || '')
    } else {
      console.log(result)
      if (result.status == 403 || result.status == 401) {
        toast.error('Please login to continue', { action: { label: 'Close' } })
      } else {
        toast.error(result.message, { action: { label: 'Close' } })
      }
    }
  } catch (err: unknown) {
    const error = err as CreateOrderResponse
    toast.error(`${error.message}, try again later`, { action: { label: 'Close' } })
  }
}
</script>

<template>
  <dialog id="my_modal_3" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold text-primary flex items-center gap-2">
        <ShoppingBag /> Detail Pesanan
      </h3>
      <p class="py-4 font-medium">Jangan lupa konfirmasi Nomor HP kamu dengan benar ya.</p>
      <div class="space-y-2 grid grid-cols-2 text-base">
        <div class="space-y-2">
          <p>Nomer Tujuan :</p>
          <p>Harga :</p>
          <p>Metode :</p>
        </div>
        <div class="font-bold space-y-2">
          <p>{{ phoneNumber }}</p>
          <p>Rp {{ selectedItem?.price.toLocaleString('id-ID') || 0 }}</p>
          <p>{{ selectedPayment?.toUpperCase() || '' }}</p>
        </div>
      </div>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn btn-soft"><XCircleIcon class="size-5" /> Batal</button>
        </form>
        <button v-if="isPending" disabled class="btn btn-primary">
          <Loader2 class="size-5 animate-spin" />Loading..
        </button>
        <button v-if="!isPending" @click="handleSubmit" class="btn btn-primary">
          <CheckCircle2 class="size-5" />Konfirmasi
        </button>
      </div>
    </div>
  </dialog>

  <div
    class="card bg-base-200 p-4 border border-base-content/20 gap-2 grid grid-cols-1 lg:grid-cols-2"
  >
    <div class="col-span-1">
      <p class="text-sm text-base-content/60 capitalize">
        {{ selectedItem?.title || '' }} - {{ selectedItem?.type_status || '' }}
      </p>
      <b>Rp {{ selectedItem?.price.toLocaleString('id-ID') || 0 }}</b>
    </div>
    <button
      class="btn btn-primary"
      onclick="my_modal_3.showModal()"
      :disabled="!selectedItem || !selectedPayment || !phoneNumber"
    >
      <ShoppingBag class="size-5" /> Beli Sekarang
    </button>
  </div>
</template>
