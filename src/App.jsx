import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Landing from './pages/Landing'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Grid, AppBar, Button, Typography } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AppBar color='primary'>
      <Typography>Welcome to Accredian!</Typography>
    </AppBar>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/landingpage' element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
