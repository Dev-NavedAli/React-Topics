import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import ParentComponent from './components/ParentComponent'
import Form from './pages/Form'
import Api from './pages/Api'

const App = () => {

  const [count, setCount] = useState(0)
  const buttonref = useRef(null)

  const inCount = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    if (buttonref.current) {
      buttonref.current.style.backgroundColor = count > 2 ? 'blue' : 'red';
    }
  }, [count])

  return (
    <>
      <Navbar />
      <ParentComponent />
      <button ref={buttonref} onClick={inCount}>{count}</button>
      <Form/>
      <Api/>
    </>
  )
}

export default App
