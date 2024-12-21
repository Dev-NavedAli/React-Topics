import React, { useEffect, useState } from 'react'
import axios from "axios"

const GitHub = () => {

  const [data,setData] = useState(null)
  const getData = async()=>{
    const response = await axios.get('https://api.github.com/users/Dev-NavedAli')
    setData(response.data)
  }

  useEffect(()=>{
    getData()
  },[])

  return  (
    <div>
      {
       data ? (
        <div className=' text-4xl text-red-500 text-center '>
        <h1 >Github Follwers : {data.followers}</h1><br />
        <h1 >Github Name : {data.name}</h1><br />
<img src={data.avatar_url} alt="" />
        </div>
       ) : (<h1>Loading</h1>)
      }
    </div>
  )
}

export default GitHub