import React, { useEffect, useState } from 'react'

const Api = () => {
    const url = 'https://api.sampleapis.com/jokes/goodJokes'
    const [joke,setJoke] = useState({})

    const joker = async()=>{
        const response = await  fetch(url)
        let jsonresponse = await response.json()
        setJoke(jsonresponse)
        
    }

    useEffect(()=>{
        joker()
    },[])

    console.log(joke[0].setup);
    
  return (
    <div>
      
    </div>
  )
}

export default Api
