import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import {toast} from 'react-toastify'

const PasswordGenrator = () => {
    const [length, setLength] = useState(8)
    const [numAllowed, setNumAllowed] = useState(false)
    const [characterAllowed, setCharacterAllowed] = useState(false)

    const [password, setPassword] = useState("")

    const PasswordGenrator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numAllowed) str += "01234567899"
        if (characterAllowed) str += "!@#$%^&*()_+=\|[]"

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }

        setPassword(pass)

    }, [length, numAllowed, characterAllowed, setPassword])

    const passwordRef = useRef(null)

    const copyToClipBoard = useCallback(() => {
        window.navigator.clipboard.writeText(password)
        passwordRef.current?.select()
        toast.success("Copied!")
    }, [password])

    useEffect(() => {
        PasswordGenrator()
    }, [length, numAllowed, characterAllowed, characterAllowed])


    return (
        <div className='w-full h-40 max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700' >
            <h1 className='text-4xl'>Password Genrator</h1>
            <div className='flex'>
                <input type="text"
                    value={password}
                    className='outline-none w-full py-1 px-3 '
                    placeholder='password'
                    readOnly
                    ref={passwordRef}
                />
                <button onClick={copyToClipBoard}
                    className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
            </div>
            <div className='flex'>
                <input type="range" min={6} max={100} value={length}
                    className='cursor-pointer'
                    onChange={(e) => { setLength(e.target.value) }} />
                <label>length : {length}</label>
                <div>
                    <input type="checkbox" className='ml-2'
                        defaultChecked={numAllowed}
                        id='numberInput'
                        onChange={(e) => setNumAllowed((prev) => !prev)} />
                    <label htmlFor='numberInput' >Numbers</label>
                </div>
                <div>
                    <input type="checkbox" className='ml-2'
                        defaultChecked={characterAllowed}
                        id='characterInput'
                        onChange={() => {
                            setCharacterAllowed((prev) => !prev)
                        }}
                    />
                    <label htmlFor="characterInput">Character</label>
                </div>
            </div>
        </div>
    )
}

export default PasswordGenrator
