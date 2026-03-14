<script setup lang="ts">
import type { Item } from '@/types/item.type'
import type { CreateOrderResponse } from '@/types/order.type'
import Content from '@/components/global/Content.vue'
import Checkout from '@/components/topup/Checkout.vue'
import CS from '@/components/topup/CS.vue'
import Info from '@/components/topup/Info.vue'
import Items from '@/components/topup/Items.vue'
import Payment from '@/components/topup/Payment.vue'
import Header from '@/components/topup/header/Header.vue'
import { LoaderIcon, ShoppingBag } from 'lucide-vue-next'
import { computed, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { checkoutSchema, checkoutSchemaSecond } from '@/schema/checkout.schema'
import { toast } from 'vue-sonner'
import { useGetCategoryDetail } from '@/hooks/useGetCategoryDetail'
import { usePostPaymentQrisPw } from '@/hooks/useCreateOrder'
import { HttpStatusCode } from 'axios'
import Input from '@/components/topup/input/Input.vue'

// state
const router = useRouter()
const route = useRoute()
const slug = computed(() => (Array.isArray(route.params.slug) ? route.params.slug.join('') : (route.params.slug ?? '')))
const { data: category, isPending: pendingGet, refetch, isRefetching } = useGetCategoryDetail(slug)
const { mutateAsync, isPending: pendingPost } = usePostPaymentQrisPw()
const isSecondColumnActive = computed(() => !!category.value?.data?.column_2)
const column1 = ref<string>()
const column2 = ref<string>()
const selectedPayment = ref<string>()
const selectedItem = ref<Item>()

// form
const form = computed(() => ({
  destination: column1.value ?? '',
  destination_second: column2.value ?? '',
  item_id: selectedItem.value?.id ?? '',
  payment_method: selectedPayment.value ?? '',
}))
const formError = reactive<Record<string, string | null>>({
  destination: null,
  destination_second: null,
  item_id: null,
  payment_method: null,
})

// helper
const resetErrors = () => {
  Object.keys(formError).forEach((key) => {
    formError[key] = null
  })
}
const validate = () => {
  resetErrors()
  const schema = isSecondColumnActive.value ? checkoutSchemaSecond : checkoutSchema
  const { success, error } = schema.safeParse(form.value)
  if (success) return true
  error.issues.forEach((err) => {
    const field = err.path.join('_')
    if (field in formError) {
      formError[field] = err.message
    }
  })
  return false
}
const buildPayload = () => {
  const base = {
    item_id: selectedItem.value?.id ?? '',
    amount: selectedItem.value?.price ?? 0,
    destination: form.value.destination,
  }
  if (isSecondColumnActive.value) {
    return {
      ...base,
      destination_second: form.value.destination_second,
    }
  }
  return base
}

// submit
const handleSubmit = async () => {
  if (!validate()) return
  if (!selectedItem.value) return
  try {
    const result = await mutateAsync(buildPayload())
    if (result.status === HttpStatusCode.Created) {
      toast.success(result.message)
      router.push(`/detail/${result.data?.id ?? ''}`)
      return
    }
    if ([401, 403].includes(result.status)) {
      toast.error('Silahkan login terlebih dahulu untuk melakukan transaksi.')
    } else {
      toast.error(result.message)
    }
  } catch (err) {
    const error = err as CreateOrderResponse
    toast.error(`${error.message}, try again later`)
  }
}

// methods
const handleChangeColumn1 = (val?: string) => {
  column1.value = val
  validate()
}
const handleChangeColumn2 = (val?: string) => {
  column2.value = val
  validate()
}
const handleChangePayment = (val?: string) => {
  selectedPayment.value = val
  validate()
}
const handleChangeItem = (val?: Item) => {
  selectedItem.value = val
  validate()
}
</script>

<template>
  <Content class="space-y-4">
    <Header
      :category="category?.data || undefined"
      :status="category?.status || 500"
      :message="category?.message || 'Server sedang sibuk.'"
      :is-pending="pendingGet"
      :is-refetching="isRefetching"
      @refetch="refetch()"
    />
    <form @submit.prevent="handleSubmit" class="grid grid-cols-1 md:col-span-2 lg:grid-cols-3 gap-4">
      <section class="space-y-4 lg:col-span-2">
        <Input
          :category="category?.data || undefined"
          :status="category?.status || 500"
          :message="category?.message || 'Server sedang sibuk'"
          :is-pending="pendingGet"
          :is-refetching="isRefetching"
          :err-msg1="formError.destination"
          :err-msg2="formError.destination_second"
          @refetch="refetch()"
          @changeColumn1="handleChangeColumn1"
          @changeColumn2="handleChangeColumn2"
        />
        <Items
          @refetch="refetch()"
          @change-item="handleChangeItem"
          :error-message="category?.message || 'Internal server error'"
          :error="formError.item_id"
          :data="category?.data?.items || []"
          :is-pending="pendingGet"
          :is-refetching="isRefetching"
          :status="category?.status || 500"
        />
        <Payment @change-payment="handleChangePayment" :error="formError.payment_method" />
      </section>
      <section class="space-y-4">
        <CS />
        <Checkout :item="selectedItem" :category="category?.data || undefined" />
        <button type="submit" class="btn btn-primary w-full" :disabled="pendingPost">
          <ShoppingBag class="size-5" v-if="!pendingPost" />
          <LoaderIcon class="size-5 animate-spin" v-if="pendingPost" />
          <span v-if="!pendingPost">Pesan Sekarang</span>
          <span v-if="pendingPost">Harap tunggu..</span>
        </button>
      </section>
    </form>
  </Content>
</template>
