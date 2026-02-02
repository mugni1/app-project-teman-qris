<script setup lang="ts">
import Content from '@/components/content/Content.vue'
import Cookies from 'js-cookie'
import { useGetUserDetail } from '@/hooks/useGetUserDetail'
import { Home, IdCardIcon, LogOut } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'

// state
const router = useRouter()
const { data, isPending } = useGetUserDetail()

// methods
const handleLogout = () => {
  Cookies.remove('token')
  toast.success('Berhasil keluar', { action: { label: 'Tutup' } })
  router.push('/login')
}
</script>

<template>
  <Content>
    <div class="grid grid-cols-12 gap-8">
      <div v-if="isPending" class="w-full col-span-12 lg:col-span-4 space-y-4 card bg-base-200 p-8">
        <div class="w-8/12 mx-auto lg:w-full aspect-square rounded-full skeleton" />
        <div class="h-8 lg:h-10 w-full skeleton" />
      </div>
      <div v-else class="w-full col-span-12 lg:col-span-4 space-y-4 card bg-base-200 p-8">
        <img src="/images/no-image.jpg" alt="image" class="w-8/12 mx-auto lg:w-full aspect-square rounded-full" />
        <h1 class="text-center text-2xl lg:text-3xl font-bold">{{ data?.data?.fullname || '' }}</h1>
      </div>
      <div class="w-full col-span-12 lg:col-span-8 card bg-base-200 p-4 lg:p-8 space-y-2">
        <h2 class="card-title mb-2 text-primary"><IdCardIcon class="size-7" /> Detail Akun</h2>
        <div class="h-px w-full bg-primary"></div>
        <div>
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Nama Lengkap</legend>
            <input
              v-if="isPending"
              type="text"
              class="input w-full focus:outline-none focus:border-primary skeleton"
              readonly
            />
            <input
              v-else
              type="text"
              class="input w-full focus:outline-none focus:border-primary"
              placeholder="-"
              :value="data?.data?.fullname || ''"
              readonly
            />
          </fieldset>
          <div class="grid grid-cols-2 gap-4">
            <fieldset class="fieldset">
              <legend class="fieldset-legend">Nama Depan</legend>
              <input
                v-if="isPending"
                type="text"
                class="input w-full focus:outline-none focus:border-primary skeleton"
                readonly
              />
              <input
                v-else
                type="text"
                class="input w-full focus:outline-none focus:border-primary"
                placeholder="-"
                :value="data?.data?.firstname || ''"
                readonly
              />
            </fieldset>
            <fieldset class="fieldset">
              <legend class="fieldset-legend">Nama Belakang</legend>
              <input
                v-if="isPending"
                type="text"
                class="input w-full focus:outline-none focus:border-primary skeleton"
                readonly
              />
              <input
                v-else
                type="text"
                class="input w-full focus:outline-none focus:border-primary"
                placeholder="-"
                :value="data?.data?.lastname || ''"
                readonly
              />
            </fieldset>
          </div>
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Email</legend>
            <input
              v-if="isPending"
              type="text"
              class="input w-full focus:outline-none focus:border-primary skeleton"
              readonly
            />
            <input
              v-else
              type="text"
              class="input w-full focus:outline-none focus:border-primary"
              placeholder="-"
              :value="data?.data?.email || ''"
              readonly
            />
          </fieldset>
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Peran</legend>
            <input
              v-if="isPending"
              type="text"
              class="input w-full focus:outline-none focus:border-primary skeleton"
              readonly
            />
            <input
              v-else
              type="text"
              class="input w-full focus:outline-none focus:border-primary capitalize"
              placeholder="-"
              :value="data?.data?.role.toString().split('_').join(' ') || ''"
              readonly
            />
          </fieldset>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-2">
          <button class="btn btn-primary" @click="router.push('/')"><Home class="size-5" /> Beranda</button>
          <button class="btn btn-error" @click="handleLogout"><LogOut class="size-5" /> Logout</button>
        </div>
      </div>
    </div>
  </Content>
</template>
