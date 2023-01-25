import React from 'react'
import { Link } from 'react-router-dom'
import supabase from '../config/supabaseClient'
const PooriaCard = ({ poori, onDelete }) => {
    const handleDelete = async () => {
        const { data, error } = await supabase.from('pooria').delete().eq('id', poori.id)
        if (error) {
            console.log(error)
        }
        if (data) {
            console.log(data)
            onDelete(poori.id)
        }
    }
    return (
        <div >
            <div className="card w-96 h-36 bg-base-100 shadow-xl">
                <div classNa="card-body">
                    <h2 className="card-title flex items-center justify-center">{poori.title}</h2>
                    <p className='flex items-center justify-center'>{poori.method}</p>
                    <div className="card-actions ml-10">
                        <div>{poori.rating}</div>
                    </div>
                    <div className="card-actions ml-10">
                        <Link to={'/' + poori.id} className="btn btn-primary w-12 rounded-xl  mt-2 rounded-lg">
                            <i className='material-icons'>edit</i>

                        </Link>
                        <Link className="btn btn-primary w-12 rounded-xl mt-2  rounded-lg">
                            <i className='material-icons' onClick={handleDelete}>delete</i>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PooriaCard
