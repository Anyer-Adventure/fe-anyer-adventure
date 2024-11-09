import { getQuery } from 'h3';

import api from '~/helpers/http-api.js'
import apiUrls from '@config/api-urls.js'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const repo = await api.getRequest(apiUrls.general.explore, query)
  return repo
})
