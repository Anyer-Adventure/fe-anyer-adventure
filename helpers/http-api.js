const BASE_API_URL = 'https://sea-lion-app-e7gsg.ondigitalocean.app/api'

export default {
  async getRequest(url, query) {
    const response = await $fetch(BASE_API_URL + url, {
      query
    })
    return response
  },
  async postRequest(url, body) {
    const response = await $fetch(BASE_API_URL + url, {
      method: 'POST',
      body
    })
    return response
  }
}