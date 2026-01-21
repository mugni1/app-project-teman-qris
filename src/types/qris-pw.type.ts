export interface CreatePaymentQrisPwPayload {
  amount: number
  customer_phone: string | undefined
  callback_url: string | undefined
}

export interface CreatePaymentQrisPwResponse {
  success: boolean | null
  transaction_id: string | null
  order_id: string | null
  amount: number | null
  qris_url: string | null
  qris_string: string | null
  expires_at: string | null
  created_at: string | null
}
