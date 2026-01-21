import { loginService } from '@/api/services'
import { handleErrorResponse } from '@/libs/response'
import type { LoginPayload, LoginResponse } from '@/types/auth.type'
import { useMutation } from '@tanstack/vue-query'

const fetch = async (payload: LoginPayload): Promise<LoginResponse> => {
  try {
    const result = await loginService(payload)
    return result.data
  } catch (err: unknown) {
    return handleErrorResponse(err)
  }
}

export const useLogin = () => {
  return useMutation({
    mutationFn: (payload: LoginPayload) => fetch(payload),
  })
}
