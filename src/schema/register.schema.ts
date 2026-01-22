import z from 'zod'

export const registerSchema = z.object({
  firstname: z
    .string({ error: 'Harap masukan nama depan' })
    .min(1, 'Minimal nama depan 1 karakter')
    .max(20, 'Maksimal nama depan 20 karakter'),
  lastname: z
    .string({ error: 'Harap masukan nama belakang' })
    .min(1, 'Minimal nama belakang 1 karakter')
    .max(20, 'Maksimal nama belakang 20 karakter'),
  email: z.email({ error: 'Harap masukan email yang benar' }),
  password: z
    .string({ error: 'Harap masukan password' })
    .min(8, { error: 'Minimal password 8 karakter' })
    .max(12, { error: 'Maksimal password 12 karakter' }),
})
