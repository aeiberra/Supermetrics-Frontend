import { render, screen, act } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Table from '../../../components/table'
import { PostData } from '../../../types/types'

const post: PostData = {
  id: 'post63904cd26a8e8_93f47c12',
  from_name: 'Macie Mckamey',
  from_id: 'user_11',
  message: 'area huge overcharge evolution pursuit information brake nuclear transmission correction marsh shaft gift empirical drill inquiry ally impulse hallway thinker broken fame corn organize question egg white act generation monstrous design recognize body hallway expertise hostile bracket address day decorative effective litigation bill use knock story symptom knock underline acceptance traction village publisher abstract dilute sex virtue fist return presidency huge slap',
  type: 'status',
  created_time: '2022-12-07T04:18:58+00:00'
}

test('render Table view', async () => {
  render(
    <Router>
      <Table
        data={[post]}
        total={1000}
        limit={100}
        currentPage={1}
        onPageChange={(page: number): void => {}}
      />
    </Router>
  )

  expect(screen.getByText(post.from_name)).toBeInTheDocument()
  expect(screen.getByText(post.from_id)).toBeInTheDocument()
  expect(screen.getByText(post.message)).toBeInTheDocument()
  expect(screen.getByText(post.type)).toBeInTheDocument()
  expect(screen.getByText(new Date(post.created_time).toUTCString())).toBeInTheDocument()
})