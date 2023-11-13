import React from 'react'
import Navbar from '../../components/organims/navbar'
import { useAuth } from '../../Auth'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const navigate = useNavigate()
    const { session } = useAuth()

    if (!session) {
        navigate('/')
    }

    return (
        <>
            <Navbar />
            
            <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue ">PROFILE</h1>
        </>
    )
}

export { Profile }