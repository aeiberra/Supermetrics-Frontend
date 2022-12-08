import { render, screen, act } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from '../../../components/navBar/NavBar'
import { TokenInterface } from '../../../types/types'

const user: TokenInterface = {
  client_id: 'ju16a6m81mhid5ue1z3v2g0uh',
  email: 'aeiberra@gmail.com',
  sl_token: 'smslt_f070c4755fcc_b3a84213e0cbada'
}

test('render nav component', async () => {
  render(
    <Router>
      <NavBar currentUser={undefined} logOut={(): void => {}} />
    </Router>
  )

  expect(screen.getByText('Supermetrics')).toBeInTheDocument()
  expect(screen.getByText('Login')).toBeInTheDocument()
})

test('render logged nav component', async () => {
  render(
    <Router>
      <NavBar currentUser={user} logOut={(): void => {}} />
    </Router>
  )

  expect(screen.getByText('Supermetrics')).toBeInTheDocument()
  expect(screen.getByText('Home')).toBeInTheDocument()
  expect(screen.getByText('Dashboard')).toBeInTheDocument()
  expect(screen.getByText('aeiberra@gmail.com')).toBeInTheDocument()
  expect(screen.getByText('LogOut')).toBeInTheDocument()
})