import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
  let {id} = useParams()

  

  return (
    <div className="py-16 bg-white">
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
            <h1 className='bg-gray-600 text-white text-3xl p-4'>User id : {id}</h1>
                <img
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="image"
                />
            </div>
            <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                    React development is carried out by passionate developers
                </h2>
                <p className="mt-6 text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                    accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                    aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                </p>
                <p className="mt-4 text-gray-600">
                    Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                    Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default About