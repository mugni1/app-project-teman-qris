import z from 'zod'

export const loginSchema = z.object({
  email: z.email({ error: 'Harap masukan email yang benar' }),
  password: z
    .string({ error: 'Harap masukan password' })
    .min(8, { error: 'Minimal password 8 karakter' })
    .max(12, { error: 'Maksimal password 12 karakter' }),
})
