// import { readBody } from 'h3';

import api from '~/helpers/http-api.js'
import apiUrls from '@config/api-urls.js'

export default defineEventHandler(async (event) => {
  console.log('msk')
  // const body = await readBody(event)
  // console.log('body', body)
	const repo = await api.getRequest(apiUrls.transaction.create)
	return {
    data: 'test'
  }
})
