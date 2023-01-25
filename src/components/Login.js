import React from 'react'

const Login = () => {
    return (
        <div className='flex  items-center justify-center w-full h-screen'>
            <form className='flex flex-col'>
                <label>email</label>
                <input type="text" className="border p-2 rounded-xl border-black" />
                <label>password</label>
                <input className="border  p-2 rounded-xl border-black" />
                <button className='btn mt-4 btn-primary'>login</button>
            </form>
        </div>
    )
}

export default Login