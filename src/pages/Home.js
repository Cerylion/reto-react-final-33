import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <p>
        <Link to='/Login'>Login</Link>
      </p>
      <p>
        <Link to='/Register'>Register</Link>
      </p>
    </div>
  )
}

export default Home