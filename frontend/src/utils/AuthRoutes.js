import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AuthRoutes = () => {
    const { User } = useSelector((state) => state.auth)
     const { Error } = useSelector((state) => state.dashboard)
    return (
        User && !Error ? <Outlet/> : <Navigate to="/"/>
    )
}

export default AuthRoutes