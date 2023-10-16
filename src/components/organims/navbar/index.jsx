import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar () {
  return (
    <nav
        className='flex justify-between items-center m-0.5'
    >
        <ul className='flex justify-between'>
            <li>
                <NavLink
                    to='/'
                >
                    <h1 className='mt-5 ml-5 text-2xl font-bold leading-9 tracking-tight text-gray-900'>MI ENTRENADOR PERSONAL</h1>
                </NavLink>
            </li>
        </ul>
        <ul className='flex justify-between items-center gap-x-5'>
            <li className='flex w-full justify-center rounded-md bg-focus px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-hoverFocus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                <NavLink
                to=''
                >
                    <p className='text-sm font-medium leading-6 text-white'>Soy Profesional de la Salud</p>
                </NavLink>
            </li>
            <li className='m-0.5'>
                <NavLink
                    to='/login'
                    >
                    <p className='text-sm font-bold text-gray-900'>Iniciar Sesión</p>
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar