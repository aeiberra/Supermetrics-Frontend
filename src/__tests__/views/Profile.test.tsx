import { render, screen, act } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { TokenInterface } from '../../types/types'
import Profile from '../../views/Profile'

const user: TokenInterface = {
  client_id: 'ju16a6m81mhid5ue1z3v2g0uh',
  email: 'aeiberra@gmail.com',
  sl_token: 'smslt_f070c4755fcc_b3a84213e0cbada'
}

test('render Profile view', async () => {
  render(
    <Router>
      <Profile />
    </Router>
  )

  expect(screen.queryByText(user.client_id)).toBeNull()
  expect(screen.queryByText(user.email)).toBeNull()
  expect(screen.queryByText(user.sl_token)).toBeNull()
})

test('render logged Profile view', async () => {
  localStorage.setItem('user', JSON.stringify(user))
  render(
    <Router>
      <Profile />
    </Router>
  )

  expect(screen.getByText(user.client_id)).toBeInTheDocument()
  expect(screen.getByText(user.email)).toBeInTheDocument()
  expect(screen.getByText(user.sl_token)).toBeInTheDocument()
})