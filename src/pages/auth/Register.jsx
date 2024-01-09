import React, { useEffect, useRef } from "react"
import { FaArrowLeft } from "react-icons/fa"
import { useForm } from "react-hook-form"
import { NavLink, useNavigate } from "react-router-dom"
import { supabase } from "../../supabase/supabaseClient"
import { useAuth } from '../../Auth'
import emailjs from "@emailjs/browser"

function Register() {
    const { register, handleSubmit, formState: { errors }, control} = useForm()
    const { session } = useAuth()
    const navigate = useNavigate()
    const form = useRef(null)

    useEffect(() => {
        form.current = control;
      }, [control]);

    
    const onSubmit = async (formData, event) => {
        // try {
            const { data, error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password
            })
            if (error) {
                throw error
            }
            if (data) {
                // Insert data to tables
                await supabase
                .from('profiles')
                .insert({ id: data.user.id, id_role: '79b48195-372d-41fd-b28a-33cc03586774', email: data.user.email })
                await supabase
                .from('trainers')
                .insert({ id_profile: data.user.id, email: data.user.email })
                navigate('/my-profile')
            }

            await new Promise(resolve => setTimeout(resolve, 0));
            console.log(form.current)
            
            await emailjs.sendForm('service_y0jmace', 'template_b0bq6bl', form.current, 'hiOsap8kycZVCS90_')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        // } catch (error) {
            //     console.error('Error al registrar y enviar correo.', error) 
            // }
            // console.log(form.current)
            
        event.preventDefault();
    }
            
            
    if (session) {
        return navigate('/my-profile')
    }
                            
    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="flex items-center gap-6 sm:mx-auto sm:w-full sm:max-w-sm">
                    <NavLink to='/'>
                        <FaArrowLeft class="h-6 w-6 text-gray-500 cursor-pointer" />
                    </NavLink>

                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Crea tu cuenta</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form ref={ form } onSubmit={ handleSubmit(onSubmit) } className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Correo Electrónico</label>
                            
                            <div className="mt-2">
                                <input 
                                type="email"
                                name="user_email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email es necesario',
                                    }
                                    
                                })}
                                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 sm:text-sm sm:leading-6"
                                />

                                { errors.email && <span className="block text-red-600 text-xs">{ errors.email.message }</span>}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
                            </div>

                            <div className="mt-2">
                                <input
                                    type="password"
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
                                    }
                                    )}
                                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 sm:text-sm sm:leading-6"
                                />
                                { errors.password && <span className="block text-red-600 text-xs">{ errors.password.message }</span>}
                            </div>
                        </div>

                        <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-primaryColor px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-hoverButtonLink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Registrarme</button>
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

export { Register }