import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar () {
    const routes = []
    routes.push(
        {
            key: 'Home',
            to: '/',
            text: 'MI ENTRENADOR PERSONAL',
            private: false
        },
        {
            key: 'blog',
            to: '/blog',
            text: 'Blog',
            private: false
        },
        {
            key: 'profile',
            to: '/profile',
            text: 'Perfil',
            private: false
        },
        {
            key: 'login',
            to: '/login',
            text: 'Entrar',
            private: false
        },
        {
            key: 'logout',
            to: '/logout',
            text: 'Cerrar Sesión',
            private: false
        },
        {
            key: 'register',
            to: '/register',
            text: 'Crear Cuenta',
            private: false
        }
    )

    return (
        <nav className='mt-5 flex justify-between items-center m-0.5'>
            <ul className='flex justify-between items-center mr-6 gap-x-5'>
                {/* { routes.map(route => {
                    return (
                        <li key={ route.to } className='flex justify-between'>
                            <NavLink to={ route.to }>
                                <h1 className='mt-5 ml-5 text-2xl font-bold leading-9 tracking-tight text-gray-900'>MI ENTRENADOR PERSONAL</h1>
                            </NavLink>
                        </li>
                    )
                })} */}
                <li className='flex justify-between'>
                    <NavLink to='/'>
                        <h1 className='ml-6 text-2xl font-bold leading-9 tracking-tight text-gray-900'>MI ENTRENADOR PERSONAL</h1>
                    </NavLink>
                </li>
            </ul>
            <ul className='flex justify-between items-center mr-6 gap-x-5'>
            {/* { routes.map(route => {
                    return (
                        <li key={ route.to } className='flex justify-between'>
                            <NavLink to={ route.to }>
                                <h1 className='mt-5 ml-5 text-2xl font-bold leading-9 tracking-tight text-gray-900'>{ route.text}</h1>
                            </NavLink>
                        </li>
                    )
                })} */}
                {/* <li className='m-0.5'>
                    <NavLink
                        to='/blog'
                        >
                        <p className=' items-center text-sm font-bold text-gray-900'>Blog</p>
                    </NavLink>
                </li> */}
                <li className='flex w-full justify-center rounded-md bg-focus px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-hoverFocus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                    <NavLink
                    to='/register'
                    >
                        <p className='text-sm font-medium leading-6 text-white'>Soy Profesional de la Salud</p>
                    </NavLink>
                </li>
                <li className='m-0.5'>
                    <NavLink
                        to='/login'
                        >
                        <p className=' items-center text-sm font-bold text-gray-900'>Entrar</p>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar