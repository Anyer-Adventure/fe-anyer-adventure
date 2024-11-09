import api from '~/helpers/http-api.js'
import apiUrls from '@config/api-urls.js'

export default defineEventHandler(async (event) => {
  const repo = await api.getRequest(apiUrls.general.all.entity)
  return repo
})
