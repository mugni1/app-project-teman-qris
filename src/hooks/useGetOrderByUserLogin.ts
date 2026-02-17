import { getOrderByUserLoginService } from '@/api/services'
import { handleErrorResponse } from '@/libs/response'
import { useQuery } from '@tanstack/vue-query'
import type { GetOrderByUserLoginParams, GetOrderByUserLoginResponse } from '@/types/order.type'
import { unref, type Ref } from 'vue'

const fetch = async (params?: GetOrderByUserLoginParams): Promise<GetOrderByUserLoginResponse> => {
  try {
    const result = await getOrderByUserLoginService(params)
    return result.data
  } catch (err: unknown) {
    return handleErrorResponse(err)
  }
}

export const useGetOrderByUserLogin = (params?: Ref<GetOrderByUserLoginParams>) => {
  return useQuery({
    queryKey: ['ORDER_BY_USER_LOGIN', params],
    queryFn: (): Promise<GetOrderByUserLoginResponse> => fetch(unref(params)),
  })
}
