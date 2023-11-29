import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Home() {

  const getAllUsers = async () => {
        try {
          const response = await axios.get('http://localhost:5000/allusers')
          console.log(response?.data)
        }
        catch(err){
          console.log(err)
        }
  }

  useEffect(() => {
    getAllUsers()
  }, [])
  
  return (
    <div>
        <h1>Welcome to my Website</h1>
        <Link to={'/register'}>Register</Link> <br /> <br />
        <Link to={'/login'}>Login</Link>
    </div>
  )
}

export default Home