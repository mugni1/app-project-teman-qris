import { getItems } from '@/api/services'
import { handleErrorResponse } from '@/libs/response'
import type { GetItemParams, GetItemResponse } from '@/types/item'
import { useQuery } from '@tanstack/vue-query'
import { unref, type Ref } from 'vue'

const fetch = async (params?: GetItemParams): Promise<GetItemResponse> => {
  try {
    const result = await getItems(params)
    return result.data
  } catch (err: unknown) {
    return handleErrorResponse(err)
  }
}

export const useGetItem = (params?: Ref<GetItemParams>) => {
  return useQuery({
    queryKey: ['items', params],
    queryFn: (): Promise<GetItemResponse> => fetch(unref(params)),
  })
}
