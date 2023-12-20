import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import { RxAvatar  } from "react-icons/rx";
import { useAuth } from '../../Auth'
import { supabase } from '../../supabase/supabaseClient'

function RegisterForm() {
    const [ trainersData, setTrainersData ] = useState({})
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    const { session } = useAuth() 
    // const navigate = useNavigate()

    // if (session) {
    //     return navigate('/my-profile')
    // }

// push data to table trainers
    const onSubmit = handleSubmit( async data => {  
        const dataTrainer = {
            avatar: data.avatar,
            benefits: data.benefits,
            biography: data.biography,
            education: data.education,
            email: data.email,
            face_to_face_classes: data.faceToFaceClasses,
            facebook_form: data.facebookForm,
            first_name: data.firstName,
            free_class: data.freeClass,
            genre: data.genre,
            instagram_form: data.instagramForm,
            last_name: data.lastName,
            location: data.location,
            max_price: data.maxPrice,
            min_price: data.minPrice,
            online_classes: data.onlineClasses,
            rol: data.rol,
            schedule: data.schedule,
            tel: data.tel,
            tools: data.tools,
            twitter_form: data.twitterForm,
        }  
        const { error } = await supabase
        .from('trainers')
        .update(dataTrainer)
        .eq('id_profile', session.user.id)
    })

    useEffect(() => {
        async function fetchTrainersData () {  
            if (session) {
                const { data, error } = await supabase
                .from('trainers')
                .select('*')
                .eq('id_profile', session.user.id)
                if (error) {
                    throw error
                } 
                if (data) {
                    setTrainersData(data[0])
                    setValue('avatar', data[0].avatar)
                    setValue('benefits', data[0].benefits)
                    setValue('biography', data[0].biography) 
                    setValue('education', data[0].education) 
                    setValue('email', data[0].email) 
                    setValue('faceToFaceClasses', data[0].face_to_face_classes) 
                    setValue('facebookForm', data[0].facebook_form) 
                    setValue('firstName', data[0].first_name)
                    setValue('freeClass', data[0].free_class) 
                    setValue('genre', data[0].genre) 
                    setValue('instagramForm', data[0].instagram_form) 
                    setValue('lastName', data[0].last_name) 
                    setValue('location', data[0].location) 
                    setValue('maxPrice', data[0].max_price) 
                    setValue('minPrice', data[0].min_price) 
                    setValue('onlineClasses', data[0].online_classes) 
                    setValue('rol', data[0].rol) 
                    setValue('schedule', data[0].schedule) 
                    setValue('tel', data[0].tel) 
                    setValue('tools', data[0].tools) 
                    setValue('twitterForm', data[0].twitter_form) 
                }
            }   
        }        
        fetchTrainersData ()
    }, [session])

    return (
        <>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Llena el formulario y anunciate</h2>
        </div>

        <form onSubmit={ onSubmit }>
            <div className="mx-auto space-y-12 max-w-2xl px-6">
{/* avatar */}

                <div className="border-b border-gray-900/10 pb-12">
                    <h3 className="mb-6 text-2xl font-semibold leading-7 text-gray-900">General:</h3>

                    <div className="mt-6 flex flex-col items-start justify-center gap-x-3">
                        <label htmlFor="avatar" className="block text-sm font-medium leading-6 text-gray-900">URL imagen de perfil:</label>

                        <input
                            id="avatar"
                            name="avatar"
                            type="url"
                            placeholder='https://www...'
                            { ...register('avatar') }
                            className="mt-2 block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 sm:w-1/2"
                        />
                    </div>
{/* // Rol */}
                    <div className="mt-6 flex flex-col items-start justify-center gap-x-3 ">
                        <label htmlFor="rol" className="block text-sm font-medium leading-6 text-gray-900">Rol:</label>
                        
                        <div className="mt-2 w-full">
                            <select
                                id='rol'
                                name='rol'
                                autoComplete='rol-name'
                                { ...register('rol') }
                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6 cursor-pointer'
                            >
                                <option>Seleccionar</option>
                                <option>Entrenador</option>
                                <option>Fisioterapeuta</option>
                                <option>Nutricionista</option>                  
                            </select>
                        </div>
                    </div>

{/* // firtsName & lastName */}
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
{/* firstName */}
                        <div className="sm:col-span-3">
                            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">Nombre(s):</label>

                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    autoComplete="given-name"
                                    { ...register('firstName', {
                                        required: {
                                            value: true,
                                            message: 'Nombre es requerido'
                                        }
                                    }) }
                                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                />

                                { errors.firstName && <span className="block text-red-600 text-xs">{ errors.firstName.message }</span> }
                            </div>
                        </div>

{/* // lastName */}
                        <div className="sm:col-span-3">
                            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">Apellido(s):</label>

                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    autoComplete="family-name"
                                    { ...register ('lastName', {
                                        required: {
                                            value: true,
                                            message: 'Apellido es requerido'
                                        }
                                    }) }
                                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                />

                                { errors.lastName && <span className="block text-red-600 text-xs">{ errors.lastName.message }</span> }

                            </div>
                        </div>
                    </div>

{/* // genre */}
                    <div className="mt-6 flex flex-col items-start justify-center gap-x-3 ">
                        <label htmlFor="genre" className="block text-sm font-medium leading-6 text-gray-900">Genero:</label>
                        
                        <div className="mt-2 w-full">
                            <select
                                id='genre'
                                name='genre'
                                autoComplete='genre-name'
                                { ...register('genre') }
                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6 cursor-pointer'
                            >
                                <option>Seleccionar</option>
                                <option>Masculino</option>
                                <option>Femenino</option>
                            </select>
                        </div>
                    </div>

{/* // benefits */}
                    <div className="mt-6 col-span-full">
                        <label htmlFor="benefits" className="block text-sm font-medium leading-6 text-gray-900">Beneficios: (opcional)</label>

                        <p className="mb-3 text-sm leading-6 text-gray-600">Cuéntale a tu usuario en max. 120 caracteres, cómo lo puedes ayudar.</p>
                        
                        <div className="nt-2">
                            <textarea
                                name="benefits"
                                id="benefits"
                                rows={ 3 }
                                maxLength={ 120 }
                                { ...register('benefits') }
                                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

{/* // biography */}
                    <div className=" mt-6 col-span-full">
                        <label htmlFor="biography" className="block text-sm font-medium leading-6 text-gray-900">Acerca de mi: (opcional)</label>

                        <p className="mb-3 text-sm leading-6 text-gray-600">Cuéntale a tu usuario por qué eres su mejor opción.</p>
                        
                        <div className="nt-2">
                            <textarea
                                name="biography"
                                id="biography"
                                rows={ 10 }
                                { ...register('biography') }
                                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

{/* // education */}
                    <div className=" mt-6 col-span-full">
                        <label htmlFor="education" className="block text-sm font-medium leading-6 text-gray-900">Educación: (opcional)</label>

                        <p className="mb-3 text-sm leading-6 text-gray-600">Escribe los título y/o certificados que tienes.</p>
                                    
                        <div className="mt-2">
                            <textarea
                                name="education"
                                id="education"
                                rows={ 10 }
                                { ...register('education') }
                                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                </div>

                <div className="border-b border-gray-900/10 pb-12">
                    <h3 className="mb-6 text-2xl font-semibold leading-7 text-gray-900">Información de contacto:</h3>
{/* // email */}

                    <div className="mt-6 sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">   </label>
                        
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder='example@example.com'
                                autoComplete="email"
                                defaultValue={trainersData?.email}
                                { ...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Correo Electrónico requerido'
                                    }
                                }) }
                                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            />

                            {errors.email && <span className="block text-red-600 text-xs">{ errors.email.message }</span>}
                        </div>
                    </div>

