import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import * as AuthService from './services/auth.service'

import EventBus from './common/EventBus'
import { TokenInterface } from './types/types'
import NavBar from './components/navBar/NavBar'
import Router from './routers/router'

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<TokenInterface | undefined>(undefined)

  useEffect(() => {
    const user = AuthService.getCurrentUser()

    if (user !== undefined) {
      setCurrentUser(user)
    }

    EventBus.on('logout', logOut)

    return () => {
      EventBus.remove('logout', logOut)
    }
  }, [])

  const logOut = (): void => {
    AuthService.logout()
    setCurrentUser(undefined)
  }

  return (
    <div>
      <NavBar currentUser={currentUser} logOut={logOut} />

      <div className='container mt-3'>
        <Router />
      </div>
    </div>
  )
}

export default App
