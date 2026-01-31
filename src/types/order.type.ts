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

export interface GetOrderDetailParams {
  id: string
}

export interface GetOrderDetailResponse {
  status: HttpStatusCode
  message: string
  data: {
    id: string
    transaction_id: string
    phone_number: string
    amount: number
    status: string
    qris_url: string
    qris_string: string
    expires_at: string
    paid_at: null | string
    created_at: string
    updated_at: string
    user_id: string
    item_id: string
    user: {
      id: string
      email: string
      firstname: string
      password: null | string
      lastname: string
      fullname: string
      provider: null | string
      role: string
      created_at: string
      updated_at: string
    }
    item: {
      id: string
      title: string
      price: number
      stock: number
      type_credit: string
      type_status: string
      provider: string
      created_at: string
      updated_at: string
    }
  } | null
  meta: null
  errors: null
}
