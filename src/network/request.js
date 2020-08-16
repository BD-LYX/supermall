import axios from 'axios'

export function request(config) {
  // 1).创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.1).拦截器-请求拦截
  instance.interceptors.request.use(
    config => {
      return config;
    },err => {
      return err;
    })
  // 2.2).拦截器-响应拦截
  instance.interceptors.response.use(
    res => {
      return res.data;
    },err => {
      return err;
    }
  )
  // 3).发送请求，返回Promise
  return instance(config)
}
