import { render, screen, act } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Dashboard from '../../views/Dashboard'

test('render Dashboard view', async () => {
  render(
    <Router>
      <Dashboard />
    </Router>
  )

  expect(screen.getByText('Dashboard:')).toBeInTheDocument()
  expect(screen.getByText('Loading...')).toBeInTheDocument()
})