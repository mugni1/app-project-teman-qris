import { createPaymentQrisPwService } from '@/api/services'
import { handleErrorCreateQrisPwResponse } from '@/libs/response'
import type { CreatePaymentQrisPwPayload, CreatePaymentQrisPwResponse } from '@/types/qris-pw.type'
import { useMutation } from '@tanstack/vue-query'

const fetch = async (payload: CreatePaymentQrisPwPayload): Promise<CreatePaymentQrisPwResponse> => {
  try {
    const result = await createPaymentQrisPwService(payload)
    return result.data
  } catch (err: unknown) {
    return err
  }
}

export const usePostPaymentQrisPw = () => {
  return useMutation({
    mutationFn: (payload: CreatePaymentQrisPwPayload) => fetch(payload),
  })
}
