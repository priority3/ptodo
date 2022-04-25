import PRIRequest from '/@/utils/http'
import type { testRequest, testResponse } from './model/testModel'

enum API {
  testApi = '/api/common/weather/get15DaysWeatherByArea',
}

export const get15DaysWeatherByArea = (data: testRequest) => {
  return PRIRequest<testRequest, testResponse>({
    url: API.testApi,
    method: 'GET',
    data,
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
