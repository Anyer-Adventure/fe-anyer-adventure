import { getQuery } from 'h3';

import api from '~/helpers/http-api.js'
import apiUrls from '@config/api-urls.js'

export default defineEventHandler(async (event) => {
  console.log('lodge')
	const params = getQuery(event)
  const query = {
    chkin: params.chkin,
    chkout: params.chkout,
    guest: params.guest
  }
	const repo = await api.getRequest(apiUrls.lodge(params.uuid), query)
	return repo

  // return [
  //   {
  //       "uuid": "455732b2-a5b1-4ea3-aacb-f3515e2d3869",
  //       "name": "Sample Lodge",
  //       "slug": "sample-lodge",
  //       "category": "HOTEL",
  //       "longitude": 110.123456,
  //       "latitude": -7.123456,
  //       "imageUrl": "http://example.com/image.jpg",
  //       "videoUrl": "http://example.com/video.mp4",
  //       "description": "This is a sample lodge description.",
  //       "facilities": [
  //           {
  //               "id": 1,
  //               "name": "test",
  //               "iconUrl": "test"
  //           },
  //           {
  //               "id": 2,
  //               "name": "test3",
  //               "iconUrl": "test3"
  //           }
  //       ],
  //       "uoms": null,
  //       "moreInfo": "Additional information about the lodge.",
  //       "checkInTime": "14:00:00",
  //       "checkOutTime": "12:00:00",
  //       "refundable": true,
  //       "refundDesc": "Full refund if canceled 24 hours before check-in.",
  //       "agePolicy": "No age restrictions.",
  //       "otherPolicy": "No smoking inside the lodge.",
  //       "province": "Central Java",
  //       "city": "Semarang",
  //       "rooms": [
  //           {
  //               "uuid": "f89bf6c8-8240-47cf-b45e-83320c3cb5b2",
  //               "name": "Deluxe Room",
  //               "slug": "deluxe-room",
  //               "priceDefault": 150000.0,
  //               "discountType": "PERCENTAGE",
  //               "discount": 10.0,
  //               "availability": 5,
  //               "imageUrl": "http://example.com/image.jpg",
  //               "videoUrl": "http://example.com/video.mp4",
  //               "capacity": 2,
  //               "bedType": "QUEEN",
  //               "size": 35,
  //               "facilityDesc": "Spacious room with a queen-sized bed and modern amenities.",
  //               "customAvailabilities": [
  //                   {
  //                       "price": 200000,
  //                       "date": "2024-05-30",
  //                       "discountType": "PERCENTAGE",
  //                       "discount": 10.0,
  //                       "availability": 20
  //                   }
  //               ]
  //           }
  //       ]
  //   }
  // ]
})
