import React, { useState, useEffect } from 'react'

import { PostDataInterface, ErrorInterface } from '../types/types'
import { getPosts } from '../services/user.service'
import EventBus from '../common/EventBus'
import Table from '../components/table'

const Home: React.FC = () => {
  const [content, setContent] = useState<PostDataInterface | ErrorInterface>()
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    getPosts(currentPage).then(
      (response) => {
        setContent(response.data)
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  return (
    <div className='container'>
      <header className='jumbotron'>
        <h2>Posts:</h2>
      </header>
      <div>
        <>
          {(content != null) && 'page' in content && !loading
            ? <Table
                data={content.posts}
                total={1000}
                limit={100}
                currentPage={currentPage}
                onPageChange={(page: number) => setCurrentPage(page)}
              />
            : 'Loading...'}
        </>
      </div>
    </div>
  )
}

export default Home
