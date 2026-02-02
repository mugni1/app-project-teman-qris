import { getUserDetailService } from '@/api/services'
import { handleErrorResponse } from '@/libs/response'
import type { GetUserDetailResponse } from '@/types/auth.type'
import { useQuery } from '@tanstack/vue-query'

const fetch = async (): Promise<GetUserDetailResponse> => {
  try {
    const res = await getUserDetailService()
    return res.data
  } catch (err: unknown) {
    return handleErrorResponse(err)
  }
}

export const useGetUserDetail = () => {
  return useQuery({
    queryKey: ['user_detail'],
    queryFn: () => fetch(),
  })
}
