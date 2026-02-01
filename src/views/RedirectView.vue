<script setup lang="ts">
import Content from '@/components/content/Content.vue'
import { Loader } from 'lucide-vue-next'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Cookies from 'js-cookie'
import { toast } from 'vue-sonner'

const route = useRoute()
const router = useRouter()
onMounted(() => {
  if (route.query && route.query.bb && route.query.message) {
    const token = atob(route.query.bb as string)
    Cookies.set('token', token)
    toast.success(route.query.message, { action: { label: 'Tutup' } })
    router.push('/')
  } else {
    router.push('/')
  }
})
</script>

<template>
  <Content class="flex flex-col items-center justify-center min-h-dvh">
    <h1 class="text-center text-2xl font-bold mb-4">Harap Tunggu, Memproses..</h1>
    <Loader class="animate-spin mx-auto size-15" />
  </Content>
</template>
