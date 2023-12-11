import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Dashboard() {
   const [users, getUsers] = useState([])


    const getAllUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/allusers')
            console.log(response?.data?.user)
            const { user } = response?.data
            console.log(user)
            getUsers(user)
        } catch (error) {
            console.error(error?.response?.data)
        }
    }

    useEffect(() => {
        getAllUsers()
    }, [])

  return (
    <div className='bg-black'>
        {users.map((user, index) => {
            return (
                <div key={index} >
                    {/* <p>{user._id}</p> */}
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Dashboard