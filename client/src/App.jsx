import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import ProjectContainer from './ProjectContainer'
import About from './About'
import ContactForm from './ContactForm'
import Home from './Home'

function App() {
  

  return (
    <>
     <Nav />
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<ProjectContainer/>}/>
      <Route path='/contact-me' element={<ContactForm/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
     <Footer />
    </>
  )
}

export default App
