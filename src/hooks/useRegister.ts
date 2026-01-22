import { registerService } from '@/api/services'
import { handleErrorResponse } from '@/libs/response'
import type { RegisterPayload, RegisterResponse } from '@/types/auth.type'
import { useMutation } from '@tanstack/vue-query'

const fetch = async (payload: RegisterPayload): Promise<RegisterResponse> => {
  try {
    const result = await registerService(payload)
    return result.data
  } catch (err: unknown) {
    return handleErrorResponse(err)
  }
}

export const useRegister = () => {
  return useMutation({
    mutationFn: (payload: RegisterPayload) => fetch(payload),
  })
}
