/**
 * request api with axios.js
 */

 import ax from './axios'

export default {
  // get topic
  getTopic(id) {
    return ax.get(`/topics/${id}`)
      .then(res => res.data.data)
  },
  // get topics
  getTopics(params) {
    return ax.get('/topics', {params: params})
      .then(res => res.data.data)
  },
  // get topic count
  getTopicCount() {
    return ax.get('/topics/count')
    .then(res => res.data.data)
  },
  // add topic
  addTopic(data) {
    return ax.post('/topics', data)
    .then(res => res.data.data)
  },
  // get hot topics
  getHotTopics() {
    return ax.get('/topics/hot')
    .then(res => res.data.data)
  }
}
