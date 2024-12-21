import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    let options = ["fast","versatile","durable"]
  return (
    <div>
      <ChildComponent  tittle='phone' feature={options}  price={100} />
      <ChildComponent tittle='laptop ' feature={options} price={150} />
      <ChildComponent tittle='pen' feature={options} price={180} />
    </div>
  )
}

export default ParentComponent
