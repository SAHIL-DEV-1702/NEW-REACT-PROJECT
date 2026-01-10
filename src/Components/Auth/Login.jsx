import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {
        console.log("submitted", email, password);
        e.preventDefault()

        setEmail('');
        setPassword('')
    }

    const passwordHndl = (e) => {
        setPassword(e.target.value)
    }

    const emailHndl = (e) => {
        setEmail(e.target.value)
    }



    return (
        <>
            <div className='h-screen w-screen flex items-center justify-center'>

                <div className='border-2 border-emerald-600 p-20 '>

                    <form action="" onSubmit={(e) => {
                        submitHandler(e)
                    }} className=' flex flex-col items-center justify-center'>

                        <input required className='  py-3 px-5 bg-transparent text-xl border-2 border-emerald-600 outline-none rounded-3xl placeholder-zinc-700 text-gray-400' type="email" onChange={emailHndl} value={email} placeholder='Enter email' />

                        <input required type="password" onChange={passwordHndl} value={password} className='py-3 px-5 bg-transparent text-xl border-2 border-emerald-600 outline-none rounded-3xl placeholder-zinc-700 mt-4 text-gray-400' placeholder='Password' />

                        <button className='active:scale-95 w-full mt-5 py-3 px-5 text-xl border-2 bg-emerald-600 outline-none rounded-3xl placeholder-zinc-700 '>LogIn</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login