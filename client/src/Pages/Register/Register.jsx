import React from 'react'


function Register() {
  return (
    <div>
        <h1 className="text-center">Register</h1>
        <form action="">
            <input type="text" placeholder="Username" name='username'/><br/>
            <input type="email" placeholder="Email" name='email'/><br/>
            <input type="password" placeholder="Password" name='password'/><br/>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Register