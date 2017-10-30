import axios from 'axios'
const BASE_URL = '/api'

const ax = axios.create({
  baseURL: BASE_URL
})

export default ax
