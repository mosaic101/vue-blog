

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
      data: data
    })
  return res.data.data
}
