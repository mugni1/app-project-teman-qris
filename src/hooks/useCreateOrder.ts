import { createPaymentQrisPwService } from '@/api/services'
import { handleErrorResponse } from '@/libs/response'
import type { CreateOrderPayload, CreateOrderResponse } from '@/types/order.type'
import { useMutation } from '@tanstack/vue-query'

const fetch = async (payload: CreateOrderPayload): Promise<CreateOrderResponse> => {
  try {
    const result = await createPaymentQrisPwService(payload)
    return result.data
  } catch (err: unknown) {
    return handleErrorResponse(err)
  }
}

export const usePostPaymentQrisPw = () => {
  return useMutation({
    mutationFn: (payload: CreateOrderPayload) => fetch(payload),
  })
}