{/* // tel */}
                    <div className="mt-6 sm:col-span-4">
                        <label htmlFor="tel" className="block text-sm font-medium leading-6 text-gray-900">WhatsApp: (Opcional)</label>

                        <p className="mb-3 text-sm leading-6 text-gray-600">Añade la extensión dentro del número. Ej: +57310...</p>
                        
                        <div className="mt-2">
                            <input
                                id="tel"
                                name="tel"
                                type="tel"
                                maxLength={ 13 }
                                placeholder='+57...'
                                { ...register('tel') }
                                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="mt-6 sm:col-span-4">
                        <p className="block text-sm font-medium leading-6 text-gray-900">Redes Sociales: (Opcional)</p>
                        
                        <div className="w-1/2">
{/* instagramForm */}
                            <div className="mt-2 flex justify-between">
                                <label htmlFor="social-media-instagram" className="mb-3 text-sm leading-6 text-gray-600">Instagram:</label>
                                
                                <input
                                    id="instagramForm"
                                    name="instagramForm"
                                    type="url"
                                    placeholder="https://www..."
                                    { ...register('instagramForm') }
                                    className="block rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                />
                            </div>
                            
{/* facebookForm */}
                            <div className="mt-2 flex justify-between">
                                <label htmlFor="social-media-facebook" className="mb-3 text-sm leading-6 text-gray-600">Facebook:</label>

                                <input
                                    id="facebookForm"
                                    name="facebookForm"
                                    type="url"
                                    placeholder="https://www..."
                                    { ...register('facebookForm') }
                                    className="block rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                />
                            </div>
                            
