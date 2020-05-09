import request from '@/api/requests'

let API = {
  login (data) {
    let Base64 = require('js-base64').Base64
    data.username = Base64.encode(data.username)
    data.password = Base64.encode(data.password)
    return request('LOGIN', {data})
  },

  getDeviceInfo () {
    return request('GET_DEVICE_INFO')
  },

  getFirewallResource () {
    return request('GET_FIREWALL_RESOURCE')
  },

  getVnfList () {
    return request('GET_VNF_LIST')
  },

  getSystemLog () {
    return request('GET_SYSTEM_LOG')
  },

  getVnfLog () {
    return request('GET_VNF_LOG')
  },

  getConsistenciesResult () {
    return request('GET_CONSISTENCIES_RESUTL')
  }
}

export default API