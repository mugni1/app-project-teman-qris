import type { AxiosResponse } from 'axios'
import { ENDPOINT } from './endpoints'
import { httpClient } from './http-client'
import type {
  CreateOrderPayload,
  CreateOrderResponse,
  GetOrderByUserLoginParams,
  GetOrderByUserLoginResponse,
  GetOrderDetailParams,
  GetOrderDetailResponse,
  UpdateOderDetailResponse,
  UpdateOrderDetailParams,
} from '@/types/order.type'
import type {
  GetUserDetailResponse,
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
} from '@/types/auth.type'
import type { GetItemParams, GetItemResponse } from '@/types/item'
import type { Params } from '@/types/global.type'
import type { GetCategoriesResponse } from '@/types/category'

export const createPaymentQrisPwService = async (
  payload: CreateOrderPayload,
): Promise<AxiosResponse<CreateOrderResponse>> => {
  return httpClient.post(ENDPOINT.ORDER, payload)
}

export const getUserDetailService = async (): Promise<AxiosResponse<GetUserDetailResponse>> => {
  return httpClient.get(ENDPOINT.ME)
}

export const loginService = async (payload: LoginPayload): Promise<AxiosResponse<LoginResponse>> => {
  return httpClient.post(ENDPOINT.LOGIN, payload)
}

export const registerService = async (payload: RegisterPayload): Promise<AxiosResponse<RegisterResponse>> => {
  return httpClient.post(ENDPOINT.REGISTER, payload)
}

export const getItems = async (params?: GetItemParams): Promise<AxiosResponse<GetItemResponse>> => {
  return httpClient.get(ENDPOINT.ITEM, { params })
}

export const getOrderDetail = async (params: GetOrderDetailParams): Promise<AxiosResponse<GetOrderDetailResponse>> => {
  return httpClient.get(`${ENDPOINT.ORDER}/${params.id}`)
}

export const updateOrderDetail = async (
  params: UpdateOrderDetailParams,
): Promise<AxiosResponse<UpdateOderDetailResponse>> => {
  return httpClient.put(`${ENDPOINT.ORDER}/${params.id}`)
}

export const getOrderByUserLoginService = async (
  params?: GetOrderByUserLoginParams,
): Promise<AxiosResponse<GetOrderByUserLoginResponse>> => {
  return httpClient.get(ENDPOINT.ORDER, { params })
}

export const getCategoriesService = async (params?: Params): Promise<AxiosResponse<GetCategoriesResponse>> => {
  return httpClient.get(ENDPOINT.CATEGORY, { params })
}
