import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()


  const handleSubmit = async () => {
    // API -> fetch(), axios()
    // // http://localhost:5000/register
   try{
    const response =await axios.post('http://localhost:5000/register', {
      username, 
      email,
      password
    })
    console.log(response)

    navigate('/login')
   }
   catch(err){
    console.log(err)
   }

  }

  useEffect(() =>{
     handleSubmit()
  }, [])


  return (
    <div>
        <h1 className="text-center">Register</h1>
        <form action="">
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} name='username'/><br/>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} name='email'/><br/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} name='password'/><br/>
            <input type="submit" value="Submit" onClick={handleSubmit} />
        </form>
    </div>
  )
}

export default Register