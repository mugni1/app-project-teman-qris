<script setup lang="ts">
import Content from '@/components/content/Content.vue'
import Cookies from 'js-cookie'
import { useLogin } from '@/hooks/useLogin'
import { loginSchema } from '@/schema/login.schema'
import { HttpStatusCode } from 'axios'
import {
  Eye,
  EyeOff,
  Loader2Icon,
  LockIcon,
  LogInIcon,
  MailIcon,
  XCircleIcon,
} from 'lucide-vue-next'
import { reactive, ref, watch } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'

// state
const { mutateAsync, isPending } = useLogin()
const router = useRouter()
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
const resetFormError = () => {
  formError.email = null
  formError.password = null
}
const validate = () => {
  resetFormError()
  const result = loginSchema.safeParse(form)
  if (!result.success) {
    result.error.issues.map((err) => {
      const field = err.path.join('_') as keyof typeof formError
      if (field in formError) {
        formError[field] = err.message
      }
    })
    return false
  } else {
    return true
  }
}
const handleSubmit = async () => {
  const isValid = validate()
  if (!isValid) return
  try {
    const result = await mutateAsync({ email: form.email, password: form.password })
    if (result.status == HttpStatusCode.Ok && result.data) {
      toast.success(result.message, { action: { label: 'close' } })
      Cookies.set('token', result.data.token)
      router.push('/')
    } else {
      toast.error(result.message, { action: { label: 'close' } })
    }
  } catch {
    toast.error('Internal server error, try again later.', { action: { label: 'close' } })
  }
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
          <div class="card-body lg:w-sm">
            <form @submit.prevent="handleSubmit" class="fieldset w-auto space-y-2">
              <!-- input email  -->
              <div class="flex flex-col gap-1">
                <label class="label"><MailIcon class="size-4" /> Email</label>
                <input
                  type="email"
                  v-model="form.email"
                  class="input w-full focus:border-primary outline-0"
                  placeholder="johndoe@gmail.com"
                />
                <label v-if="formError.email" class="label text-error">
                  <XCircleIcon class="size-4" /> {{ formError.email }}
                </label>
              </div>

              <!-- input password  -->
              <div class="flex flex-col gap-1">
                <label class="label"> <LockIcon class="size-4" />Kata Sandi </label>
                <div class="join">
                  <input
                    class="input w-full focus:border-primary outline-0 join-item"
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
              </div>

              <!-- btn submit  -->
              <button type="submit" :disabled="isPending" class="btn btn-primary">
                <Loader2Icon v-if="isPending" class="size-4 animate-spin" />
                <LogInIcon v-else class="size-4" />
                <span>Masuk</span>
              </button>

              <!-- text register  -->
              <div class="text-center">
                <span>Tidak punya akun? </span>
                <RouterLink class="link link-hover" to="/register">Daftar</RouterLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Content>
</template>
