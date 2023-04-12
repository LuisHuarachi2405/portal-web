import axios from 'axios'

export const AUTH_BASE_URL = process.env.NEXT_PUBLIC_AUTH

export const api = axios.create({
  baseURL: AUTH_BASE_URL,
  withCredentials: true,
})
