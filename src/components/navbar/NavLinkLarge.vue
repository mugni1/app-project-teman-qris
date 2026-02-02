<script setup lang="ts">
import { data } from './data'
import Cookies from 'js-cookie'

const token = Cookies.get('token')
</script>

<template>
  <div class="hidden md:flex text-sm gap-4 col-span-8 justify-center items-center">
    <RouterLink
      v-for="item in data"
      v-show="!item.requireAuth && item.name != 'login'"
      :to="item.link"
      class="btn btn-ghost btn-primary btn-sm"
    >
      <component :is="item.icon" class="size-4" /> {{ item.title }}
    </RouterLink>
    <RouterLink
      v-for="item in data"
      v-show="item.requireAuth && token"
      :to="item.link"
      class="btn btn-ghost btn-primary btn-sm"
    >
      <component :is="item.icon" class="size-4" /> {{ item.title }}
    </RouterLink>
    <RouterLink
      v-for="item in data"
      v-show="!item.requireAuth && item.name == 'login' && !token"
      :to="item.link"
      class="btn btn-ghost btn-primary btn-sm"
    >
      <component :is="item.icon" class="size-4" /> {{ item.title }}
    </RouterLink>
  </div>
</template>
