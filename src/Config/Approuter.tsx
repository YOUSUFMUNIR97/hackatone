import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '../Screens/Login'
import Signup from '../Screens/Signup'
import Calling from '../Screens/Calling'
import Protected from '../Screens/Protected'
import Admin from '../Screens/Admin/Admin'
import Acceptors from '../Screens/Admin/Acceptors'
import Donors from '../Screens/Admin/Donors'
import Home from '../Screens/Home'


const Approuter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Calling' element={<Calling />} />
          <Route path='/admin/*' element={<Protected Screen={Admin} />} />
          <Route path='/donors' element={<Protected Screen={Donors} />} />
          <Route path='/acceptors' element={<Protected Screen={Acceptors} />} />
        </Routes>

      </Router>

    </>

  )
}

export default Approuter
