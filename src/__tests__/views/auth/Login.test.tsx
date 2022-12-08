import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter as Router } from 'react-router-dom'
import Login from '../../../views/auth/Login'

test('render Home view', async () => {
  render(
    <Router>
      <Login />
    </Router>
  )

  expect(screen.getByRole('textbox', { name: 'Name' })).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: 'Email' })).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: 'Client ID' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()

  const inputName = screen.getByRole('textbox', { name: 'Name' })
  const inputEmail = screen.getByRole('textbox', { name: 'Email' })
  const inputClientId = screen.getByRole('textbox', { name: 'Client ID' })

  await act(() => {
    userEvent.type(inputName, 'Alan Eugenio Iberra')
    userEvent.type(inputEmail, 'aeiberra@gmail.com')
    userEvent.type(inputClientId, 'ju16a6m81mhid5ue1z3v2g0uh')
  })

  expect(screen.getByDisplayValue(/Alan Eugenio Iberra/)).toBeInTheDocument()
  expect(screen.getByDisplayValue(/aeiberra@gmail.com/)).toBeInTheDocument()
  expect(screen.getByDisplayValue(/ju16a6m81mhid5ue1z3v2g0uh/)).toBeInTheDocument()
})