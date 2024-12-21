import React, { useContext } from 'react'
import Component1 from './Component1'
import { counterContext } from '../context/context'

const Button = () => {
    const value = useContext(counterContext)
  return (
    <>
       <button onClick={()=>value.setCount((count)=>count+1)}>Iam button</button>
      <Component1 />
    </>
  )
}

export default Button