import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RxAvatar, RxHamburgerMenu } from "react-icons/rx"; 
import { Logout } from '../../../pages/Auth/Logout'
import { useAuth } from '../../../Auth'
import { supabase } from '../../../supabase/supabaseClient';

function Navbar () {
    const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false) 
    const [ avatarImg, setAvatarImg ] = useState()
    const { session } = useAuth()
 
    const handleMobileMenuToggle = () => {setIsMobileMenuOpen(!isMobileMenuOpen)}

    useEffect(() => {
        async function fetchAvatarData () {
            const { data, error } = await supabase
            .from('trainers')
            .select('avatar')
            .eq(session.user.id) 
            if (error) {
                throw error
            }
            if (data) {
                setAvatarImg(data)
            }
            console.log(data);
        }
        fetchAvatarData()
    }, [])

    return (
        <div className='w-full mt-5 mb-10'>
            <nav className='mx-6 mt-5 flex justify-between items-center'>
                <NavLink to='/'>
                    <p className='text-xl sm:text-2xl font-bold leading-9 tracking-tight text-gray-900'>🎖️ FITNESS MODE</p>
                </NavLink>

                {/* mobile and tablet */}
                <div className='lg:hidden flex items-center relative z-10'>
                    <button onClick={ handleMobileMenuToggle }  className=' w-6 h-6'>
                        { isMobileMenuOpen ? <RxHamburgerMenu /> : <RxHamburgerMenu /> }
                    </button>

                    {
                    isMobileMenuOpen && (!session ?  
                    <ul className='w-64 p-4 flex flex-col items-end gap-4 rounded-md absolute top-8 right-2 bg-white shadow-sm ring-1 ring-inset ring-gray-300'>
                        <li className='w-full rounded-md bg-focus px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-hoverFocus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                            <NavLink to='/register'>
                                <p className='text-sm font-medium leading-6 text-white'>Soy Profesional de la Salud</p>
                            </NavLink>
                        </li>

                        <li className='m-0.5'>
                            <NavLink to='/login'>
                                <p className='text-sm font-bold text-gray-900'>Iniciar Sesión</p>
                            </NavLink>
                        </li> 
                    </ul>
                    : 
                    <ul className='w-64 p-4 flex flex-col items-end gap-4 rounded-md absolute top-8 right-2 bg-white shadow-sm ring-1 ring-inset ring-gray-300'>
                        <li className='m-0.5'>
                            <NavLink to='/my-profile'>
                                { !data.data.avata ? <RxAvatar className="h-10 w-10 text-gray-300" aria-hidden="true" /> : <img src={ data.data.avatar } /> }
                            </NavLink>
                        </li> 

                        <Logout /> 
                    </ul>)
                    }
                </div>

                <div className='hidden lg:flex '>
                    {(!session ? 
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
                                <NavLink to='/my-profile'>
                                    <RxAvatar className="h-10 w-10 text-gray-300" aria-hidden="true" />
                                </NavLink>
                            </li> 
                        </ul>               
                    )}
                </div>
            </nav>
        </div>
    )
}

export { Navbar }