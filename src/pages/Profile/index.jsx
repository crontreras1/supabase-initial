import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from '../../components/organims/navbar'
import { RxAvatar } from "react-icons/rx";
import { MdOutlineReport } from "react-icons/md";
import { FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { supabase } from '../../supabase/supabaseClient'
import { ContactModal } from '../../components/templates/ContactModal';

function Profile () {
    const [ profileData, setProfileData ] = useState()
    const [ openContactModal, setOpenContactModal ] = useState(false)
    
    const { idProfile } = useParams()
    
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
        }        
        fetchProfileData()
    }, [idProfile])
    
    const telNumber = profileData && profileData.tel
    const contactEmail = 'contacto.fitnessmodelatam@gmail.com'
    
    const openContactModalBtn = () => {
        setOpenContactModal(true)
    }
    
    const closeContactModalBtn = () => {
        setOpenContactModal(false)
    }
    
    
    const reportProfile = () => {
        window.location.href = `mailto:${contactEmail}`
    }
    
    return (
        <>
            <div className='relative'>
                { openContactModal && <ContactModal onClose={ closeContactModalBtn } onContact={ telNumber } /> }

                <Navbar />
                
                <div className="space-y-12 max-w-full px-6">
                    <div className=" flex flex-col-reverse md:grid md:grid-cols-3 md:gap-4">
                        <div className='col-span-2 p-4'>
                            <div className="mt-6 col-span-full">
                                {/* // benefits */}
                                <h2 className="mb-3 text-3xl font-bold leading-9 tracking-tight text-gray-900 lg:text-5xl">{ profileData && profileData.benefits }</h2>

                                <div className="flex w-full gap-3 flex-wrap">
                                    {/* faceToFaceClasses */}
                                    { profileData && profileData.face_to_face_classes ? <span className="w-auto inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Presencial</span> : <span className='hidden'></span> }

                                    {/* onlineClasses */}
                                    { profileData && profileData.online_classes ? <span className="w-auto inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Online</span> : <span className='hidden'></span> }

                                    {/* tools */}
                                    { profileData && profileData.tools ? <span className="w-auto inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Material de trabajo</span> : <span className='hidden'></span> }

                                    {/* freeClass */}
                                    { profileData && profileData.free_class ? <span className="w-auto inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">1ra clase gratis</span> : <span className='hidden'></span> }
                                </div>

                                {/* // biography */}
                                <div className=" mt-6 col-span-full">
                                    <p className="block text-xl font-medium leading-6 text-gray-900">Acerca de mi</p>

                                    <p className="mb-3 text-xl leading-6 text-gray-600">{ profileData && profileData.biography }</p>
                                </div>

                                {/* // education */}
                                <div className=" mt-6 col-span-full">
                                    <p className="block text-xl font-medium leading-6 text-gray-900">Logros académicos</p>

                                    <p className="mb-3 text-xl leading-6 text-gray-600">{profileData && profileData.education }</p>
                                </div>

                                {/* schedule */}
                                <div className=" mt-6 col-span-full">
                                    <p htmlFor="schedule" className="block text-xl font-medium leading-6 text-gray-900">Agenda</p>

                                    <p className="mb-3 text-xl leading-6 text-gray-600">{profileData && profileData.schedule }</p>
                                </div>

                                {/* Report profile */}
                                <div className='my-8'>
                                    <a onClick={ reportProfile } className='rounded-md bg-white px-2.5 py-1.5 text-xl font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 w-full flex justify-center items-center gap-2 cursor-pointer sm:w-1/2'>{ <MdOutlineReport  className='w-5 h-5' /> }Reportar Perfil</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-span-1 p-4'>
                            <div className="w-48 h-48 mt-2 mx-auto flex flex-col items-center justify-center gap-x-3 rounded-lg">
                                { profileData && profileData.avatar ? <img src={ profileData.avatar } className='w-full h-full object-cover rounded-lg' /> : <RxAvatar className="h-28 w-28 text-gray-300" aria-hidden="true" />  }
                            </div>

                            <div className="mt-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    {/* // FirtsName and SecondName */}
                                    <p htmlFor="firstName" className="text-center text-xl font-medium leading-6 text-gray-900">{ profileData && profileData.first_name }  { profileData && profileData.last_name }</p>
                                    
                                    {/* Rol */}
                                    <p htmlFor="firstName" className="text-center mb-3 text-xl leading-6 text-gray-600">{ profileData && profileData.rol }</p>
                                    
                                    {/* minPrice and MaxPrice */}
                                    <p htmlFor="firstName" className="text-center mb-3 text-xl leading-6 text-gray-600">Valor de la clase:<br />{`$${profileData && profileData.min_price} - $${profileData && profileData.max_price}` }</p>
                                </div>
                            </div>

                            {/* tel */}
                            { profileData && profileData.tel ? 
                                <div className="w-full mt-6 flex justify-center sm:col-span-4">
                                    { 
                                        profileData && profileData.tel ? 
                                            <button onClick={ openContactModalBtn } className="w-full rounded-md cursor-pointer bg-lime-600 px-2.5 py-1.5 text-xl font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 lg:w-2/3rounded-md  flex justify-center items-center md:w-full gap-2 sm:w-1/2 lg:w-3/5">
                                                < FaWhatsapp className='text-white w-5 h-5' />

                                                Contactar
                                            </button> : 
                                            <span></span>
                                    }    
                                </div>
                                    : <span className='hidden'></span>
                            }

                            <div className="mt-6 flex justify-center gap-8 sm:grid-cols-6">
                                    {/* instagramForm */}
                                    { profileData && profileData.instagram_form ? 
                                        <a href={ profileData && profileData.instagram_form } target='_blank'>
                                            <SiInstagram className='w-6 h-6 cursor-pointer' />
                                        </a>
                                        : <span className='hidden'></span>
                                    }

                                    {/* facebookForm */}
                                    { profileData && profileData.facebook_form ? 
                                        <a href={ profileData && profileData.facebook_form } target='_blank'>
                                            <FaFacebookSquare className='w-6 h-6 cursor-pointer' />
                                        </a>
                                        : <span className='hidden'></span>
                                    }

                                    {/* twitterForm */}
                                    { profileData && profileData.twitter_form ? 
                                        <a href={ profileData && profileData.twitter_form } target='_blank'>
                                            <RiTwitterXFill className='w-6 h-6 cursor-pointer' />
                                        </a>
                                        : <span className='hidden'></span>
                                    }
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    )
}

export  { Profile } 