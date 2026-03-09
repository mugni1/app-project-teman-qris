<script setup lang="ts">
import { ref } from 'vue'
import Thema from './Thema.vue'
import Brand from './Brand.vue'
import BurgerMenu from './BurgerMenu.vue'
import NavLinkLarge from './NavLinkLarge.vue'
import NavLinkSmall from './NavLinkSmall.vue'
import SearchMenu from './SearchMenu.vue'
import SearchSmall from './SearchSmall.vue'

const burgerActive = ref(false)
const searchActive = ref(false)
const handleChangeBurgerActive = (value: boolean) => {
  burgerActive.value = value
  if (burgerActive.value) {
    searchActive.value = false
  }
}
const handleChangeSearchActive = (value: boolean) => {
  searchActive.value = value
  if (searchActive.value) {
    burgerActive.value = false
  }
}
</script>

<template>
  <header class="w-full border-b border-base-300 py-4 bg-base-100 sticky top-0 z-50 shadow-md">
    <nav class="container mx-auto px-4 grid grid-cols-12">
      <Brand />
      <NavLinkLarge />
      <div class="col-span-6 md:col-span-2 flex justify-end gap-2">
        <Thema />
        <SearchMenu @change-active="handleChangeSearchActive" :active="searchActive" />
        <BurgerMenu @change-active="handleChangeBurgerActive" :active="burgerActive" />
      </div>
    </nav>
  </header>
  <NavLinkSmall :active="burgerActive" @change-active="handleChangeBurgerActive" />
  <SearchSmall :active="searchActive" @change-active="handleChangeSearchActive" />
</template>
