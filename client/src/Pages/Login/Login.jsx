import React from 'react'

function Login() {
  return (
    <div>
        <h1 className="text-center">Login</h1>
        <form action="">
            <input type="email" placeholder="Email"/><br/>
            <input type="password" placeholder="Password"/><br/>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Login