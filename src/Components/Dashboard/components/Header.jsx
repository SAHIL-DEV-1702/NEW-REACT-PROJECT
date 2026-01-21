// import React, { useState } from 'react'

import { useEffect } from "react";


const Header = () => {

    // const [user, setUser] = useState('')

    // if (!data) {
    //     setUser('Admin')
    // }
    // else {
    //     setUser(data.employeeName)
    // }

    const logOut = () => {
        localStorage.setItem('loggedInUser', '');
        window.location.reload();
    }

    useEffect(() => {
        logOut
    }, [logOut])

    return (
        <div className=' flex items-center justify-between p-10 '>

            <h1 className='text-2xl text-white' >hello <br /> <span className='text-3xl font-semibold'> 👋</span> </h1>
            <button className='bg-red-500 text-white px-5 py-2 rounded-md active:scale-95' onClick={logOut}>LogOut</button>
        </div>
    )
}

export default Header