import React, { useEffect } from 'react'
import Navbar from './components/shared/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Orders from './pages/Orders';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useAuth } from './context/AuthProvider';
import Allorders from './pages/Allorders';


const App = () => {
  const {login, user} = useAuth()
  useEffect(()=>{
    login()
  },[])
  return (
    <div>
      <Navbar/>
    <Routes>
      <Route path = "/" element = {<Home />}/>
      <Route path = "/shop" element = {user ? <Shop/> : <Login/>}/>
      <Route path = "/orders" element = {user ? <Orders/> : <Login/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/signup" element = {<Signup/>}/>
      <Route path = "/allorders" element ={user?.role == 'owner' ? <Allorders/> : <Login/>}/>
    </Routes>
    </div>
  )
}

export default App