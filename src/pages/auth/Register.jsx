import { NavLink } from "react-router-dom";
import { supabase } from "../../supabaseClient"
import Navbar from "../../components/organims/navbar";

function Register() {
    const handleSubmit = async (e) => {
        e.preventDefault()
        // const email = e.target.email.value
        // const password = e.target.password.value

        const { data, error } = await supabase.auth.signUp({
            email: e.target.email.value,
            password: e.target.password.value
          })
        
        console.log(error.message, data);
    }

    return (
        <>
            <Navbar /> 

            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Crea tu cuenta</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={ handleSubmit }>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Correo Electrónico</label>
                            
                            <div className="mt-2">
                                <input 
                                    id='email'
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 shadow-sm ring-1 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
                            </div>

                            <div className="mt-2">
                                <input
                                    id='password'
                                    type="password"
                                    name="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 shadow-sm ring-1 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-buttonLink px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-hoverButtonLink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Registrarme</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-black">
                        ¿Ya tienes una cuenta? <NavLink to='/login' className='font-semibold leading-6 text-buttonLink hover:text-hoverButtonLink underline'>Iniciar Sesión</NavLink>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Register