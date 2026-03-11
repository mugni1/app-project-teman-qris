<script setup lang="ts">
import { motion } from 'motion-v'
import { useRouter } from 'vue-router'
import { data } from './data'
import Cookies from 'js-cookie'
import { LogInIcon, LogOutIcon } from 'lucide-vue-next'
import { toast } from 'vue-sonner'

const props = defineProps<{
  active: boolean
}>()
const emits = defineEmits<{
  (e: 'changeActive', value: boolean): void
}>()

// state
const token = Cookies.get('token')
const router = useRouter()

// methods
const handleChange = () => {
  emits('changeActive', !props.active)
}
const handleGo = (to: string) => {
  router.push(to)
  handleChange()
}
const handleLogout = () => {
  Cookies.remove('token')
  toast.success('Berhasil keluar', { action: { label: 'Tutup' } })
  router.push('/login')
}
</script>

<template>
  <section
    @click.self="handleChange"
    :class="[
      'fixed inset-0 z-40 backdrop-blur-sm transition-all duration-200 px-4',
      props.active ? 'visible' : 'invisible',
    ]"
  >
    <motion.div
      :initial="{ opacity: 0, y: 200 }"
      :animate="{ opacity: active ? 1 : 0, y: active ? 0 : 200 }"
      :transition="{ duration: 0.2 }"
      class="container card bg-base-100 mt-20 border border-base-300 space-y-4 p-4"
    >
      <button
        v-for="item in data"
        v-show="!item.requireAuth && item.name != 'login'"
        @click="handleGo(item.link)"
        :class="['btn btn-ghost btn-sm', $route.name?.toString().startsWith(item.name) && 'btn-active btn-primary ']"
      >
        <component :is="item.icon" class="size-4" /> {{ item.title }}
      </button>
      <button
        v-for="item in data"
        v-show="item.requireAuth && token"
        @click="handleGo(item.link)"
        :class="['btn btn-ghost btn-sm', $route.name?.toString().startsWith(item.name) && 'btn-active btn-primary ']"
      >
        <component :is="item.icon" class="size-4" /> {{ item.title }}
      </button>
      <RouterLink v-show="!token" :to="'/login'" class="btn btn-outline btn-primary btn-sm">
        <log-in-icon class="size-3.5" /> Masuk
      </RouterLink>
      <button v-show="token" @click="handleLogout" class="btn btn-outline btn-primary btn-sm">
        <log-out-icon class="size-3.5" /> Keluar
      </button>
    </motion.div>
  </section>
</template>
