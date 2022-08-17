import {createContext, React, useState} from 'react'

export const AuthProvider = createContext();

const AuthContext = ({children}) => {
    const [user , setUser] = useState({});

    return (
        <AuthProvider.Provider value={{user,setUser}}>{children}</AuthProvider.Provider>
    )
}

export default AuthContext