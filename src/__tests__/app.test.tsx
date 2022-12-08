import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import { BrowserRouter as Router } from 'react-router-dom'

test('renders App component', async () => {
  render(
    <Router>
      <App />
    </Router>
  )

  expect(screen.getByText('Supermetrics')).toBeInTheDocument()
  expect(screen.getByText('Login')).toBeInTheDocument()

  await userEvent.click(screen.getByText('Login'))

  expect(screen.getByRole('textbox', { name: 'Name' })).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: 'Email' })).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: 'Client ID' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()
})
