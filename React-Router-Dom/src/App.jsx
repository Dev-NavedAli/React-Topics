import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import GitHub from './pages/GitHub'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about/:id' element={<About />} />
        <Route path='/about' element={<About />} />
        <Route  path='/github' element={<GitHub />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
