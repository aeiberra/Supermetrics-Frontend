import { Link } from 'react-router-dom'
import { TokenInterface } from '../../types/types'

const NavBar = ({ currentUser, logOut }: { currentUser: TokenInterface | undefined, logOut: any }): JSX.Element => {
  return (
    <nav className='navbar navbar-expand navbar-dark bg-dark'>
      <Link to='/' className='navbar-brand'>
        Supermetrics
      </Link>
      <div className='navbar-nav mr-auto'>

        {(currentUser != null) && (
          <div className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link to='/home' className='nav-link'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/dashboard' className='nav-link'>
                Dashboard
              </Link>
            </li>
          </div>
        )}
      </div>

      {(currentUser != null)
        ? (
          <div className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link to='/profile' className='nav-link'>
                {currentUser.email}
              </Link>
            </li>
            <li className='nav-item'>
              <a href='/login' className='nav-link' onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
          )
        : (
          <div className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link to='/login' className='nav-link'>
                Login
              </Link>
            </li>
          </div>
          )}
    </nav>
  )
}

export default NavBar
