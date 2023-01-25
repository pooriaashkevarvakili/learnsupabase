import React, { useState } from 'react'
import supabase from '../config/supabaseClient'
import { useNavigate } from 'react-router-dom'
const Create = () => {
    const Navigate = useNavigate()
    const [title, setTitle] = useState()
    const [method, setMethod] = useState()
    const [rating, setRating] = useState()
    const [formError, setFormError] = useState()
    const handleSumbit = async (e) => {
        e.preventDefault()
        if (!title || !method || !rating) {
            setFormError('please set field on the Error')
            return
        }
        console.log(title, method, rating, formError)
        const { data, error } = await supabase.from('pooria').insert([{ title, method, rating, }])
        if (error) {
            console.log(error)
            setFormError('in the error')
        }
        if (data) {
            console.log(data)
            setFormError(null)
            Navigate('/')
        }
    }
    return (
        <div>
            <form onSubmit={handleSumbit} className='flex flex-col items-center justify-center'>
                <label>title</label>
                <input onChange={(e) => setTitle(e.target.value)} value={title} className='border border-black' />
                <label>method</label>
                <textarea onChange={(e) => setMethod(e.target.value)} value={method} className='border border-black' />
                <label>rating</label>
                <input onChange={(e) => setRating(e.target.value)} value={rating} className='border border-black' type="number" />
                <button className='mt-5 bg-green-400 text-white p-3 rounded-lg '>form on the click</button>
                {
                    formError && <p className='text-red-400'>{formError}</p>
                }
            </form>
        </div>
    )
}

export default Create
