import { getItems } from '@/api/services'
import { handleErrorResponse } from '@/libs/response'
import type { Params } from '@/types/global.type'
import type { GetItemResponse } from '@/types/item.type'
import { useQuery } from '@tanstack/vue-query'
import { unref, type Ref } from 'vue'

const fetch = async (params?: Params): Promise<GetItemResponse> => {
  try {
    const result = await getItems(params)
    return result.data
  } catch (err: unknown) {
    return handleErrorResponse(err)
  }
}

export const useGetItem = (params?: Ref<Params>) => {
  return useQuery({
    queryKey: ['items', params],
    queryFn: (): Promise<GetItemResponse> => fetch(unref(params)),
  })
}
