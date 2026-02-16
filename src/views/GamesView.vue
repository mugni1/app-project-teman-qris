<script setup lang="ts">
import Content from '@/components/content/Content.vue'
import Checkout from '@/components/games/Checkout.vue'
import CS from '@/components/games/CS.vue'
import Header from '@/components/games/Header.vue'
import Info from '@/components/games/Info.vue'
import Item, { type ItemNew } from '@/components/games/Item.vue'
import Payment from '@/components/games/Payment.vue'
import { ShoppingBag } from 'lucide-vue-next'
import { computed, reactive, ref } from 'vue'
import { data } from '@/components/games/data'
import { useRoute } from 'vue-router'
import { checkoutSchema, type CheckoutInput } from '@/schema/checkout.schema'
import { toast } from 'vue-sonner'
import { useGetCategoryDetail } from '@/hooks/useGetCategoryDetail'

// state
const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('') : route.params.slug
const { data: category, isPending, refetch, isRefetching } = useGetCategoryDetail(slug ?? '')
const column1 = ref<undefined | string>()
const column2 = ref<undefined | string>()
const selectedPayment = ref<undefined | string>()
const selectedItem = ref<undefined | ItemNew>()
const form = computed<CheckoutInput>(() => {
  if (data.column2) {
    const destination = column2.value ? `${column1.value}(${column2.value})` : ''
    return {
      destination: destination,
      item_id: selectedItem.value?.id ?? '',
      payment_method: selectedPayment.value ?? '',
    }
  } else {
    const destination = column1.value ?? ''
    return {
      destination: destination,
      item_id: selectedItem.value?.id ?? '',
      payment_method: selectedPayment.value ?? '',
    }
  }
})
const formError = reactive<Record<keyof CheckoutInput, string | null>>({
  destination: null,
  item_id: null,
  payment_method: null,
})

// methods
const resetFormError = () => {
  formError.destination = null
  formError.item_id = null
  formError.payment_method = null
}
const validate = () => {
  resetFormError()
  const result = checkoutSchema.safeParse(form.value)
  if (!result.success) {
    result.error.issues.map((err) => {
      const field = err.path.join('_') as keyof typeof formError
      if (field in formError) {
        formError[field] = err.message
      }
    })
    return false
  } else {
    return true
  }
}
const handleSubmit = async () => {
  const isValid = validate()
  if (!isValid) return
  toast.success('Sukses checkout')
}
const handleChangeColumn1 = (value: string | undefined) => {
  column1.value = value
  validate()
}
const handleChangeColumn2 = (value: string | undefined) => {
  column2.value = value
  validate()
}
const handleChangePayment = (value: string | undefined) => {
  selectedPayment.value = value
  validate()
}
const handleChangeItem = (value: ItemNew | undefined) => {
  selectedItem.value = value
  validate()
}
</script>

<template>
  <Content class="space-y-4">
    <Header
      :title="category?.data?.title || ''"
      :studio="data.studio"
      :cover-url="category?.data?.cover_url || ''"
      :image-url="category?.data?.image_url || ''"
    />
    <form @submit.prevent="handleSubmit" class="grid grid-cols-1 md:col-span-2 lg:grid-cols-3 gap-4">
      <section class="space-y-4 lg:col-span-2">
        <Info
          @change-column1="handleChangeColumn1"
          @change-column2="handleChangeColumn2"
          :error="formError.destination"
        />
        <Item @change-item="handleChangeItem" :error="formError.item_id" />
        <Payment @change-payment="handleChangePayment" :error="formError.payment_method" />
      </section>
      <section class="space-y-4">
        <CS />
        <Checkout :item="selectedItem" />
        <button type="submit" class="btn btn-primary w-full"><ShoppingBag class="size-5" /> Pesan Sekarang</button>
      </section>
    </form>
  </Content>
</template>
