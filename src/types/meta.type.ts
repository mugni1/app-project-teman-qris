export interface Meta {
  limit: number
  offset: number
  page: number
  search: string
  order_by: string
  sort_by: 'desc' | 'asc'
  total: number
}
