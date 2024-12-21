import React from 'react'
import { useState } from 'react'

const BgChanger = () => {
    const [color, setColor] = useState("olive")


    return (
        <div>
            <div className='w-80 h-80' style={{backgroundColor:color}} >
                <button onClick={()=>setColor("yellow")} className='bg-yellow-500 text-white rounded-lg'>Yellow</button>
                <button onClick={()=>setColor("red")} className='bg-red-500 text-white rounded-lg'>Red</button>
                <button onClick={()=>setColor("green")} className='bg-green-500 text-white rounded-lg'>Green</button>
                <button onClick={()=>setColor("lime")} className='bg-lime-500 text-white rounded-lg'>Lime</button>
                <button onClick={()=>setColor("blue")} className='bg-blue-500 text-white rounded-lg'>blue</button>
                <button onClick={()=>setColor("pink")} className='bg-pink-500 text-white rounded-lg'>pink</button>
                <button onClick={()=>setColor("violet")} className='bg-violet-500 text-white rounded-lg'>Violet</button>
                <button onClick={()=>setColor("Magenta")} className=' bg-red-800 text-white rounded-lg'>Magenta</button>
            </div>
        </div>
    )
}

export default BgChanger
