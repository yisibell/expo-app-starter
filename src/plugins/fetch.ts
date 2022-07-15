import qs from 'qs'
import axios from 'axios'
import type { ICreateRequestApi } from '@src/types/apiRepository'
import getConstants from './getConstants'

const assign = (obj: {}, def: {}) => {
  return Object.assign({}, obj, def)
}

const { APP_BASE_API, APP_MOCK_API } = getConstants()

const createAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: APP_BASE_API,
    timeout: 50000,
  })

  // 请求拦截
  axiosInstance.interceptors.request.use(
    (config) => {
      // set JWT token
      axiosInstance.defaults.headers.common.Authorization =
        'your jwt accessToken'

      return config
    },
    (err) => {
      console.error('[Request Error]：', err)

      return Promise.reject(err)
    }
  )

  // 响应拦截
  axiosInstance.interceptors.response.use(
    (resp) => {
      const { code, data } = resp.data

      if (![200, 201, 0].includes(code)) {
        // 重定向处理
        if ([301, 302].includes(code)) {
          const { location } = data

          console.log(location)
        } else {
          console.error('[Response Error Data]:', resp)
        }
      }

      return resp.data
    },
    (err) => {
      const code = err.response?.status

      console.error('[HTTP Response Error Code]:', code)
      console.error('[HTTP Response Error Info]:', err)

      if (code === 401) {
        // token 失效
        // redirect('/login')
      }

      if (err.isAxiosError) {
        console.error('[Axios Response Error Info]:', err)
      }

      return Promise.reject(err)
    }
  )

  return axiosInstance
}

// 创建请求api
const createRequestApi: ICreateRequestApi =
  (axiosInstance) =>
  (option, extraOption = {}) => {
    const { dataType = 'json', mock = false } = extraOption

    // 是否 mock 数据模式
    if (mock && APP_MOCK_API) {
      option.url = `${APP_MOCK_API}${option.url}`
    }

    if (dataType === 'formData') {
      // 发送 formData 数据格式
      option.headers = assign(
        {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        option.headers || {}
      )
      option.data = qs.stringify(option.data)
    } else if (dataType === 'formData2') {
      // 含文件
      option.headers = assign(
        {
          'Content-Type': 'multipart/form-data',
        },
        option.headers || {}
      )
    }

    return new Promise((resolve, reject) => {
      axiosInstance(option).then(resolve).catch(reject)
    })
  }

// axios instance
const axiosInstance = createAxiosInstance()

// 二次包装请求方法
const request = createRequestApi(axiosInstance)

export default request
