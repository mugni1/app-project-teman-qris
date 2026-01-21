import router from '@/router'
import Cookies from 'js-cookie'
import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'

// INTIALIZATION
const createAxiosInstance = (): AxiosInstance => {
  const baseURL = import.meta.env.VITE_BASE_API_URL || 'http://localhost:5050'
  const timeout = parseInt(import.meta.env.VITE_API_TIMEOUT || '10000')
  const instance = axios.create({
    baseURL,
    timeout,
  })

  instance.interceptors.request.use(
    (config) => {
      const token = Cookies.get('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => Promise.reject(error),
  )

  instance.interceptors.response.use(
    (response: any) => {
      return response
    },
    (error: any) => {
      if (error.response?.status === 401 || error.response?.status === 403) {
        router.push('/login')
      }
      return Promise.reject(error)
    },
  )
  return instance
}

// HTTP CLIENT
export const httpClient = {
  get: (url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return createAxiosInstance().get(url, config)
  },
  delete: (url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return createAxiosInstance().delete(url, config)
  },
  post: (url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return createAxiosInstance().post(url, data, config)
  },
  put: (url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return createAxiosInstance().put(url, data, config)
  },
}
