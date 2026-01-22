import type { AxiosResponse } from 'axios'
import { ENDPOINT } from './endpoints'
import { httpClient } from './http-client'
import type { CreateOrderPayload, CreateOrderResponse } from '@/types/order.type'
import type {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
} from '@/types/auth.type'

export const createPaymentQrisPwService = async (
  payload: CreateOrderPayload,
): Promise<AxiosResponse<CreateOrderResponse>> => {
  return httpClient.post(ENDPOINT.ORDER, payload)
}

export const loginService = async (
  payload: LoginPayload,
): Promise<AxiosResponse<LoginResponse>> => {
  return httpClient.post(ENDPOINT.LOGIN, payload)
}

export const registerService = async (
  payload: RegisterPayload,
): Promise<AxiosResponse<RegisterResponse>> => {
  return httpClient.post(ENDPOINT.REGISTER, payload)
}
