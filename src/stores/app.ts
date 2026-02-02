import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore(
  'app',
  () => {
    // state
    const theme = ref('abyss')

    // methods
    const setTheme = (value: string) => {
      theme.value = value
      applyTheme()
    }
    const applyTheme = () => {
      document.documentElement.setAttribute('data-theme', theme.value)
    }

    return { theme, applyTheme, setTheme }
  },
  {
    persist: true,
  },
)
