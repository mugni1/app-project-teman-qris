import { getCategoryDetailService, getItems } from '@/api/services'
import { handleErrorResponse } from '@/libs/response'
import type { GetCategoryDetailResponse } from '@/types/category'
import { useQuery } from '@tanstack/vue-query'

const fetch = async (id: string): Promise<GetCategoryDetailResponse> => {
  try {
    const result = await getCategoryDetailService(id)
    return result.data
  } catch (err: unknown) {
    return handleErrorResponse(err)
  }
}

export const useGetCategoryDetail = (id: string) => {
  return useQuery({
    queryKey: ['items', id],
    queryFn: (): Promise<GetCategoryDetailResponse> => fetch(id),
  })
}
