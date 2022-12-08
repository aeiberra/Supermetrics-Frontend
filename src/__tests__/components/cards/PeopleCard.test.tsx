import { render, screen, act } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import PeopleCard from '../../../components/cards/PeopleCard'
import { PeopleInterface } from '../../../types/types'

const people: PeopleInterface = {
  id: 'user_10',
  name: 'Rafael Althoff',
  posts: 64,
  characters: 27250,
  longestPost: 'raid threshold ballet thumb press danger skeleton variable reconcile sword delicate indulge reduction banana room spontaneous herd useful retiree compact positive preparation organize insert market advance part suffer water debut sow norm reconcile bay resource publisher leave run litigation museum permission boat harmful resident popular height space future impulse delay curl coincide crash bar old find epicalyx crash meat thinker hour relation contrary diameter symptom retired abortion memorandum message thought estimate pick hilarious humanity recruit default gallon tape slap quotation use wall disk magazine point smell quote final tap factor trick flat national album slap flower torture carve bother',
  postsPerMonth: [0, 0, 0, 0, 0, 14, 8, 10, 15, 9, 6, 2],
  charactersAverage: 425.78125
}

test('render PeopleCard component', async () => {
  render(
    <Router>
      <PeopleCard content={{ user_10: people }} />
    </Router>
  )

  expect(screen.getByText(people.id)).toBeInTheDocument()
  expect(screen.getByText(people.name)).toBeInTheDocument()
  expect(screen.getByText(people.characters)).toBeInTheDocument()
  expect(screen.getByText(people.charactersAverage)).toBeInTheDocument()
  expect(screen.getByText(people.longestPost)).toBeInTheDocument()
  expect(screen.getByText(people.posts)).toBeInTheDocument()
  expect(screen.getByText(people.postsPerMonth[5])).toBeInTheDocument()
})