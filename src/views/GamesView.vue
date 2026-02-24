<script setup lang="ts">
import type { Item } from '@/types/item.type'
import type { CreateOrderResponse } from '@/types/order.type'
import Content from '@/components/content/Content.vue'
import Checkout from '@/components/games/Checkout.vue'
import CS from '@/components/games/CS.vue'
import Header from '@/components/games/Header.vue'
import Info from '@/components/games/Info.vue'
import Items from '@/components/games/Items.vue'
import Payment from '@/components/games/Payment.vue'
import { LoaderIcon, ShoppingBag } from 'lucide-vue-next'
import { computed, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { checkoutSchema, checkoutSchemaSecond } from '@/schema/checkout.schema'
import { toast } from 'vue-sonner'
import { useGetCategoryDetail } from '@/hooks/useGetCategoryDetail'
import { usePostPaymentQrisPw } from '@/hooks/useCreateOrder'
import { HttpStatusCode } from 'axios'

/* ================= STATE ================= */
const router = useRouter()
const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('') : (route.params.slug ?? '')
const { mutateAsync, isPending: mutatePending } = usePostPaymentQrisPw()
const { data: category, isPending, refetch, isRefetching } = useGetCategoryDetail(slug)
const isSecondColumnActive = computed(() => !!category.value?.data?.column_2)
const column1 = ref<string>()
const column2 = ref<string>()
const selectedPayment = ref<string>()
const selectedItem = ref<Item>()

/* ================= FORM ================= */
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

/* ================= HELPERS ================= */
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

/* ================= SUBMIT ================= */
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
      toast.error('Please login to continue')
    } else {
      toast.error(result.message)
    }
  } catch (err) {
    const error = err as CreateOrderResponse
    toast.error(`${error.message}, try again later`)
  }
}

/* ================= EVENTS ================= */
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
      :is-pending="isPending"
      :title="category?.data?.title || ''"
      :studio="category?.data?.studio || ''"
      :cover-url="category?.data?.cover_url || ''"
      :image-url="category?.data?.image_url || ''"
    />
    <form @submit.prevent="handleSubmit" class="grid grid-cols-1 md:col-span-2 lg:grid-cols-3 gap-4">
      <section class="space-y-4 lg:col-span-2">
        <Info
          :is-pending="isPending"
          :column_1="category?.data?.column_1 || false"
          :column_2="category?.data?.column_2 || false"
          :column_1_title="category?.data?.column_1_title || ''"
          :column_2_title="category?.data?.column_2_title || ''"
          @changeColumn1="handleChangeColumn1"
          @changeColumn2="handleChangeColumn2"
          :error_1="formError.destination"
          :error_2="formError.destination_second"
        />
        <Items
          @refetch="refetch()"
          @change-item="handleChangeItem"
          :error-message="category?.message || 'Internal server error'"
          :error="formError.item_id"
          :data="category?.data?.items || []"
          :is-pending="isPending"
          :is-refetching="isRefetching"
          :status="category?.status || 500"
        />
        <Payment @change-payment="handleChangePayment" :error="formError.payment_method" />
      </section>
      <section class="space-y-4">
        <CS />
        <Checkout :item="selectedItem" />
        <button type="submit" class="btn btn-primary w-full" :disabled="mutatePending">
          <ShoppingBag class="size-5" v-if="!mutatePending" />
          <LoaderIcon class="size-5 animate-spin" v-if="mutatePending" />
          <span v-if="!mutatePending">Pesan Sekarang</span>
          <span v-if="mutatePending">Harap tunggu..</span>
        </button>
      </section>
    </form>
  </Content>
</template>
