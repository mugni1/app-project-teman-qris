import { getOrderDetail } from '@/api/services'
import { handleErrorResponse } from '@/libs/response'
import type { GetOrderDetailParams, GetOrderDetailResponse } from '@/types/order.type'
import { useQuery } from '@tanstack/vue-query'

const fetch = async (params: GetOrderDetailParams): Promise<GetOrderDetailResponse> => {
  try {
    const res = await getOrderDetail(params)
    return res.data
  } catch (err: unknown) {
    return handleErrorResponse(err)
  }
}

export const useGetOrderDetail = (params: GetOrderDetailParams) => {
  return useQuery({
    queryKey: ['oder_detail', params.id],
    queryFn: () => fetch(params),
  })
}
