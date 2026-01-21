import type { AxiosResponse } from 'axios'
import { ENDPOINT } from './endpoints'
import { httpClient } from './http-client'
import type { CreateOrderPayload, CreateOrderResponse } from '@/types/order.type'

export const createPaymentQrisPwService = async (
  payload: CreateOrderPayload,
): Promise<AxiosResponse<CreateOrderResponse>> => {
  return httpClient.post(ENDPOINT.ORDER, payload)
}
