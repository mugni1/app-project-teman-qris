<script setup lang="ts">
import { ref } from 'vue'
import Thema from '../thema/Thema.vue'
import Brand from './Brand.vue'
import BurgerMenu from './BurgerMenu.vue'
import NavLinkLarge from './NavLinkLarge.vue'
import NavLinkSmall from './NavLinkSmall.vue'

const active = ref(false)
const handleChangeActive = (value: boolean) => {
  active.value = value
}
</script>

<template>
  <header class="w-full border-b border-base-300 py-4 bg-base-100 sticky top-0 z-50 shadow-md">
    <nav class="container mx-auto px-4 grid grid-cols-12">
      <Brand />
      <NavLinkLarge />
      <div class="col-span-6 md:col-span-2 flex justify-end gap-2">
        <Thema />
        <BurgerMenu @change-active="handleChangeActive" :active="active" />
      </div>
    </nav>
  </header>
  <NavLinkSmall :active="active" @change-active="handleChangeActive" />
</template>
