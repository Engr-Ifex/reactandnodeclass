import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
  
  return (
    <div>
        <h1>Welcome to my Website</h1>
        <Link to={'/register'}>Register</Link> <br /> <br />
        <Link to={'/login'}>Login</Link>
    </div>
  )
}

export default Home