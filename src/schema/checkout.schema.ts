import z from 'zod'

export const checkoutSchema = z.object({
  destination: z
    .string({ error: 'Harap masukan dengan benar' })
    .min(6, 'Minimal memiliki 6 karakter')
    .max(50, 'Maximal memiliki 50 karakter'),
  item_id: z.string({ error: 'Harap pilih item' }).min(1, 'Harap pilih item'),
  payment_method: z.string({ error: 'Harap pilih metode pembayaran' }).min(1, 'Harap pilih metode pembayaran'),
})

export type CheckoutInput = z.input<typeof checkoutSchema>
export type CheckoutPayload = z.output<typeof checkoutSchema>

export const checkoutSchemaSecond = z.object({
  destination: z
    .string({ error: 'Harap masukan dengan benar' })
    .min(6, 'Minimal memiliki 6 karakter')
    .max(50, 'Maximal memiliki 50 karakter'),
  destination_second: z
    .string({ error: 'Harap masukan dengan benar' })
    .min(4, 'Minimal memiliki 4 karakter')
    .max(50, 'Maximal memiliki 50 karakter'),
  item_id: z.string({ error: 'Harap pilih item' }).min(1, 'Harap pilih item'),
  payment_method: z.string({ error: 'Harap pilih metode pembayaran' }).min(1, 'Harap pilih metode pembayaran'),
})

export type CheckoutInputSecond = z.input<typeof checkoutSchemaSecond>
export type CheckoutPayloadSecond = z.output<typeof checkoutSchemaSecond>
