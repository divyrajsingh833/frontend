import axios from "axios"

const instance = axios.create({
  baseURL : 'https://backend-alpha-ashy.vercel.app/'
})

export default instance
