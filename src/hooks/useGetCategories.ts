import { getCategoriesService } from '@/api/services'
import { handleErrorResponse } from '@/libs/response'
import type { GetCategoriesResponse } from '@/types/category'
import type { Params } from '@/types/global.type'
import { useQuery } from '@tanstack/vue-query'
import { unref, type Ref } from 'vue'

const fetch = async (params?: Params): Promise<GetCategoriesResponse> => {
  try {
    const result = await getCategoriesService(params)
    return result.data
  } catch (err: unknown) {
    return handleErrorResponse(err)
  }
}

export const useGetCategories = (params?: Ref<Params> | Params) => {
  return useQuery({
    queryKey: ['get-categories', params],
    queryFn: (): Promise<GetCategoriesResponse> => fetch(unref(params)),
  })
}
