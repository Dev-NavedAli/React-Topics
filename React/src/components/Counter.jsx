import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)

    const plus = ()=>{
    setCount(count+1)
    setCount(prev=>prev+1)
    setCount(prev=>prev+1)
    setCount(prev=>prev+1)
    setCount(prev=>prev+1)
    }

    const minus = ()=>{
        setCount(count-1)
    }

  return (

    <>
    <h1>Counter Value : {count} </h1>
       {count>1 ?  <div>
       <button onClick={plus}>Increament</button> <br /> 
       <button onClick={minus}>decreamnt</button>
       </div>:  <button onClick={plus}>Increament</button>  }
       
      
    </>

  )
}

export default Counter
