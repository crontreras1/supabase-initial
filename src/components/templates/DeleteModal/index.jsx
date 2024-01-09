import { useEffect, useState } from "react"
import { supabase } from "../../../supabase/supabaseClient"
import { useAuth } from "../../../Auth"
import { useNavigate } from "react-router-dom"

function DeleteModal ({ onClose }) {  
    const { session } = useAuth()
    const navigate = useNavigate() 

    async function deleteProfile () {
        const { error } = await supabase
        .from('trainers')
        .delete()
        .eq('id_profile', session.user.id)
        if (error) {
            console.log('El perfil no pudo ser eliminado')
        }
        if (!error) {
            await supabase.auth.signOut()
            console.log('Perfil eliminado correctamente')
            navigate('/')
        }
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="absolute w-screen h-screen bg-black opacity-50 flex"></div>

                <div className="w-60 h-96 p-5 bg-white rounded-lg flex flex-col justify-center align-center gap-y-10 sm:p-10 sm:gap-10 z-10 sm:w-96">
                    <p className="text-xl text-center text-gray-900">¿Estás seguro que quieres eliminar tu cuenta?</p>

                    <div className="w-full h-1/4 flex flex-col-reverse justify-center items-center gap-y-5 sm:flex-row sm:gap-10">
                        <button onClick={ onClose } className="text-gray-900 underline cursor-pointer">Cancelar</button>
                        
                        <button onClick={ deleteProfile } target='_blank' className="w-36 text-center leading-10 bg-primaryColor text-white rounded-lg cursor-pointer">Eliminar</button>
                    </div>
                </div>
        </div>
    )
}        

export { DeleteModal }