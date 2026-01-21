import type { AxiosResponse } from 'axios'
import { ENDPOINT } from './endpoints'
import type { CreatePaymentQrisPwPayload, CreatePaymentQrisPwResponse } from '@/types/qris-pw.type'
import { httpClient } from './http-client'

export const createPaymentQrisPwService = async (
  payload: CreatePaymentQrisPwPayload,
): Promise<AxiosResponse<CreatePaymentQrisPwResponse>> => {
  return httpClient.post(ENDPOINT.CREATE_PAYMENT, payload)
}
