import React, { useState } from 'react'
import { Navbar } from '../../components/organims/navbar'
import { CategoryCard } from '../../components/organims/category-card'
import { Link } from 'react-router-dom'
import faceToFaceClass from '../../assets/images/face-to-face-class-image.jpg'

function Home () {
  const [ selectRol, setSelectRol ] = useState('')

  const handleTypeChange = (event) => {
    setSelectRol(event.target.value)
  }

  const img = {faceTofaceClass: faceToFaceClass}
  return (
    <>
      <Navbar />

      <div className='w-full flex flex-col items-center'>
        <div  className="w-4/5 flex flex-col items-center pb-12">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">ENCUENTRA TU PROFESIONAL DE LA SALUD</h2>

          <div className="mt-10 w-4/5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="rol" className="block text-sm font-medium leading-6 text-gray-900">
                Categoría
              </label>

              <div className="mt-2">
                <select 
                  id='rol'
                  value={ selectRol }
                  onChange={ handleTypeChange }
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 cursor-pointer sm:text-sm sm:leading-6"
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
                <button className="w-full mt-1 leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:absolute bottom-0 left-0">
                  Buscar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

{/* Second CTA */}
      <div className="mt-10 w-full h-96 px-5 flex justify-center relative md:px-10 lg:w-4/5 lg:mx-auto">
        <div className="w-4/5 h-full flex flex-col items-center justify-center absolute">

          <h2 className="mb-6 text-center text-2xl font-bold leading-9 tracking-tight text-white">¡TU BIENESTAR ESTÁ A UN SOLO CLIC DE DISTANCIA!</h2>

          {/* <p className='text-center md:text-left mb-10'>¡Bienvenido a Fitness Mode, donde encontrarás tu compañero de bienestar personalizado! Estamos emocionados de ofrecerte una experiencia única que cambiará tu enfoque hacia la salud y el fitness. En Fitness Mode, nuestra misión es simple pero poderosa: mejorar la calidad de vida de las personas por medio de la conexión entre seres humanos. Nos apasiona conectar a individuos como tú con los mejores profesionales en el campo de la salud, incluyendo entrenadores personales, nutricionistas y fisioterapeutas. Con Fitness Mode, no estás solo en tu viaje hacia una vida más saludable y equilibrada. Descubre la diferencia de trabajar con expertos comprometidos que te brindarán apoyo, orientación y un plan personalizado diseñado exclusivamente para ti.</p> */}
          <Link to={'/trainers'} className='w-full flex justify-center'>
            <button className="w-4/5 md:w-2/4 leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Encontrar Profesional</button>
          </Link>
        </div>

        <img 
          src={ faceToFaceClass }
          alt="clase semipersonalizada" 
          className=' w-full h-full object-cover'
        />
      </div>
{/* Thirth CTA */}
      <div className='px-10'>
        <h2 className=" mt-10 mx-auto mb-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 md:mt-20 md:mb-10">¿QUÉ ESTÁS BUSCANDO?</h2>

        <div className='flex flex-col items-center gap-10 md:flex-row md:justify-evenly'>
          <Link to={'/trainers/nutritionits'}>
            <CategoryCard img='nutrition' name='nutrition'/>
          </Link>

          <Link to={'/trainers/personal-trainers'}>
            <CategoryCard img='training' name='training'/>
          </Link>

          <Link to={'/trainers/physiotherapists'}>
              <CategoryCard img='physiotherapy' name='physiotherapy'/>
          </Link>
        </div>
      </div>

      <div className='px-10 mb-8'>
        <h2 className=" mt-20 mb-10 mx-auto text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">¿Eres entrenador, Fisioterapeuta y/o nutricionista? Crea tu cuenta y consigue tus clientes</h2>

        <p className='text-center mb-10'> Si eres un entrenador, fisioterapeuta o nutricionista comprometido con la excelencia, ¡te invitamos a unirte a nosotros y crear tu perfil hoy mismo! Exhibe tu experiencia, comparte tus logros y conecta con personas que buscan tu experiencia. ¡Haz crecer tu clientela y amplía tu impacto! Únete a nuestra comunidad de profesionales de la salud y deja que tu talento brille. ¡Es el momento perfecto para impulsar tu carrera hacia nuevos horizontes!</p>

        <div className='flex flex-col items-center gap-2 mb-6npm decoration-violet-50'>
          <button className="w-full rounded-md bg-buttonLink hover:bg-hoverButtonLink px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 sm:w-48">Crear Perfil</button>

          <button className="text-sm font-semibold leading-6 text-gray-900">Más información</button>
        </div>
      </div>
    </>
  )
}

export { Home }