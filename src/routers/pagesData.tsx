import { routerType } from '../types/router.types'
import Login from '../views/auth/Login'
import Dashboard from '../views/Dashboard'
import Home from '../views/Home'
import Profile from '../views/Profile'

const pagesData: routerType[] = [
  {
    path: '',
    element: <Home />,
    title: 'Home'
  },
  {
    path: 'home',
    element: <Home />,
    title: 'Home'
  },
  {
    path: 'login',
    element: <Login />,
    title: 'Login'
  },
  {
    path: 'profile',
    element: <Profile />,
    title: 'Profile'
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    title: 'Dashboard'
  }
]

export default pagesData
