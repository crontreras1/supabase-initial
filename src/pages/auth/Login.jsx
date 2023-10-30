import { ArrowLeftIcon } from '@heroicons/react/24/solid' 
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { supabase } from '../../supabaseClient'

function Login() {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = async formData => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password
            })
            console.log(data);
            if (error) {
                throw error
            }
            navigate('/profile')
        } catch (error) {
            console.log(error.message);
            alert('Clave y/o contraseña invalida(s)');
        }
    }

    return (
        <>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="flex gap-6 items-center sm:mx-auto sm:w-full sm:max-w-sm">
                <NavLink to='/'>
                    <ArrowLeftIcon class="h-6 w-6 text-gray-500 cursor-pointer" />
                </NavLink>

                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Iniciar Sesión</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Correo Electrónico</label>
                        
                        <div className="mt-2">
                            <input 
                                id='email'
                                name="email"
                                type="email"
                                autoComplete="email"
                                { ...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Correo Electrónico requerido'
                                    }
                                }) }
                                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 sm:text-sm sm:leading-6"
                            />

                            { errors.email && <span className="block text-red-600 text-xs">{errors.email.message}</span> }
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
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Contraseña es necesario',
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'La contraseña debe tener el menos 6 caracteres'
                                    }
                                })}
                                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 sm:text-sm sm:leading-6"
                            />

                            { errors.password && <span className="block text-red-600 text-xs">{errors.password.message}</span> }
                        </div>

                        <div className="text-left text-sm mt-1">
                            <a className='text-sm cursor-pointer text-black hover:text-hoverButtonLink underline'>¿Olvidaste tu contraseña?</a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-buttonLink px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-hoverButtonLink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Iniciar Sesión</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-black">
                    ¿Aún no tienes cuenta? <NavLink to='/register' className='font-semibold leading-6 text-buttonLink hover:text-hoverButtonLink underline'>Crear Cuenta</NavLink>
                </p>
            </div>
        </div>
        </>
    )
}

export { Login }