import React from 'react'
import { getCurrentUser } from '../services/auth.service'

const Profile: React.FC = () => {
  const currentUser = getCurrentUser()

  return (
    <div className='container'>
      <>
        {currentUser !== undefined
          ? <>
            <header className='jumbotron'>
              <h3>
                <strong>Email:</strong> {currentUser?.email}
              </h3>
            </header>
            <p>
              <strong>Id:</strong> {currentUser?.client_id}
            </p>
            <p>
              <strong>Token:</strong> {currentUser?.sl_token}
            </p>
            {/* eslint-disable-next-line react/jsx-indent */}
            </>
          : null}
      </>
    </div>
  )
}

export default Profile
