import React from 'react'

const ConditionalRendering = () => {
    let numbers = [1,2,3,4,5,6,7,8,9]
  return (
    <div>
      {
        numbers.map((item,index)=>(
            item > 3 ? (<h1 key={index}>{item}</h1>) : ("")
        ))  
        }
    </div>
  )
}

export default ConditionalRendering
