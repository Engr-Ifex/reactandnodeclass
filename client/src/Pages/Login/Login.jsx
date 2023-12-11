import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleLogin = async (e) =>{
    e.preventDefault()
    const response = await axios.post('http://localhost:5000/login', {
      email,
      password
    })
    console.log(response?.data)
    navigate('/dashboard')
  }

  return (
    <div>
        <h1 className="text-center">Login</h1>
        <form onSubmit={handleLogin}>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/><br/>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/><br/>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Login