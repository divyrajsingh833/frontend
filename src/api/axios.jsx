import axios from "axios"

const instance = axios.create({
  baseURL : 'https://backend-alpha-ashy.vercel.app/api'
})

export default instance
