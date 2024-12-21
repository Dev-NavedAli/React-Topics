import React from 'react'

const App = () => {
  const numbers = [1,2,3,4,5,6,7,8,9]
  return (
    <div>
      <ul>
      {numbers.map((item,index)=>(
        <li key={index}>{item}</li>
      ))}
      </ul>
      
    </div>
  )
}

export default App
