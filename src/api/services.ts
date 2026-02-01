import type { AxiosResponse } from 'axios'
import { ENDPOINT } from './endpoints'
import { httpClient } from './http-client'
import type {
  CreateOrderPayload,
  CreateOrderResponse,
  GetOrderDetailParams,
  GetOrderDetailResponse,
  UpdateOderDetailResponse,
  UpdateOrderDetailParams,
} from '@/types/order.type'
import type {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
} from '@/types/auth.type'
import type { GetItemParams, GetItemResponse } from '@/types/item'

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

export const getItems = async (params?: GetItemParams): Promise<AxiosResponse<GetItemResponse>> => {
  return httpClient.get(ENDPOINT.ITEM, { params })
}

export const getOrderDetail = async (
  params: GetOrderDetailParams,
): Promise<AxiosResponse<GetOrderDetailResponse>> => {
  return httpClient.get(`${ENDPOINT.ORDER}/${params.id}`)
}

export const updateOrderDetail = async (
  params: UpdateOrderDetailParams,
): Promise<AxiosResponse<UpdateOderDetailResponse>> => {
  return httpClient.put(`${ENDPOINT.ORDER}/${params.id}`)
}
