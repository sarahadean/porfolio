import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ProjectContainer from './components/ProjectContainer'
import About from './components/About'
import ContactForm from './components/ContactForm'
import Home from './components/Home'
import './index.css'

function App() {
  

  return (
    <>
      <Nav />
      <Home id="home"/>
      <ProjectContainer id="projects"/>
      <ContactForm id="contact"/>
      <About id="about"/>
      <Footer />
    </>
  )
}

export default App
