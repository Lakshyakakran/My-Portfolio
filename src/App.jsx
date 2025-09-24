import React from 'react'
import Homepage from './pages/Homepage'
import AboutMe from './pages/AboutMe'
import Skills from './pages/Skills'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Fotter from './pages/Fotter'
const App = () => {
  return (
   <>
   <div className='w-full h-screen bg-gray-900'>
    <Homepage/>
    <AboutMe/>
    <Skills/>
    <Project/>
    <Contact/>
    <Fotter/>
   </div>
   </>
  )
}

export default App
