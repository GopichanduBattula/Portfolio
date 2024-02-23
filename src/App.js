import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import {Routes,Route} from 'react-router-dom'
import Contact from './Components/Contact'
import Skills from './Components/Skills'
import Works from './Components/Works'


function App() {
  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/works' element={<Works/>}/>
    </Routes>
    

    </>
  )
}

export default App