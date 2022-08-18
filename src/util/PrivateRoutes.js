import {React , useContext} from 'react'
import { Outlet , Navigate } from 'react-router-dom'
import {AuthProvider} from "../context/authContext";



const PrivateRoutes = () => {
    const {user} = useContext(AuthProvider);  

    return (
        user.username ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes