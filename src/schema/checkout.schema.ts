import z from 'zod'

export const checkoutSchema = z.object({
  destination: z.string({ error: 'Harap masukan dengan benar' }).min(6, 'Harap lengkapi data dengan benar'),
  item_id: z.string({ error: 'Harap pilih item' }).min(1, 'Harap pilih item'),
  payment_method: z.string({ error: 'Harap pilih metode pembayaran' }).min(1, 'Harap pilih metode pembayaran'),
})

export type CheckoutInput = z.input<typeof checkoutSchema>
export type CheckoutPayload = z.output<typeof checkoutSchema>
