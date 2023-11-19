import React from 'react'
import Navbar from '../../components/organims/navbar'
import { Card } from '../../components/organims/card'

function Home () {
  return (
    <>
        <Navbar />
        <div className='w-full flex flex-col items-center'>
          <div  className="w-4/5 flex flex-col items-center pb-12">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Encuentra tu entrenador</h2>

            <div className="mt-10 w-4/5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Categoría
                </label>
                <div className="mt-2">
                <select className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 sm:text-sm sm:leading-6">
                  <option>Seleccionar</option>

                  <option>Entrenador</option>

                  <option>Fisioterapeuta</option>

                  <option>Nutricionista</option>
                </select>
                </div>
              </div>

              <div className="sm:col-span-3">
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
              </div>

              <div className="sm:col-span-2">
                <button className="w-full leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 w-4/5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Entrenadores, Fisioterapeutas y nutricionistas a tu alcance</h2>
            <p>Parrafo</p>
            <button>Botón</button>
          </div>
          <div className="sm:col-span-3">
            <img src="https://s3.abcstatics.com/media/bienestar/2019/09/18/entrenador-personal-U303043078655KJE--1248x698@abc.jpg" alt="" />
          </div>
        </div>

        <div>
          <h2>Categorías</h2>
          <div>
            <div>
              <img src="" alt="" />
              <p>Nutriconista</p>
            </div>
            <div>
              <img src="" alt="" />
              <p>Entrenador</p>
            </div>
            <div>
              <img src="" alt="" />
              <p>Fisioterapeuta</p>
            </div>
          </div>
        </div>

        <div>
          <h2>H2</h2>
          <p>Parrafo</p>
          <div>
            <button>Botón 1</button>
            <button>Botón 2</button>
          </div>
        </div>
    </>
  )
}

export { Home }