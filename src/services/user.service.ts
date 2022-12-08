import axios from 'axios'
import authHeader from './auth-header'

const API_URL: string = (process.env.REACT_APP_API_URL as string)

export const getPosts = async (page: number): Promise<any> => {
  return await axios.get(API_URL + `social/post?sl_token=${authHeader().sl_token}&page=${page}`)
}

export const getDashboard = async (): Promise<any> => {
  return await axios.get(API_URL + `social/dashboard?sl_token=${authHeader().sl_token}`)
}
