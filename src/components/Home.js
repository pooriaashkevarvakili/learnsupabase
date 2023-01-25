import React, { useState, useEffect } from 'react'
import supabase from '../config/supabaseClient'
import PooriaCard from './PooriaCard'
const Home = () => {
    console.log(supabase)
    const [fetchError, setFetchError] = useState(null)
    const [pooria, setPooria] = useState(null)
    const [orderBy, setOrderBy] = useState('created_at')
    const handleDelete = (id) => {
        setPooria(prevPooria => {
            return prevPooria.filter(sm => sm.id !== id)
        })
    }
    useEffect(() => {
        const fetchPooria = async () => {
            const { data, error } = await supabase.from('pooria').select().order(orderBy, { ascending: false })
            if (error) {
                setFetchError('could not message')
                setPooria(null)
                console.log(error)
            }
            if (data) {
                setPooria(data)
                setFetchError(null)
                console.log(data)
            }

        }
        fetchPooria()

    }, [orderBy])
    return (
        <div>
            {
                fetchError && (
                    <p>{fetchError}</p>
                )
            }
            {
                pooria && (
                    <>
                        <div className='space-x-2'>
                            <p>order by</p>
                            <button className='btn btn-primary' onClick={() => setOrderBy('create_at')}>time</button>
                            <button className='btn btn-primary' onClick={() => setOrderBy('title')}>title</button>
                            <button className='btn btn-primary' onClick={() => setOrderBy('rating')}>rathing</button>
                            {orderBy}
                        </div>
                        <div className='grid mt-4 2xl:grid-cols-3 xl:grid-cols-3  mt-4 place-items-center grid-cols-1 gap-6 '>
                            {
                                pooria.map(poori => (
                                    <PooriaCard key={poori.id} poori={poori} onDelete={handleDelete} />
                                ))
                            }
                        </div>
                    </>

                )
            }
        </div>
    )
}

export default Home
