import type { HttpStatusCode } from 'axios'

export interface CreateOrderResponse {
  status: HttpStatusCode
  message: string
  data: {
    id: string
    transaction_id: string
    amount: number
    status: 'pending' | 'paid' | 'expired' | 'failed' | 'cancelled'
    qris_url: string
    qris_string: string
    expires_at: string
    paid_at: string | null
    created_at: string
    updated_at: string
    user_id: string
    item_id: string
  } | null
  meta: null
  errors: null
}

export interface CreateOrderPayload {
  destination: string
  customer_phone: string
  amount: number
  item_id: string
}
