<script setup lang="ts">
import { ref } from 'vue'
import Brand from './Brand.vue'
import BtnBurger from './BtnBurger.vue'
import NavLinkLarge from './NavLinkLarge.vue'
import NavLinkSmall from './NavLinkSmall.vue'
import BtnSearch from './BtnSearch.vue'
import SearchSmall from './SearchSmall.vue'
import SearchLarge from './SearchLarge.vue'
import BtnThema from './BtnThema.vue'
import Thema from './Thema.vue'

const burgerActive = ref(false)
const searchActive = ref(false)
const themaActive = ref(false)
const handleChangeBurgerActive = (value: boolean) => {
  burgerActive.value = value
  if (burgerActive.value) {
    searchActive.value = false
    themaActive.value = false
  }
}
const handleChangeSearchActive = (value: boolean) => {
  searchActive.value = value
  if (searchActive.value) {
    burgerActive.value = false
    themaActive.value = false
  }
}
const handleChangeThemaActive = (value: boolean) => {
  themaActive.value = value
  if (themaActive.value) {
    burgerActive.value = false
    searchActive.value = false
  }
}
</script>

<template>
  <header class="w-full border-b border-base-300 py-4 bg-base-100/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
    <nav class="container mx-auto px-4 grid grid-cols-12 gap-y-4">
      <Brand />
      <SearchLarge />
      <div class="col-span-6 lg:col-span-2 flex justify-end gap-2">
        <BtnThema @change-active="handleChangeThemaActive" :active="themaActive" />
        <BtnSearch @change-active="handleChangeSearchActive" :active="searchActive" />
        <BtnBurger @change-active="handleChangeBurgerActive" :active="burgerActive" />
      </div>
      <NavLinkLarge />
    </nav>
  </header>
  <NavLinkSmall :active="burgerActive" @change-active="handleChangeBurgerActive" />
  <SearchSmall :active="searchActive" @change-active="handleChangeSearchActive" />
  <Thema :active="themaActive" @change-active="handleChangeThemaActive" />
</template>
