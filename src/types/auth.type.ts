import type { HttpStatusCode } from 'axios'

export interface LoginPayload {
  email: string
  password: string
}

export interface LoginResponse {
  status: HttpStatusCode
  message: string
  data: {
    token: string
    user: {
      id: string
      email: string
      firstname: string
      password: null
      lastname: string
      fullname: string
      provider: string | null
      role: 'user' | 'super_user'
      created_at: string
      updated_at: string
    }
  } | null
  meta: null
  errors: null
}
