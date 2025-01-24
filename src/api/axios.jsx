import axios from "axios"

const instance = axios.create({
  baseURL : 'https://backend-cgqb.onrender.com/api'
})

export default instance
