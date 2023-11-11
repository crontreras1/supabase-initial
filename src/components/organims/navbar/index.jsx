import { UserCircleIcon } from '@heroicons/react/24/solid'
import { NavLink, Navigate } from 'react-router-dom'
import { Logout } from '../../../pages/Auth/Logout'
import { useAuth } from '../../../Auth'
// import { useState, useEffect } from 'react'
// import { supabase } from '../../../supabaseClient';

function Navbar () {
    const { session } = useAuth()
    // const [session, setSession] = useState(null);

    // useEffect(() => {
    //   supabase.auth.getSession().then(({ data: { session } }) => {
    //     setSession(session);
    //   });
  
    //   supabase.auth.onAuthStateChange((_event, session) => {
    //     setSession(session);
    //   });
    // }, []);

    return (
        <nav className='mt-5 flex justify-between items-center m-0.5'>
            <ul className='flex justify-between items-center mr-6 gap-x-5'>
                <li className='flex justify-between'>
                    <NavLink to='/'>
                        <h1 className='ml-6 text-2xl font-bold leading-9 tracking-tight text-gray-900'>🎖️ FITNESS MODE</h1>
                    </NavLink>
                </li>
            </ul>

            { !session ?  
            <ul className='flex justify-between items-center mr-6 gap-x-5'>
                <li className='flex w-full justify-center rounded-md bg-focus px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-hoverFocus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                    <NavLink to='/register'>
                        <p className='text-sm font-medium leading-6 text-white'>Soy Profesional de la Salud</p>
                    </NavLink>
                </li>

                <li className='m-0.5'>
                    <NavLink to='/login'>
                        <p className=' items-center text-sm font-bold text-gray-900'>Iniciar Sesión</p>
                    </NavLink>
                </li> 
            </ul>
            : 
            <ul className='flex justify-between items-center mr-6 gap-x-5'>
                <Logout /> 

                <li className='m-0.5'>
                    <NavLink to='/profile'>
                        <UserCircleIcon className="h-10 w-10 text-gray-300" aria-hidden="true" />
                    </NavLink>
                </li> 
            </ul>
            }                
        </nav>
    )
}

export default Navbar