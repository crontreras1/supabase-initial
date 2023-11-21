import React from 'react'
import Navbar from '../../components/organims/navbar'
import { Card } from '../../components/organims/card'
import { CategoryCard } from '../../components/organims/category-card'

function Home () {
  return (
    <>
        <Navbar />
        <div className='w-full flex flex-col items-center'>
          <div  className="w-4/5 flex flex-col items-center pb-12">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">ENCUENTRA TU ENTRENADOR PERSONAL</h2>

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

        <div className="mt-10 w-full px-5 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-6 md:px-10">
          <div className="flex flex-col items-center justify-center sm:col-span-3">
            <h2 className="mx-auto mb-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">¡Tu bienestar está a solo un clic de distancia!</h2>
            <p className='text-center md:text-left mb-10'>¡Bienvenido a Fitness Mode, donde encontrarás tu compañero de bienestar personalizado! Estamos emocionados de ofrecerte una experiencia única que cambiará tu enfoque hacia la salud y el fitness. En Fitness Mode, nuestra misión es simple pero poderosa: mejorar la calidad de vida de las personas por medio de la conexión entre seres humanos. Nos apasiona conectar a individuos como tú con los mejores profesionales en el campo de la salud, incluyendo entrenadores personales, nutricionistas y fisioterapeutas. Con Fitness Mode, no estás solo en tu viaje hacia una vida más saludable y equilibrada. Descubre la diferencia de trabajar con expertos comprometidos que te brindarán apoyo, orientación y un plan personalizado diseñado exclusivamente para ti.</p>
            <button className="w-4/5 md:w-2/4 leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Encontrar Entrenador</button>
          </div>

          <div className="md:flex hidden items-center sm:col-span-3 object-cover">
            <img src="https://s3.abcstatics.com/media/bienestar/2019/09/18/entrenador-personal-U303043078655KJE--1248x698@abc.jpg" alt="" />
          </div>
        </div>

        <div className='px-10'>
          <h2 className=" mt-20 mx-auto mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">¿Qué estás buscando?</h2>
          <div className='flex flex-col items-center gap-10 md:flex-row md:justify-evenly'>
            <CategoryCard img='nutrition' name='nutrition'/>
            <CategoryCard img='training' name='training'/>
            <CategoryCard img='physiotherapy' name='physiotherapy'/>
          </div>
          {/* <div className='relative w-full md:flex'>
            <div className=''>
              <img className='' src="https://s3.abcstatics.com/media/bienestar/2019/09/18/entrenador-personal-U303043078655KJE--1248x698@abc.jpg" alt="" />
              <p>Nutriconista</p>
            </div>
            <div className='relative'>
              <img src="https://s3.abcstatics.com/media/bienestar/2019/09/18/entrenador-personal-U303043078655KJE--1248x698@abc.jpg" alt="" />
              <p>Entrenador</p>
            </div>
            <div className='relative'>
              <img src="https://s3.abcstatics.com/media/bienestar/2019/09/18/entrenador-personal-U303043078655KJE--1248x698@abc.jpg" alt="" />
              <p>Fisioterapeuta</p>
            </div>
          </div> */}
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