import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import Dashboard from './Pages/Dashboard/Dashboard'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </>
  )
}

export default App
