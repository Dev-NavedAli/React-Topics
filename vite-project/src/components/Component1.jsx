import React , {useContext} from 'react'
import { counterContext } from '../context/context'

function Component1() {
    const value  = useContext(counterContext)
  return (
    <div>
      I am Component1   : {value.count}
    </div>
  )
}

export default Component1