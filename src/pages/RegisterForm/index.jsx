import React from 'react'
import { UserCircleIcon } from '@heroicons/react/24/solid'

function RegisterForm() {
  return (
    <>
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Llena el formulario y anunciate</h2>
    </div>

    <form>
        <div className="space-y-12">
            <div className="mt-2 flex flex-col items-center justify-center gap-x-3">
                <UserCircleIcon className="h-28 w-28 text-gray-300" aria-hidden="true" />

                <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                    Cambiar foto de perfil
                </button>
            </div>

            <div className="mt-2 flex flex-col items-start justify-center gap-x-3">
                <h3 className="text-base font-semibold leading-7 text-gray-900">General:</h3>

                <label htmlFor="rol" className="block text-sm font-medium leading-6 text-gray-900">Rol:</label>

                <div className="mt-2">
                    <select
                        id='rol'
                        name='rol'
                        autoComplete='rol-name'
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                    >
                        <option>Entrenador</option>
                        <option>Fisioterapeuta</option>
                        <option>Nutricionista</option>
                    </select>
                </div>
            </div>

        </div>
    </form>
    </>
  )
}

export default RegisterForm