

// import axios  from '@/config/axios'
// // get topics
// export const topicList = url => axios('/topics')
// // get topic count
// export const topicCount = date => axios('/statis/api/' + date + '/count')

import axios  from 'axios'
import { BASE_URL } from '@/config/env'

// TODO: http request
export default async({ method, url, data }) => {

  method = method ? method.toLowerCase() : 'get'
  url= BASE_URL + url
  let res = await axios({
      method: method,
      url: url,
      data: data,
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      //   'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
      //   'Access-Control-Allow-Methods': ':POST,GET,OPTIONS,DELETE',
			// 	'Accept': 'application/json',
			// 	'Content-Type': 'application/json'
			// },
    })
  return res.data.data
}
