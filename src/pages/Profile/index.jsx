import React from 'react'
import Navbar from '../../components/organims/navbar'
import { useAuth } from '../../Auth'
import { Navigate } from 'react-router-dom'

function Profile() {
    const auth = useAuth()

    if (!auth) {
        return <Navigate to='/' />
    }

    return (
        <>
            <Navbar />
            
            <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">PROFILE</h1>
        </>
    )
}

export { Profile }