import React, { useState, useEffect } from 'react'
import Navbar from '../../components/organims/navbar'
import { useForm } from 'react-hook-form'
import { UserCircleIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Auth'
import { supabase } from '../../supabase/supabaseClient'

function Profile () {
    const [ trainersData, setTrainersData ] = useState({})
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const { session } = useAuth()
    
    if (session) {
        navigate('/my-profile')
    }

    const onSubmit = handleSubmit( async data => {  
        const dataTrainer = {
            rol: data.rol,
            first_name: data.firstName,
            last_name: data.lastName,
            genre: data.genre,
            benefits: data.benefits,
            biography: data.biography,
            education: data.education,
            email: data.email,
            tel: data.tel,
            instagram_form: data.instagramForm,
            facebook_form: data.facebookForm,
            twitter_form: data.twitterForm,
            face_to_face_classes: data.faceToFaceClasses,
            online_classes: data.onlineClasses,
            tools: data.tools,
            schedule: data.schedule,
            location: data.location,
            min_price: data.minPrice,
            max_price: data.maxPrice,
            free_class: data.freeClass,
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
                }
            }   
        }        
        fetchTrainersData ()
    }, [session])

    return (
        <>
            <Navbar />

            <div className="mx-auto space-y-12 max-w-3xl px-6">
                <div className="md:grid md:grid-cols-3 md:gap-4">
                    <div className='col-span-2 p-4'>
                        <div className="mt-6 col-span-full">
                            {/* // benefits */}
                            <h2 className="mb-3 text-2xl font-bold leading-9 tracking-tight text-gray-900">¡Plan personalizado, motivación constante y metas alcanzables para que te namores del ejercicio y alcances tus objetivos!</h2>
                            
                            <div className="flex w-full gap-3">
                                {/* faceToFaceClasses */}
                                <span className="w-auto inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Presencial</span>

                                {/* onlineClasses */}
                                <span className="w-auto inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Online</span>

                                {/* tools */}
                                <span className="w-auto inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Material de trabajo</span>

                                {/* freeClass */}
                                <span className="w-auto inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">1ra clase gratis</span>
                            </div>

                            <div className=" mt-6 col-span-full">
                                {/* // biography */}
                                <p className="block text-sm font-medium leading-6 text-gray-900">Acerca de mi</p>
                                <p className="mb-3 text-sm leading-6 text-gray-600">¡Bienvenido al viaje de transformación física y bienestar! Como tu entrenador personal, estoy comprometido a guiarte hacia tus metas fitness de manera personalizada. Con un enfoque holístico, diseñaré programas de entrenamiento adaptados a tu nivel, preferencias y objetivos. Ya sea que busques perder peso, ganar fuerza o mejorar tu salud en general, te proporcionaré la motivación y el apoyo necesarios para alcanzar el éxito. ¡Juntos, convertiremos tus sueños de bienestar en una realidad tangible! ¡Inicia hoy mismo tu camino hacia una versión más fuerte y saludable de ti mismo!</p>
                            </div>

                            <div className=" mt-6 col-span-full">
                                {/* // education */}
                                <p className="block text-sm font-medium leading-6 text-gray-900">Logros académicos</p>
                                <p className="mb-3 text-sm leading-6 text-gray-600">Poseo una sólida base educativa respaldada por una licenciatura en Ciencias del Ejercicio obtenida en la Universidad Fitness Pro. Mi formación incluye cursos especializados en fisiología del ejercicio, nutrición deportiva y métodos de entrenamiento avanzados. Además, he continuado mi educación en la prestigiosa Escuela de Salud Integral, donde me certifiqué como entrenador personal y adquirí conocimientos especializados en la conexión mente-cuerpo. Esta combinación de educación formal me permite brindar un enfoque integral y respaldado científicamente para ayudarte a alcanzar tus metas de fitness de manera segura y efectiva.</p>
                            </div>

                            <div className=" mt-6 col-span-full">
                                {/* schedule */}
                                <p htmlFor="schedule" className="block text-sm font-medium leading-6 text-gray-900">Agenda:</p>

                                <p className="mb-3 text-sm leading-6 text-gray-600">Lunes a Viernes de 5 am a 8pm <br/> Sabados y Domigos de 7 am a 2pm</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-1 p-4'>
                        <div className="mt-2 flex flex-col items-center justify-center gap-x-3">
                            <UserCircleIcon className="h-28 w-28 text-gray-300" aria-hidden="true" />                                                                                                       
                        </div>

                        <div className="mt-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                {/* // FirtsName and SecondName */}
                                <p htmlFor="firstName" className="text-center text-sm font-medium leading-6 text-gray-900">Cristian Contreras</p>
                                
                                {/* Rol */}
                                <p htmlFor="firstName" className="text-center mb-3 text-sm leading-6 text-gray-600">Entrenador</p>
                                {/* minPrice and MaxPrice */}
                                <p htmlFor="firstName" className="text-center mb-3 text-sm leading-6 text-gray-600">Valor de la clase:<br /> $ 50.000 - $ 120.000</p>
                            </div>
                        </div>

                        <div className="w-full mt-6 flex justify-center sm:col-span-4">
                            <button type="button" className=" rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                <div className='flex gap-2 items-center justify-around'>
                                    <ChatBubbleOvalLeftEllipsisIcon className='w-6 h-6' />

                                    <p>Contactar</p>
                                </div>
                            </button>
                        </div>

                        <div className="mt-6 flex justify-center gap-8 sm:grid-cols-6">
                                {/* instagramForm */}
                                <p>F</p>
                                {/* facebookForm */}
                                <p>I</p>
                                {/* twitterForm */}
                                <p>X</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export  { Profile } 