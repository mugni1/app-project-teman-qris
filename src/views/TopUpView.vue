<script setup lang="ts">
import type { Item } from '@/types/item.type'
import type { CreateOrderResponse } from '@/types/order.type'
import Content from '@/components/global/Content.vue'
import Header from '@/components/topup/header/Header.vue'
import Input from '@/components/topup/input/Input.vue'
import Items from '@/components/topup/items/Items.vue'
import CustomerService from '@/components/topup/CustomerService.vue'
import ShippingBag from '@/components/topup/ShippingBag.vue'
import PaymentMethode from '@/components/topup/PaymentMethode.vue'
import DialogCheckout from '@/components/topup/DialogCheckout.vue'
import { computed, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { checkoutSchema, checkoutSchemaSecond } from '@/schema/checkout.schema'
import { toast } from 'vue-sonner'
import { useGetCategoryDetail } from '@/hooks/useGetCategoryDetail'
import { usePostPaymentQrisPw } from '@/hooks/useCreateOrder'
import { HttpStatusCode } from 'axios'

// state
const router = useRouter()
const route = useRoute()
const slug = computed(() => (Array.isArray(route.params.slug) ? route.params.slug.join('') : (route.params.slug ?? '')))
const { data: category, isPending: pendingGet, refetch, isRefetching } = useGetCategoryDetail(slug)
const { mutateAsync, isPending: pendingPost } = usePostPaymentQrisPw()
const isSecondColumnActive = computed(() => !!category.value?.data?.column_2)
const isValid = ref<boolean>(false)
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
  if (!success) {
    error.issues.forEach((err) => {
      const field = err.path.join('_')
      if (field in formError) {
        formError[field] = err.message
      }
    })
    return false
  } else {
    return true
  }
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
      router.push(`/order/${result.data?.id ?? ''}`)
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
  } finally {
    isValid.value = false
    ;(document.getElementById('dialogCheckout') as HTMLDialogElement).close()
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
const handleValidate = () => {
  isValid.value = validate()
}
const handleChangeIsValid = (value: boolean) => {
  isValid.value = value
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
          :items="category?.data?.items || []"
          :status="category?.status || 500"
          :message="category?.message || 'Server sedang sibuk'"
          :is-pending="pendingGet"
          :is-refetching="isRefetching"
          :err-msg="formError.item_id"
          @refetch="refetch()"
          @change-item="handleChangeItem"
        />
        <PaymentMethode @change-payment="handleChangePayment" :error="formError.payment_method" />
      </section>
      <section class="space-y-4">
        <CustomerService />
        <ShippingBag :item="selectedItem" :category="category?.data || undefined" />
        <DialogCheckout
          :is-pending="pendingPost"
          :is-valid="isValid"
          :total-price="selectedItem?.price || 0"
          :prduct-name="selectedItem?.title || ''"
          :destination="form.destination || ''"
          :destination-second="form.destination_second || ''"
          @validate="handleValidate"
          @change-is-valid="handleChangeIsValid"
        />
      </section>
    </form>
  </Content>
</template>
