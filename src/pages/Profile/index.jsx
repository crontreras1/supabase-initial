import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Navbar } from '../../components/organims/navbar'
import { RxAvatar } from "react-icons/rx";
import { MdOutlineReport } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { useAuth } from '../../Auth'
import { supabase } from '../../supabase/supabaseClient'

function Profile () {
    const [ profileData, setProfileData ] = useState(null)
    // const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const { session } = useAuth()
    const { idProfile } = useParams()
    
    if (session) {
        navigate('/my-profile')
    }

    // const onSubmit = handleSubmit( async data => {  
    //     const dataTrainer = {
    //         rol: data.rol,
    //         first_name: data.firstName,
    //         last_name: data.lastName,
    //         genre: data.genre,
    //         benefits: data.benefits,
    //         biography: data.biography,
    //         education: data.education,
    //         email: data.email,
    //         tel: data.tel,
    //         instagram_form: data.instagramForm,
    //         facebook_form: data.facebookForm,
    //         twitter_form: data.twitterForm,
    //         face_to_face_classes: data.faceToFaceClasses,
    //         online_classes: data.onlineClasses,
    //         tools: data.tools,
    //         schedule: data.schedule,
    //         location: data.location,
    //         min_price: data.minPrice,
    //         max_price: data.maxPrice,
    //         free_class: data.freeClass,
    //     }  
    //     const { error } = await supabase
    //     .from('trainers')
    //     .update(dataTrainer)
    //     .eq('id_profile', session.user.id)
    // })

    useEffect(() => {
        async function fetchProfileData () {  
            const { data, error } = await supabase
            .from('trainers')
            .select()
            .eq('id_profile', idProfile)
            if (error) {
                throw error
            } 
            if (data) {
                setProfileData(data[0])
            }
            console.log(data);
        }        
        fetchProfileData()
    }, [idProfile])

    return (
        <>
            <Navbar />

            <div className="space-y-12 max-w-full px-6">
                <div className=" flex flex-col-reverse md:grid md:grid-cols-3 md:gap-4">
                    <div className='col-span-2 p-4'>
                        <div className="mt-6 col-span-full">
                            {/* // benefits */}
                            <h2 className="mb-3 text-2xl font-bold leading-9 tracking-tight text-gray-900">{ profileData && profileData.benefits }</h2>
                            
                            <div className="flex w-full gap-3 flex-wrap">
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
                                <p className="mb-3 text-sm leading-6 text-gray-600">{ profileData && profileData.biography }</p>
                            </div>

                            <div className=" mt-6 col-span-full">
                                {/* // education */}
                                <p className="block text-sm font-medium leading-6 text-gray-900">Logros académicos</p>
                                <p className="mb-3 text-sm leading-6 text-gray-600">{profileData && profileData.education }</p>
                            </div>

                            <div className=" mt-6 col-span-full">
                                {/* schedule */}
                                <p htmlFor="schedule" className="block text-sm font-medium leading-6 text-gray-900">Agenda:</p>

                                <p className="mb-3 text-sm leading-6 text-gray-600">{profileData && profileData.schedule }</p>
                            </div>

                            <div className='my-8'>
                                <button className='rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 w-full flex justify-center items-center md:w-full gap-2'>{ <MdOutlineReport  className='w-5 h-5' /> }Reportar Perfil</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-1 p-4'>
                        <div className="mt-2 flex flex-col items-center justify-center gap-x-3">
                            <RxAvatar className="h-28 w-28 text-gray-300" aria-hidden="true" />                                                                                                       
                        </div>

                        <div className="mt-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                {/* // FirtsName and SecondName */}
                                <p htmlFor="firstName" className="text-center text-sm font-medium leading-6 text-gray-900">{ profileData && profileData.first_name }  { profileData && profileData.last_name }</p>
                                
                                {/* Rol */}
                                <p htmlFor="firstName" className="text-center mb-3 text-sm leading-6 text-gray-600">{ profileData && profileData.rol }</p>
                                {/* minPrice and MaxPrice */}
                                <p htmlFor="firstName" className="text-center mb-3 text-sm leading-6 text-gray-600">Valor de la clase:<br /> { profileData && profileData.min_price } - { profileData && profileData.max_price }</p>
                            </div>
                        </div>

                        <div className="w-full mt-6 flex justify-center sm:col-span-4">
                            <button type="button" className="w-full rounded-md bg-buttonLink hover:bg-hoverButtonLink px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 lg:w-2/3">
                                {/* <div className='flex gap-2 items-center justify-around'>
                                    <ChatBubbleOvalLeftEllipsisIcon className='w-6 h-6' />

                                    <p className=''>Contactar</p>
                                </div> */}
                                Contactar
                            </button>
                        </div>

                        <div className="mt-6 flex justify-center gap-8 sm:grid-cols-6">
                                {/* instagramForm */}
                                <a href={ profileData.instagram_form } target='_blank'>
                                    <SiInstagram className='w-6 h-6 cursor-pointer' />
                                </a>

                                {/* facebookForm */}
                                <a href={ profileData.facebook_form } target='_blank'>
                                    <FaFacebookSquare className='w-6 h-6 cursor-pointer' />
                                </a>

                                {/* twitterForm */}
                                <a href={ profileData.twitter_form } target='_blank'>
                                    <RiTwitterXFill className='w-6 h-6 cursor-pointer' />
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export  { Profile } 