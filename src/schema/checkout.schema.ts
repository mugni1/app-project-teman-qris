import z from 'zod'

export const checkoutSchema = z.object({
  destination: z
    .string({ error: 'Harap masukan dengan benar' })
    .trim()
    .regex(/^\d+(\(\d+\))?$/, 'Format harus angka atau angka(angka)')
    .transform((value) => Number(value.replace(/[()]/g, '')))
    .pipe(z.number().int('Harus berupa angka bulat').min(10000, 'Harap lengkapi data anda')),
  item_id: z.string({ error: 'Harap pilih item' }).min(1, 'Harap pilih item'),
  payment_method: z.string({ error: 'Harap pilih metode pembayaran' }).min(1, 'Harap pilih metode pembayaran'),
})

export type CheckoutInput = z.input<typeof checkoutSchema>
export type CheckoutPayload = z.output<typeof checkoutSchema>
