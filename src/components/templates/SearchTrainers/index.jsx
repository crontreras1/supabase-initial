import { useState } from "react"
import { Link } from "react-router-dom"

function SearchTrainers () {
    const [ selectRol, setSelectRol ] = useState('')

    const handleTypeChange = (event) => {
        setSelectRol(event.target.value)
    }

    return (
        <section  className="w-full flex flex-col items-center pb-10 sm:w-4/5">

            <div className="mt-10 w-4/5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-5">
                <div className="w-full sm:col-span-3">
                <label htmlFor="rol" className="w-full block text-lg font-medium leading-10 text-gray-900">
                    Categoría
                </label>

                <div className="mt-2">
                    <select 
                    id='rol'
                    value={ selectRol }
                    onChange={ handleTypeChange }
                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 cursor-pointer text-lg leading-10"
                    >
                    <option value=''>Seleccionar</option>

                    <option value='personal-trainers'>Entrenador</option>

                    <option value='physiotherapists'>Fisioterapeuta</option>

                    <option value='nutritionits'>Nutricionista</option>
                    </select>
                </div>
                </div>

                {/* Second input: location (?) */}
                {/* <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Ciudad
                </label>

                <div className="mt-2">
                    <select className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 sm:text-sm sm:leading-6">
                    <option>Seleccionar</option>

                    <option>Bogotá</option>

                    <option>Cali</option>

                    <option>Medellín</option>
                    </select>
                </div>
                </div> */}

                <div className="sm:col-span-2 sm:relative">
                <Link to={`/trainers/${ selectRol }`}>
                    <button className="w-full mt-1 leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md bg-white px-2.5 py-1.5 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:absolute bottom-0 left-0">
                    Buscar
                    </button>
                </Link>
                </div>
            </div>
        </section>
    )
}

export { SearchTrainers }