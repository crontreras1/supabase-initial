// import { Navbar } from "../../components/organims/navbar"

import { Link } from "react-router-dom"

function Guide () {
    return (
        <div>
            {/* <Navbar /> */}

            <div className=" w-screen h-screen flex flex-col justify-center items-center">

                <h1 className="font-bold">Guía de creación de perfil</h1>

                <div className="font-semibold text-sm">Página en construcción 👷🏻‍♂️</div>

                <Link to={'/'} className="m-5 text-sm font-semibold underline">Regresar</Link>
            </div>
        </div>
    )
}

export { Guide }