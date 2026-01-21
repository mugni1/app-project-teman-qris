<script setup lang="ts">
import Content from '@/components/content/Content.vue'
import { loginSchema } from '@/schema/login.schema'
import { Eye, EyeOff, LockIcon, LogInIcon, MailIcon, XCircleIcon } from 'lucide-vue-next'
import { reactive, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'

// state
const isPassword = ref(true)
const form = reactive({
  email: '',
  password: '',
})
const formError = reactive({
  email: null as string | null,
  password: null as string | null,
})

// methods
const validate = () => {
  formError.email = null
  formError.password = null
  const result = loginSchema.safeParse(form)
  if (!result.success) {
    result.error.issues.map((err) => {
      const field = err.path[0] as keyof typeof formError
      if (field in formError) {
        formError[field] = err.message
      }
    })
    return false
  }
  return true
}
const handleSubmit = () => {
  const isValid = validate()
  if (!isValid) return
  console.log('sukses')
}

// watcher
watch(form, () => {
  validate()
})
</script>

<template>
  <Content class="min-h-screen items-center flex flex-col justify-center">
    <div class="w-full flex justify-center flex-col items-center">
      <b class="card-title">Selamat Datang</b>
      <p class="text-xs text-primary-content">Silakan masuk untuk dapat menikmati layanan</p>
    </div>
    <div class="hero">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card bg-base-200 w-full shrink-0 shadow-2xl border border-base-content/20">
          <div class="card-body">
            <form @submit.prevent="handleSubmit" class="fieldset w-auto">
              <!-- input email  -->
              <label class="label"><MailIcon class="size-4" /> Email</label>
              <input
                type="email"
                v-model="form.email"
                class="input focus:border-primary outline-0"
                placeholder="johndoe@gmail.com"
              />
              <label v-if="formError.email" class="label text-error">
                <XCircleIcon class="size-4" /> {{ formError.email }}
              </label>

              <!-- input password  -->
              <label class="label mt-2"> <LockIcon class="size-4" />Kata Sandi </label>
              <div class="join">
                <input
                  class="input focus:border-primary outline-0 join-item"
                  v-model="form.password"
                  :type="isPassword ? 'password' : 'text'"
                  :placeholder="isPassword ? '•••••••••••••••' : 'yourpassword'"
                />
                <button
                  class="btn btn-square btn-primary join-item"
                  type="button"
                  @click="isPassword = !isPassword"
                >
                  <Eye v-if="isPassword" class="size-5" />
                  <EyeOff v-if="!isPassword" class="size-5" />
                </button>
              </div>
              <label v-if="formError.password" class="label text-error">
                <XCircleIcon class="size-4" /> {{ formError.password }}
              </label>

              <!-- btn submit  -->
              <button type="submit" class="btn btn-primary my-2">
                <LogInIcon class="size-4" /> Masuk
              </button>

              <!-- text register  -->
              <p class="text-center">
                Tidak punya akun?
                <RouterLink class="link link-hover" to="/register">Daftar</RouterLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Content>
</template>
