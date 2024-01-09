import { useEffect, useState } from "react"
import { supabase } from "../../../supabase/supabaseClient"

function ContactModal ({ onClose, onContact }) {    
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
                <div className=" w-screen h-screen bg-black opacity-50 absolute flex"></div>

                <div className="w-60 h-96 p-5 bg-white rounded-lg flex flex-col justify-center align-center gap-y-10 sm:p-10 sm:gap-10 z-10 sm:w-96">
                    <p className="text-xl text-center text-gray-900">Fitness Mode no interviene en las relaciones entre anunciantes y usuarios</p>

                    <div className="w-full h-1/4 flex flex-col-reverse justify-center items-center gap-y-5 sm:flex-row sm:gap-10">
                        <button onClick={ onClose } className="text-gray-900 underline cursor-pointer">Cancelar</button>
                        
                        <a href={ `https://wa.me/${onContact}` } target='_blank' className="w-36 text-center leading-10 bg-primaryColor text-white rounded-lg cursor-pointer">Contactar</a>
                    </div>
                </div>
        </div>
    )
}        

// href={ `https://wa.me/${contact[0].tel}` }
export { ContactModal }