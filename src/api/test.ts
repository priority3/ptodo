import PRIRequest from '/@/utils/http'
import type { testRequest, testResponse } from './model/testModel'

enum API {
  testApi = '/basic-api/account/getAccountInfo',
}

export const getTestApi = () => {
  return PRIRequest<testRequest, testResponse>({
    url: API.testApi,
    method: 'GET',
    interceptors: {
      requestInterceptors(res) {
        console.log('接口请求拦截')
        return res
      },
      responseInterceptors(result) {
        console.log('接口响应拦截')
        return result
      },
    },
  })
}
