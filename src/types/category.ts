import type { HttpStatusCode } from 'axios'
import type { Meta } from './meta.type'
import type { Item } from './item.type'

export interface Category {
  id: string
  title: string
  studio: string
  image_url: string
  cover_url: string
  type: 'games' | 'credit' | 'quota' | 'bill'
  column_1: boolean
  column_2: boolean
  column_1_title: string
  column_2_title: string
  items: Item[]
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

export interface GetCategoryDetailResponse {
  status: HttpStatusCode
  message: string
  data: Category | null
  meta: null
  errors: null
}
