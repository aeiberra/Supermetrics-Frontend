import { render, screen, act } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from '../../views/Home'

test('render Home view', async () => {
  render(
    <Router>
      <Home />
    </Router>
  )

  expect(screen.getByText('Posts:')).toBeInTheDocument()
  expect(screen.getByText('Loading...')).toBeInTheDocument()
})