import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PublicRoutes = () => {
    const { User } = useSelector((state) => state.auth)
    const { Error } = useSelector((state) => state.dashboard)
    return (
        User && !Error ? <Navigate to="/Dashboard"/> : <Outlet/>
    )
}

export default PublicRoutes