<script setup lang="ts">
import { LogInIcon, LogOutIcon } from 'lucide-vue-next'
import { data } from './data'
import Cookies from 'js-cookie'
import { toast } from 'vue-sonner'
import { useRouter } from 'vue-router'

// state
const token = Cookies.get('token')
const router = useRouter()

// methods
const handleLogout = () => {
  Cookies.remove('token')
  toast.success('Berhasil keluar', { action: { label: 'Tutup' } })
  router.push('/login')
}
</script>

<template>
  <div class="hidden md:flex text-sm gap-4 col-span-12 justify-between items-center">
    <div class="space-x-2">
      <RouterLink
        v-for="item in data"
        v-show="!item.requireAuth && item.name != 'login'"
        :to="item.link"
        :class="[
          'btn btn-ghost btn-outline btn-sm',
          $route.name?.toString().startsWith(item.name) && 'btn-active btn-primary ',
        ]"
      >
        <component :is="item.icon" class="size-3.5" /> {{ item.title }}
      </RouterLink>
      <RouterLink
        v-for="item in data"
        v-show="item.requireAuth && token"
        :to="item.link"
        :class="[
          'btn btn-ghost btn-outline btn-sm',
          $route.name?.toString().startsWith(item.name) && 'btn-active btn-primary ',
        ]"
      >
        <component :is="item.icon" class="size-3.5" /> {{ item.title }}
      </RouterLink>
    </div>

    <RouterLink v-show="!token" :to="'/login'" class="btn btn-outline btn-primary btn-sm">
      <LogInIcon class="size-3.5" /> Masuk
    </RouterLink>
    <button v-show="token" @click="handleLogout" class="btn btn-outline btn-primary btn-sm mt-2">
      <log-out-icon class="size-3.5" /> Keluar
    </button>
  </div>
</template>
