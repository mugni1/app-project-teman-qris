<script setup lang="ts">
import { useAppStore } from '@/stores/app'

const { setTheme, theme } = useAppStore()
const themes = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
  'dim',
  'nord',
  'sunset',
  'caramellatte',
  'abyss',
  'silk',
]
</script>

<template>
  <div class="dropdown dropdown-end mx-0">
    <button class="btn btn-sm btn-square" aria-label="Change Theme">
      <div class="group-hover:border-base-content/20 grid grid-cols-2 gap-0.5 rounded-md p-1">
        <div class="bg-base-content size-1.5 rounded-full"></div>
        <div class="bg-primary size-1.5 rounded-full"></div>
        <div class="bg-secondary size-1.5 rounded-full"></div>
        <div class="bg-accent size-1.5 rounded-full"></div>
      </div>
    </button>

    <div
      tabindex="0"
      class="dropdown-content bg-base-200 rounded-box mt-5 max-h-[70vh] w-56 overflow-y-auto shadow-2xl"
    >
      <ul
        class="menu w-full [&_li>*:hover]:bg-transparent [&_li>*:active]:bg-transparent [&_li>*:focus]:bg-transparent"
      >
        <li class="menu-title text-xs">Tema</li>
        <li v-for="item in themes" :key="theme">
          <label class="flex items-center gap-3 px-2">
            <div :data-theme="item" class="bg-base-100 grid grid-cols-2 gap-0.5 rounded-md p-1 shadow">
              <div class="bg-base-content size-2 rounded-full"></div>
              <div class="bg-primary size-2 rounded-full"></div>
              <div class="bg-secondary size-2 rounded-full"></div>
              <div class="bg-accent size-2 rounded-full"></div>
            </div>
            <input
              type="radio"
              name="theme-dropdown"
              class="theme-controller btn btn-sm btn-ghost flex-1 justify-start capitalize"
              :value="item"
              v-model="theme"
              @change="setTheme(item)"
              :aria-label="item"
            />
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>
