import React, { useState, useEffect } from 'react'

import { getDashboard } from '../services/user.service'
import { PeopleObjectInterface, ErrorInterface } from '../types/types'
import EventBus from '../common/EventBus'
import PeopleCard from '../components/cards/PeopleCard'

const Dashboard: React.FC = () => {
  const [content, setContent] = useState<PeopleObjectInterface | ErrorInterface>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    if (localStorage.getItem('dashboard') !== null) {
      const dashboardData = JSON.parse((localStorage.getItem('dashboard') ?? '{}'))
      setContent(dashboardData)
      setLoading(false)
    } else {
      getDashboard().then(
        (response) => {
          setContent(response.data)
          localStorage.setItem('dashboard', JSON.stringify(response.data))
          setLoading(false)
        },
        (error) => {
          const _content = error?.response?.data

          if ((Boolean(error.response)) && error.response.status === 401) {
            alert(_content.message)
            EventBus.dispatch('logout')
          }
        }
      )
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='container'>
      <header className='jumbotron'>
        <h2>Dashboard:</h2>
      </header>
      <div>
        <>
          {typeof content === 'object' && !loading
            ? <PeopleCard content={content} />
            : 'Loading...'}
        </>
      </div>
    </div>
  )
}

export default Dashboard
