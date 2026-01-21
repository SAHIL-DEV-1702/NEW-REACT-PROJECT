import React, { createContext, useEffect, useState, } from 'react'
import { getLcocal, setLocals } from '../../utils/LocalStorage';



export const AuthContext = createContext();

const AuthProvider = ({ children }) => {


    const [userData, setUserData] = useState([]);

    useEffect(() => {
        setLocals()
        const { Admin, Employees } = getLcocal();
        setUserData({ Employees, Admin })
    }, [])



    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider