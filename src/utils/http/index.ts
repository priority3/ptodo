import Request from './axios'
import { AxiosResponse } from 'axios'

import type { RequestConfig } from './types'

export interface PRIResponse<T> {
  code: number
  desc: string
  result: T
}

// 重写返回类型
/**
 * T 请求参数
 * D 响应结构
 */
interface PRIRequestConfig<T, R> extends RequestConfig<PRIResponse<R>> {
  // data 可取 某些请求不需要携带data
  data?: T
  // 上传文件
  isUploadFile?: boolean
  // 下载文件
  isDownloadFile?: boolean
  // header
  header?: object
}

const request = new Request({
  baseURL: import.meta.env.BASE_URL,
  timeout: 1000 * 60 * 5,
  // 实列拦截
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config) => config,
    // 响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      return result
    },
  },
})

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {PRIRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const PRIRequest = <D = any, T = any>(config: PRIRequestConfig<D, T>) => {
  const { method = 'GET' } = config
  if (method === 'get' || method === 'GET') {
    config.params = config.data
  }

  return request.request<PRIResponse<T>>(config)
}
// 取消请求
export const cancelRequest = (url: string | string[]) => {
  return request.cancelRequest(url)
}
// 取消全部请求
export const cancelAllRequest = () => {
  return request.cancelAllRequest()
}

export default PRIRequest
