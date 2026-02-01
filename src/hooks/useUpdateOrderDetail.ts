import { updateOrderDetail } from '@/api/services'
import { handleErrorResponse } from '@/libs/response'
import type { UpdateOderDetailResponse, UpdateOrderDetailParams } from '@/types/order.type'
import { useMutation } from '@tanstack/vue-query'

const fetch = async (params: UpdateOrderDetailParams): Promise<UpdateOderDetailResponse> => {
  try {
    const res = await updateOrderDetail(params)
    return res.data
  } catch (err: unknown) {
    return handleErrorResponse(err)
  }
}

export const useUpdateOrderDetail = () => {
  return useMutation({
    mutationFn: (params: UpdateOrderDetailParams) => fetch(params),
  })
}
