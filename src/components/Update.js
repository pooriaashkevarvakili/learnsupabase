import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import supabase from '../config/supabaseClient'
const Update = () => {
    const handleSumbit = async (e) => {
        e.preventDefault()
        if (!title || !method || !rating) {
            setFormError('please set field on the Error')
            return
        }
        const { data, error } = await supabase.from('pooria').update({ title, method, rating }).eq('id', id)
        if (data) {
            console.log(data)
            setFormError(null)
            Navigate('/')
        }
        if (error) {
            console.log(error)
            setFormError('please set field on the Error')
        }
    }
    const { id } = useParams()
    const Navigate = useNavigate()
    const [formError, setFormError] = useState()
    const [title, setTitle] = useState()
    const [method, setMethod] = useState()
    const [rating, setRating] = useState()
    useEffect(() => {
        const fetchPooria = async () => {
            const { data, error } = await supabase.from('pooria').select().eq('id', id).single()
            if (error) {
                Navigate('/', { replace: true })
            }
            if (data) {
                setTitle(data.title)
                setMethod(data.method)
                setRating(data.rating)
                console.log(data)
            }
        }
        fetchPooria()
    }, [id, Navigate])
    return (
        <div>
            <form onSubmit={handleSumbit} className='flex flex-col items-center justify-center'>
                <label>title</label>
                <input onChange={(e) => setTitle(e.target.value)} value={title} className='border border-black' />
                <label>method</label>
                <textarea onChange={(e) => setMethod(e.target.value)} value={method} className='border border-black' />
                <label>rating</label>
                <input onChange={(e) => setRating(e.target.value)} value={rating} className='border border-black' type="number" />
                <button className='mt-5 bg-green-400 text-white p-3 rounded-lg '>form update on the click</button>
                {
                    formError && <p className='text-red-400'>{formError}</p>
                }
            </form>
        </div>
    )
}

export default Update
