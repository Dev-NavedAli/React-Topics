import React from 'react'
import { assets } from '../assets/assets.js'

const Card = ({name,desc}) => {
    
    return (
        <div >
            <div className="w-80 border border-gray-400  h-96 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={assets.cardImage} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
                </div>
            </div>

        </div>
    )
    
}

export default Card
