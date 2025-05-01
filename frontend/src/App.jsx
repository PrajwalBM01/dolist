import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Header from './layouts/Header'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Notfound from './pages/NotFOund'
import Dashboard from './pages/Dashboard'
import Protectedroutes from './components/Protectedroutes'


const App = () => {
  
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <main>
          <Routes>
            {/*public routes*/}
            <Route path='/' element={<Landing/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>

            {/*protected routes*/}
            <Route element={<Protectedroutes/>}>
              <Route path='/dashboard' element={<Dashboard/>}/>
            </Route>

            {/*404 route*/}
            <Route path='/*' element={<Notfound/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App