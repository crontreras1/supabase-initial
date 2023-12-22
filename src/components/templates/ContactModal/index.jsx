import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { supabase } from "../../../supabase/supabaseClient"

function ContactModal () {
    const [ contact, setContact ] = useState([{tel: ''}])

    useEffect(() => {
        async function fetchContactData () {  
            const { data, error } = await supabase
            .from('trainers')
            .select('tel')
            .eq()
            if (error) {
                throw error
            } 
            if (data) {
                setContact(data)
            }
        }        
        fetchContactData()
    }, [])

    // const openModal = () => (

    // )

    return (
        <div className="absolute w-screen h-screen flex justify-center items-center">
                <div className=" w-screen h-screen bg-black opacity-50 absolute flex"></div>

                <div className="w-60 h-96 p-5 bg-white rounded-lg flex flex-col justify-center align-center gap-y-10 sm:p-10 sm:gap-10 z-10 sm:w-96">
                    <p className="text-xl text-center text-gray-900">Fitness Mode no interviene en las relaciones entre anunciantes y usuarios</p>

                    <div className="w-full h-1/4 flex flex-col-reverse justify-center items-center gap-y-5 sm:flex-row sm:gap-10">
                        <Link to={'/'} className="text-gray-900 underline cursor-pointer">Cancelar</Link>
                        
                        <a href={ `https://wa.me/${contact[0].tel}` } target='_blank' className="w-36 text-center leading-10 bg-primaryColor text-white rounded-lg cursor-pointer">Contactar</a>
                    </div>
                </div>
        </div>
    )
}        

export { ContactModal }