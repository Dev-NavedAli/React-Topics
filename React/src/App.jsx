import React from 'react'
import Card from './components/Card.jsx'
import Counter from './components/Counter.jsx'
import BgChanger from './components/BgChanger.jsx'
import PasswordGenrator from './components/PasswordGenrator.jsx'
import { ToastContainer , toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

const App = () => {



  return (
    <>
      <div className='flex items-center justify-evenly '>
      <ToastContainer/>
        <Card name="Naved" desc="A perfectly Genius" />
        <Card name="Noman" desc="A Perfectionist" />
        <Counter/>
        <BgChanger/>
        <PasswordGenrator/>
      </div>
    </>
  )
}

export default App