{/* twitterForm */}
                            <div className="mt-2 flex justify-between">
                                <label htmlFor="social-media-x" className="mb-3 text-sm leading-6 text-gray-600">Twitter:</label>

                                <input
                                    id="twitterForm"
                                    name="twitterForm"
                                    type="url"
                                    placeholder="https://www..."
                                    { ...register('twitterForm') }
                                    className="block rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                    <h3 className="mb-6 text-2xl font-semibold leading-7 text-gray-900">Servicios:</h3>

                    <div className="w-1/2">
{/* faceToFaceClasses */}
                        <div className="mt-2 flex justify-between items-end">
                            <label htmlFor="face-to-face-classes" className='text-sm leading-6 text-gray-600'>Clases Presenciales:</label>

                            <input
                                id="faceToFaceClasses"
                                name="faceToFaceClasses"
                                type="checkbox"
                                { ...register('faceToFaceClasses') }
                                className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                        </div>

{/* onlineClasses */}
                        <div className="mt-2 flex justify-between items-end">
                            <label htmlFor="online-classes" className='text-sm leading-6 text-gray-600'>Clases Online:</label>

                            <input
                                id="onlineClasses"
                                name="onlineClasses"
                                type="checkbox"
                                { ...register('onlineClasses') }
                                className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                        </div>

{/* tools */}
                        <div className="mt-2 flex justify-between items-end">
                            <label htmlFor="tools" className='text-sm leading-6 text-gray-600'>Material de trabajo:</label>

                            <input
                                id="tools"
                                name="tools"
                                type="checkbox"
                                { ...register('tools') }
                                className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                        </div>

{/* freeClass */}
                        <div className="mt-2 flex justify-between items-end
                        ">
                            <label htmlFor="free-class" className='text-sm leading-6 text-gray-600'>Primera clase gratuita:</label>
    
                            <input
                                id="freeClass"
                                name="freeClass"
                                type="checkbox"
                                { ...register('freeClass') }
                                className="h-4 w-4 cursor-pointer rounded border-gray-300"
                            />
                        </div>
                    </div>

{/* schedule */}
                    <div className=" mt-6 col-span-full">
                        <label htmlFor="schedule" className="block text-sm font-medium leading-6 text-gray-900">Agenda: (opcional)</label>

                        <p className="mb-3 text-sm leading-6 text-gray-600">Escribe las horas laborales dentro de la semana.</p>
                        
                        <div className="nt-2">
                            <textarea
                                name="schedule"
                                id="schedule"
                                rows={ 10 }
                                defaultValue={ '' }
                                { ...register('schedule') }
                                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

{/* location */}
                    <div className=" mt-6 col-span-full">
                        <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">Ubicación:</label>
                        
                        <div className="nt-2">
                            <textarea
                                name="location"
                                id="location"
                                placeholder="Ciudad, País"
                                rows={ 1 }
                                { ...register('location', {
                                    required: {
                                        value: true,
                                        message: 'Ubicación requerida'
                                    }
                                }) }
                                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            />

                            { errors.location && <span className="block text-red-600 text-xs">{ errors.location.message }</span>}
                        </div>
                    </div>
                </div>

{/* minPrice & macPrice */}
                <div  className=" pb-12">
                    <h3 className="mb-6 text-2xl font-semibold leading-7 text-gray-900">Precio:</h3>

                    <div>
                        <p className="block text-sm font-medium leading-6 text-gray-900">Rango de precio</p>

                        <p className="mb-3 text-sm leading-6 text-gray-600">Valor en pesos colombianos.</p>

                        <div className="block sm:flex gap-6">
                            <label htmlFor="minPrice" className="block text-sm font-medium leading-6 text-gray-900">Mínimo:</label>

{/* minPrice */}
                            <div className="mt-2">
                                <input
                                    id="minPrice"
                                    name="minPrice"
                                    rows={ 1 }
                                    type="number"
                                    placeholder='50.000'
                                    { ...register('minPrice', {
                                        required: {
                                            value: true,
                                            message: 'Valor mínimo requerido'
                                        }
                                    }) }
                                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                />

                                { errors.minPrice && <span className="block text-red-600 text-xs">{ errors.minPrice.message }</span>}
                            </div>

                            <label htmlFor="maxPrice" className="block text-sm font-medium leading-6 text-gray-900">Máximo:</label>
                            
{/* maxPrice */}
                            <div className="mt-2">
                                <input
                                    id="maxPrice"
                                    name="maxPrice"
                                    rows={ 1 }
                                    type="number"
                                    placeholder='150.000'
                                    { ...register('maxPrice', {
                                        required:{
                                            value: true,
                                            message: 'Valor máximo requerido'
                                        }
                                    }) }
                                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                />

                                { errors.maxPrice && <span className="block text-red-600 text-xs">{ errors.maxPrice.message }</span>}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-buttonLink px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-hoverButtonLink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Iniciar Sesión</button>
                </div> */}
                <div className="mt-6 pb-12 flex items-center justify-end gap-x-6">
                    <NavLink to="/" className="text-sm font-semibold leading-6 text-gray-900">Llenar más tarde</NavLink>

                    <button type="submit" className="w-1/3 leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Terminar</button>
                </div>
            </div>
        </form>
        </>
  )
}

export { RegisterForm }