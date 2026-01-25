import type { HttpStatusCode } from 'axios'

export interface GetItemParams {
  filter_by_provider?: 'axis' | 'xl' | 'indosat' | 'telkomsel' | 'smartfren' | 'byu' | string
  filter_by_status?: 'promo' | 'regular'
  filter_by_credit?: 'quota' | 'credit'
  order_by?: string
  sort_by?: 'asc' | 'desc'
  search?: string
  page?: string
  limit?: string
}

export interface Item {
  id: string
  title: string
  price: number
  stock: number
  type_credit: 'credit' | 'quota'
  type_status: 'promo' | 'regular'
  provider: 'axis' | 'xl' | 'indosat' | 'telkomsel' | 'smartfren' | 'byu'
  created_at: string
  updated_at: string
}

export interface GetItemResponse {
  status: HttpStatusCode
  message: string
  data: Item[] | null
  meta: null
  errors: null
}
