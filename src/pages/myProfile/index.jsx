import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Navbar } from '../../components/organims/navbar'
import { RxAvatar } from "react-icons/rx"
import { IoChatboxOutline } from "react-icons/io5"
import { MdDeleteOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { useAuth } from '../../Auth'
import { supabase } from '../../supabase/supabaseClient'

function MyProfile () {
    const [ trainersData, setTrainersData ] = useState({})
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    const { session } = useAuth()
    const navigate = useNavigate()
    
    if (!session) {
        navigate('/')
    }

// push data to table trainers
    const onSubmit = handleSubmit( async data => {  
        const dataTrainer = {
            // avatar: avatar,
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
            <Navbar />

            <div className="mx-auto space-y-12 max-w-3xl px-6">
                <form onSubmit={ onSubmit } className="flex flex-col-reverse md:grid md:grid-cols-3 md:gap-4">
                    <div className='col-span-2 p-4'>
                        <div className="mt-6 col-span-full">
                            <label htmlFor="benefits" className="block text-sm font-medium leading-6 text-gray-900">Beneficios: (opcional)</label>

                            <p className="mb-3 text-sm leading-6 text-gray-600">Cuéntale a tu usuario en max. 120 caracteres, cómo lo puedes ayudar.</p>
                            
                            {/* // benefits */}
                            <div className="nt-2">
                                <textarea
                                    name="benefits"
                                    id="benefits"
                                    rows={ 3 }
                                    maxLength={ 120 }
                                    // defaultValue={ trainersData?.benefits}
                                    { ...register('benefits') }
                                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                />
                            </div>

                            <div className="w-1/2">
                                {/* faceToFaceClasses */}
                                <div className="mt-2 flex justify-between items-end">
                                    <label htmlFor="face-to-face-classes" className='text-sm leading-6 text-gray-600'>Clases Presenciales:</label>

                                    <input
                                        id="faceToFaceClasses"
                                        name="faceToFaceClasses"
                                        // defaultValue={ trainersData?.face_to_face_classes}
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
                                        // defaultValue={ trainersData?.online_classes}
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
                                        // defaultValue={ trainersData?.tools }
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
                                        // defaultValue={ trainersData?.free_class }
                                        type="checkbox"
                                        { ...register('freeClass') }
                                        className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                            </div>

                            <div className=" mt-6 col-span-full">
                                <label htmlFor="biography" className="block text-sm font-medium leading-6 text-gray-900">Acerca de mi: (opcional)</label>

                                <p className="mb-3 text-sm leading-6 text-gray-600">Cuéntale a tu usuario por qué eres su mejor opción.</p>
                                
                                {/* // biography */}
                                <div className="nt-2">
                                    <textarea
                                        name="biography"
                                        id="biography"
                                        rows={ 10 }
                                        // defaultValue={ trainersData?.biography }
                                        { ...register('biography') }
                                        className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className=" mt-6 col-span-full">
                                <label htmlFor="education" className="block text-sm font-medium leading-6 text-gray-900">Educación: (opcional)</label>

                                <p className="mb-3 text-sm leading-6 text-gray-600">Escribe los título y/o certificados que tienes.</p>
                                            
                                {/* // education */}
                                <div className="mt-2">
                                    <textarea
                                        name="education"
                                        id="education"
                                        rows={ 10 }
                                        // defaultValue={ trainersData?.education }
                                        { ...register('education') }
                                        className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className=" mt-6 col-span-full">
                                <label htmlFor="schedule" className="block text-sm font-medium leading-6 text-gray-900">Agenda: (opcional)</label>

                                <p className="mb-3 text-sm leading-6 text-gray-600">Escribe las horas laborales dentro de la semana.</p>
                                
                                {/* schedule */}
                                <div className="nt-2">
                                    <textarea
                                        name="schedule"
                                        id="schedule"
                                        rows={ 10 }
                                        // defaultValue={ trainersData?.schedule }
                                        { ...register('schedule') }
                                        className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className=" mt-6 col-span-full">
                                <label htmlFor="schedule" className="block text-sm font-medium leading-6 text-gray-900">Correo Electrónico:</label>
                                
                                {/* email */}
                                <div className="nt-2">
                                    <textarea
                                        name="email"
                                        id="email"
                                        type='email'
                                        placeholder='example@example.com'
                                        autoComplete="email"
                                        rows={1}
                                        { ...register('email', {
                                            required: {
                                                value: true,
                                                message: 'Correo Electrónico requerido'
                                        }
                                    }) }
                                        className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="mt-10 w-full leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:w-1/3"
                        >
                            Actualizar
                        </button>
                    </div>

                    <div className='col-span-1 p-4'>
                        <div className="mt-2 flex flex-col items-center justify-center gap-x-3">
                            <RxAvatar className="h-28 w-28 text-gray-300" aria-hidden="true" />

                            {/* <button
                                type="button"
                                className=" rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                                Cambiar foto de perfil
                            </button> */}
                        </div>

                        <div className="mt-6 gap-y-8 sm:grid-cols-6">
                            {/* // FirtsName */}
                            <div className="sm:col-span-3">
                                <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">Nombre(s):</label>

                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        autoComplete="given-name"
                                        { ...register('firstName') }
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
                                        // defaultValue={ trainersData.last_name }

                                        { ...register ('lastName', 
                                        // {
                                        //     required: {
                                        //         value: true,
                                        //         message: 'Apellido es requerido'
                                        //     }
                                        // }
                                        ) }
                                        className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                    />

                                    { errors.lastName && <span className="block text-red-600 text-xs">{ errors.lastName.message }</span> }

                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col items-start justify-center gap-x-3 ">
                            <label htmlFor="rol" className="block text-sm font-medium leading-6 text-gray-900">Rol:</label>
                            
                            {/* // Rol */}
                            <div className="mt-2 w-full">
                                <select
                                    id='rol'
                                    name='rol'
                                    // defaultValue={ trainersData?.rol }
                                    autoComplete='rol-name'
                                    { ...register('rol') }
                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6 cursor-pointer'
                                >
                                    <option>Entrenador</option>
                                    <option>Fisioterapeuta</option>
                                    <option>Nutricionista</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-6 gap-y-8 sm:grid-cols-6">
                            <label htmlFor="minPrice" className="block text-sm font-medium leading-6 text-gray-900">Mínimo:</label>
                            
                            {/* minPrice */}
                            <div className="mt-2">
                                <input
                                    id="minPrice"
                                    name="minPrice"
                                    rows={ 1 }
                                    // defaultValue={ trainersData?.min_price }
                                    type="number"
                                    placeholder='50.000'
                                    { ...register('minPrice', 
                                    // {
                                    //     required: {
                                    //         value: true,
                                    //         message: 'Valor mínimo requerido'
                                    //     }
                                    // }
                                    ) }
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
                                    // defaultValue={ trainersData?.max_price }
                                    type="number"
                                    placeholder='150.000'
                                    { ...register('maxPrice', 
                                    // {
                                    //     required:{
                                    //         value: true,
                                    //         message: 'Valor máximo requerido'
                                    //     }
                                    // }
                                    ) }
                                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                />

                                { errors.maxPrice && <span className="block text-red-600 text-xs">{ errors.maxPrice.message }</span>}
                            </div>
                        </div>

                        <div className="mt-6 sm:col-span-4">
                            <label htmlFor="tel" className="block text-sm font-medium leading-6 text-gray-900">WhatsApp: (Opcional)</label>

                            <p className="mb-3 text-sm leading-6 text-gray-600">Añade la extensión dentro del número. Ej: +57310...</p>
                            
                            {/* // tel */}
                            <div className="mt-2">
                                <input
                                    id="tel"
                                    name="tel"
                                    // defaultValue={ trainersData?.tel }
                                    type="tel"
                                    maxLength={ 13 }
                                    placeholder='+57...'
                                    { ...register('tel') }
                                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="mt-6 gap-y-8 sm:grid-cols-6">
                            <p className="block text-sm font-medium leading-6 text-gray-900">Redes Sociales: (Opcional)</p>
                            
                            <div className="w-1/2">
                                {/* instagramForm */}
                                <div className="mt-2">
                                    <label htmlFor="social-media-instagram" className="mb-3 text-sm leading-6 text-gray-600">Instagram:</label>
                                    
                                    <input
                                        id="instagramForm"
                                        name="instagramForm"
                                    // defaultValue={ trainersData?.instagram_form }
                                        type="url"
                                        placeholder="https://www..."
                                        { ...register('instagramForm') }
                                        className="block rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                    />
                                </div>
                                
                                {/* facebookForm */}
                                <div className="mt-2">
                                    <label htmlFor="social-media-facebook" className="mb-3 text-sm leading-6 text-gray-600">Facebook:</label>

                                    <input
                                        id="facebookForm"
                                        name="facebookForm"
                                    // defaultValue={ trainersData?.facebook_form }
                                    type="url"
                                        placeholder="https://www..."
                                        { ...register('facebookForm') }
                                        className="block rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                    />
                                </div>
                                
                                {/* twitterForm */}
                                <div className="mt-2">
                                    <label htmlFor="social-media-x" className="mb-3 text-sm leading-6 text-gray-600">Twitter:</label>

                                    <input
                                        id="twitterForm"
                                        name="twitterForm"
                                        // defaultValue={ trainersData?.twitter_form }
                                        type="url"
                                        placeholder="https://www..."
                                        { ...register('twitterForm') }
                                        className="block rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col my-8 gap-y-2'>
                            <button className='rounded-md bg-buttonLink px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-sky-500 w-full flex justify-center items-center md:w-full gap-2'>{ < FaCheck className='text-white w-5 h-5' /> }Actualizar Plan</button>

                            <button className='rounded-md bg-lime-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-lime-500 w-full flex justify-center items-center md:w-full gap-2'>{ < IoChatboxOutline className='text-white w-5 h-5' /> }Asistencia</button>

                            <button className='rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-500 w-full flex justify-center items-center md:w-full gap-2'>{ < MdDeleteOutline className='text-white w-5 h-5' /> }Eliminar perfil</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export  { MyProfile } 