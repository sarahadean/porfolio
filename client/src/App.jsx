import { useState } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ProjectContainer from './components/ProjectContainer'
import About from './components/About'
import ContactForm from './components/ContactForm'
import Home from './components/Home'

function App() {
  

  return (
    <main>
      <Nav />
      <Home id="home"/>
      <ProjectContainer id="projects"/>
      <ContactForm id="contact"/>
      <About id="about"/>
      <Footer />
      </main>
  )
}

export default App
