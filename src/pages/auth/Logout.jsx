import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { supabase } from '../../supabaseClient'

function Logout() {
    const navigate = useNavigate()

    const onLogout = async () => {
        try {
            await supabase.auth.signOut()
            navigate('/')
        } catch (error) {
            console.log('Huvo un error al cerrar sesión: ', error );
        }
    }

    return (
        <li className='m-0.5'>
            <NavLink
                to='/'
                onClick={ onLogout }
                >
                <p className=' items-center text-sm font-bold text-gray-900'>Cerrar Sesión</p>
            </NavLink>
        </li>
    )
}

export { Logout }