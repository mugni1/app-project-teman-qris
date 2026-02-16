import { getCategoryDetailService, getItems } from '@/api/services'
import { handleErrorResponse } from '@/libs/response'
import type { GetCategoryDetailResponse } from '@/types/category'
import type { Params } from '@/types/global.type'
import type { GetItemResponse } from '@/types/item.type'
import { useQuery } from '@tanstack/vue-query'
import { unref, type Ref } from 'vue'

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
