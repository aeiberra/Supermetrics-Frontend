import axios from 'axios'
import { TokenInterface } from '../types/types'

const API_URL: string = (process.env.REACT_APP_API_URL as string)

// eslint-disable-next-line @typescript-eslint/naming-convention
export const login = async (name: string, email: string, client_id: string): Promise<any> => {
  return await axios
    .post(API_URL + 'social/login', {
      name,
      email,
      client_id
    })
    .then((response) => {
      if (response.data != null) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }

      return response.data
    })
}

export const logout = (): void => {
  localStorage.removeItem('user')
  localStorage.removeItem('dashboard')
  window.location.href = '/login'
}

export const getCurrentUser = (): TokenInterface | undefined => {
  const userStr = localStorage.getItem('user')
  if (userStr != null) return JSON.parse(userStr)

  return undefined
}
