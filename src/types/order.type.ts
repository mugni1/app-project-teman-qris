import type { HttpStatusCode } from 'axios'
import type { Meta } from './meta.type'

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
    destination: string
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
      lastname: string
      fullname: string
    }
    item: {
      id: string
      title: string
      price: number
      stock: number
      type_credit: string
      type_status: string
      provider: string
      category: {
        column_1_title: string
        image_url: string
        title: string
        studio: string
      }
    }
    server_time: number
    expired_time: number
  } | null
  meta: null
  errors: null
}

export interface UpdateOrderDetailParams {
  id: string
}

export interface UpdateOderDetailResponse {
  status: HttpStatusCode
  message: string
  data: {
    id: string
    transaction_id: string
    amount: number
    destination: string
    status: 'expired' | 'cancelled' | 'paid' | 'pending' | 'failed'
    qris_url: string
    qris_string: string
    expires_at: string
    paid_at: null | string
    created_at: string
    updated_at: string
    user_id: string
    item_id: string
  } | null
  meta: null
  errors: null
}

export interface OrderByUserLogin {
  message: string
  id: string
  transaction_id: string
  amount: number
  destination: string
  status: 'expired' | 'cancelled' | 'paid' | 'pending' | 'failed'
  expires_at: string
  paid_at: string | null
  created_at: string
  item_id: string
  item: {
    id: string
    title: string
    category_id: string
    category: {
      image_url: string
      title: string
    }
  }
}

export interface GetOrderByUserLoginResponse {
  status: HttpStatusCode
  data: OrderByUserLogin[] | null
  meta: Meta | null
  errors: null
}

export interface GetOrderByUserLoginParams {
  search?: string
  limit?: string
  page?: string
  order_by?: string
  sort_by?: string
}
