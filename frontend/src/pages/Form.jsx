import React, { useState } from 'react'

const Form = () => {
    const [formData,setFormData] = useState({
        fullname:"",
        username:""
    })

    const handleInputChange = (e)=>{
        let fieldName = e.target.name
        let newValue = e.target.value
        setFormData((currData)=>{
            currData[fieldName] = newValue
            return {...currData}
        })
        
    }

    const onSubmitHandler = (e)=>{
e.preventDefault()
console.log(formData);

    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="fullname"></label>
                <input
                    placeholder='full name'
                    onChange={handleInputChange}
                    type="text" value={formData.fullname} name='fullname'
                />
                <input
                    placeholder='username'
                    onChange={handleInputChange}
                    type="text" value={formData.username} name='username'
                />
                <button className='bg-blue-400 text-white'>Submit</button>
            </form>
        </div>
    )
}

export default Form
