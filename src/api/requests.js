import axios from 'axios'
import URLS from '@/api/urls.json'
import {MessageBox} from 'element-ui'

let hemsRequest = axios.create({
  baseURL: '/rest/v1',
  timeout: 30000
})

let loginRequest = axios.create({
  baseURL: '/rest/v1',
  timeout: 30000
})

function successHandler (response) {
  return response.data
}

function errorHandler (error) {
  return error
}

// eslint-disable-next-line no-unused-vars
function request (key, {params = {}, data = {}, headers = {}, options = {}} = {}) {
  let urlOption = URLS[key]
  if (!urlOption) {
    throw new Error(`No this url key: ${key}`)
  }

  let url = urlOption.url
  let method = urlOption.method

  let requestObj = hemsRequest
  if (url === URLS['LOGIN']['url']) {
    requestObj = loginRequest
  }

  return requestObj(
    {
      url,
      method,
      headers,
      data: data
    }
  ).then(successHandler, errorHandler)
}

hemsRequest.interceptors.request.use(config => {
  if (localStorage.token) {
    config.headers.common['token'] = localStorage.token
  }
  return config
})

hemsRequest.interceptors.response.use(response => {
  if (response.data.success === false) {
    MessageBox.alert(response.data.exception.code, '错误', {
      customClass: 'ajax-error',
      showConfirmButton: true
    })
  }
  return response
})

export default request