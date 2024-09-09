import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Register from './Register'
import Login from './Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/Login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
