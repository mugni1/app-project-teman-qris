<script setup lang="ts">
import Content from '@/components/content/Content.vue'
import Cookies from 'js-cookie'
import { useLogin } from '@/hooks/useLogin'
import { loginSchema } from '@/schema/login.schema'
import { HttpStatusCode } from 'axios'
import { Eye, EyeOff, Loader2Icon, LockIcon, LogInIcon, MailIcon, XCircleIcon } from 'lucide-vue-next'
import { onMounted, reactive, ref, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import IconGoogle from '@/icons/IconGoogle.vue'

// state
const { mutateAsync, isPending } = useLogin()
const router = useRouter()
const route = useRoute()
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
const handleAuthGoogle = () => {
  window.location.href = import.meta.env.VITE_BASE_API_URL + '/auth/google'
}

// watcher
watch(form, () => {
  validate()
})
onMounted(() => {
  if (route.query && route.query.message) {
    toast.error(route.query.message.toString().split('_').join(' '), { action: { label: 'Tutup' } })
  }
})
</script>

<template>
  <section class="min-h-screen items-center flex flex-col justify-center">
    <div class="hero w-full">
      <div class="hero-content xs:min-w-xs sm:min-w-sm flex-col">
        <div class="w-full">
          <b class="card-title text-primary">Selamat Datang</b>
          <p class="text-xs md:text-sm text-base-content">Silakan masuk untuk dapat menikmati layanan</p>
        </div>
        <div class="w-full card bg-base-200 shrink-0 shadow-xl border border-base-content/20">
          <div class="card-body lg:w-sm">
            <!-- login with google  -->
            <div>
              <button @click="handleAuthGoogle" class="btn btn-soft btn-primary w-full">
                <IconGoogle class="size-5" /> Login dengan Google
              </button>
            </div>
            <!-- atau  -->
            <div class="flex justify-center items-center gap-2">
              <span class="flex flex-1 h-px bg-base-content/50"></span>
              <span class="text-base-content/70">Atau</span>
              <span class="flex flex-1 h-px bg-base-content/50"></span>
            </div>
            <!-- form  -->
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
                  <button class="btn btn-square btn-primary join-item" type="button" @click="isPassword = !isPassword">
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
            </form>
            <!-- text register  -->
            <div class="text-center text-xs md:text-sm">
              <span>Tidak punya akun? </span>
              <RouterLink class="link link-hover" to="/register">Daftar</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
