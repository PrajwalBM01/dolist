import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Header from './components/Header'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Notfound from './pages/NotFOund'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <main>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/*' element={<Notfound/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App