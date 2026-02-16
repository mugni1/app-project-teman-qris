import type { HttpStatusCode } from 'axios'
import type { Meta } from './meta.type'

export interface Category {
  id: string
  title: string
  image_url: string
  cover_url: string
  type: 'games' | 'credit' | 'quota' | 'bill'
  created_at: string
  updated_at: string
}
export interface GetCategoriesResponse {
  status: HttpStatusCode
  message: string
  data: Category[] | null
  meta: Meta | null
  errors: null
}
