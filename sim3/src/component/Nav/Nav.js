import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
// import { username, password, profile_pic } from '../../ducks/reducer'

export function Nav() {
  return (
    <div className=''>
      <Link to='/dashboard'>
        <button className='button'>Home</button>
      </Link>
      <Link to='/post'>
      <button className='button'>New Post</button>
        </Link>
      <Link to='/'>
        <button className='button'>Logout</button>
      </Link>
    </div>
  )
}
function mapStateToProps(state) {
  return {
    // username: state.username,
    // password: state.password,
    // profile_pic: state.profile_pic

  }
}

export default Nav
// export default connect(mapStateToProps, { username, password, profile_pic } )(Nav)
