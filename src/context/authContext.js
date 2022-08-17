import {createContext, React, useState} from 'react'

export const AuthProvider = createContext();

const AuthContext = ({children}) => {
    const [user , setUser] = useState(()=>{
        const userObj = window.localStorage.getItem("userObj");
        if( userObj !== null) {
            return JSON.parse(userObj);
        }
        else {
            return {};
        }
    });

    return (
        <AuthProvider.Provider value={{user,setUser}}>{children}</AuthProvider.Provider>
    )
}

export default AuthContext