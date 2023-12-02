import axios from "axios"

const BASE_URL = 'https://api.emailjs.com/api/v1.0/email'

export const emailApi = axios.create({
  baseURL: BASE_URL,
})