<script setup lang="ts">
import Content from '@/components/content/Content.vue'
import { HttpStatusCode } from 'axios'
import { Eye, EyeOff, Loader2Icon, LockIcon, LogInIcon, MailIcon, User2Icon, XCircleIcon } from 'lucide-vue-next'
import { reactive, ref, watch } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { registerSchema } from '@/schema/register.schema'
import { useRegister } from '@/hooks/useRegister'

// state
const { mutateAsync, isPending } = useRegister()
const router = useRouter()
const isPassword = ref(true)
const form = reactive({
  firstname: '',
  lastname: '',
  email: '',
  password: '',
})
const formError = reactive({
  firstname: null as string | null,
  lastname: null as string | null,
  email: null as string | null,
  password: null as string | null,
})

// methods
const resetFormError = () => {
  formError.firstname = null
  formError.lastname = null
  formError.email = null
  formError.password = null
}
const validate = () => {
  resetFormError()
  const result = registerSchema.safeParse(form)
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
    const result = await mutateAsync({
      email: form.email,
      password: form.password,
      firstname: form.firstname,
      lastname: form.lastname,
    })
    if (result.status == HttpStatusCode.Created && result.data) {
      toast.success(result.message, { action: { label: 'close' } })
      router.push('/login')
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
  <section class="min-h-screen items-center flex flex-col justify-center">
    <div class="hero w-full">
      <div class="hero-content xs:min-w-xs sm:min-w-sm flex-col">
        <div class="w-full">
          <b class="card-title text-primary">Silahkan Daftar</b>
          <p class="text-xs md:text-sm text-base-content">Silakan lengkapi kolom dibawah ini</p>
        </div>
        <div class="card bg-base-200 w-full shrink-0 shadow-xl border border-base-content/20">
          <div class="card-body lg:w-sm">
            <form @submit.prevent="handleSubmit" class="fieldset w-auto space-y-2">
              <!-- input firstname  -->
              <div class="flex flex-col gap-1">
                <label class="label"><User2Icon class="size-4" /> Nama Depan</label>
                <input
                  type="text"
                  v-model="form.firstname"
                  class="input focus:border-primary w-full outline-0"
                  placeholder="Johan"
                />
                <label v-if="formError.firstname" class="label text-error">
                  <XCircleIcon class="size-4" /> {{ formError.firstname }}
                </label>
              </div>

              <!-- input lastname  -->
              <div class="flex flex-col gap-1">
                <label class="label"><User2Icon class="size-4" /> Nama Belakang</label>
                <input
                  type="text"
                  v-model="form.lastname"
                  class="input focus:border-primary w-full outline-0"
                  placeholder="Cruyff"
                />
                <label v-if="formError.lastname" class="label text-error">
                  <XCircleIcon class="size-4" /> {{ formError.lastname }}
                </label>
              </div>

              <!-- input email  -->
              <div class="flex flex-col gap-1">
                <label class="label"><MailIcon class="size-4" /> Email</label>
                <input
                  type="email"
                  v-model="form.email"
                  class="input focus:border-primary w-full outline-0"
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
                    class="input focus:border-primary w-full outline-0 join-item"
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
                <span>Daftar</span>
              </button>
            </form>
            <div class="text-center text-xs md:text-sm">
              <span>Sudah punya akun? </span>
              <RouterLink class="link link-hover" to="/login">Login</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
