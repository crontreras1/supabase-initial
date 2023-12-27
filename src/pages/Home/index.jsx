import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/organims/navbar'
import { CategoryCard } from '../../components/organims/category-card'
import { Link } from 'react-router-dom'
import faceToFaceClass from '../../assets/images/face-to-face-class-image.jpg'
import { Footer } from '../../components/organims/footer'
import { supabase } from '../../supabase/supabaseClient'
import { Card } from '../../components/organims/card'
import './styles.css'

function Home () {
  const [ selectRol, setSelectRol ] = useState('')

  const handleTypeChange = (event) => {
    setSelectRol(event.target.value)
  }

  // const img = {faceTofaceClass: faceToFaceClass}

  const [trainers, setTrainers] = useState([])

  useEffect(() => {
      async function fetchCardsData () {
          const { data, error } = await supabase
          .from('trainers')
          .select()
          .eq('status', false) 
          if (error) {
              throw error
          }
          if (data) {
              setTrainers(data)
          }
      }
      fetchCardsData()
  }, [])

    // Generate 10 random cards
    const generateRandomCards = (length, count) => {
        const order = Array.from({ length }, (_, index) => index)
        order.sort(() => Math.random() - 0.5)
        return order.slice(0, count)
    };
    
    const numberOfRandomCardsToShow = 10
    const randomCards = generateRandomCards(trainers.length, numberOfRandomCardsToShow)

  return (
    <>
      <Navbar />

      <section className='w-full py-10 px-8 flex flex-col items-center lg:py-24'>
        <div  className="w-full flex flex-col items-center pb-10 sm:w-4/5">
          <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 lg:text-5xl">ENCUENTRA TU PROFESIONAL DE LA SALUD</h2>

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
        </div>

        {/* <figure className="mt-10 w-full h-96 flex justify-center relative lg:w-4/5 lg:mx-auto"> */}
          {/* <div className='w-full h-full absolute inset-0 bg-primaryColor rounded-lg'></div> */}

          {/* <div className="w-4/5 h-full flex flex-col items-center justify-center absolute">
            <h2 className="mb-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900 lg:text-7xl">¡TU BIENESTAR ESTÁ A UN SOLO CLIC DE DISTANCIA!</h2> */}

            {/* <p className='text-center md:text-left mb-10'>¡Bienvenido a Fitness Mode, donde encontrarás tu compañero de bienestar personalizado! Estamos emocionados de ofrecerte una experiencia única que cambiará tu enfoque hacia la salud y el fitness. En Fitness Mode, nuestra misión es simple pero poderosa: mejorar la calidad de vida de las personas por medio de la conexión entre seres humanos. Nos apasiona conectar a individuos como tú con los mejores profesionales en el campo de la salud, incluyendo entrenadores personales, nutricionistas y fisioterapeutas. Con Fitness Mode, no estás solo en tu viaje hacia una vida más saludable y equilibrada. Descubre la diferencia de trabajar con expertos comprometidos que te brindarán apoyo, orientación y un plan personalizado diseñado exclusivamente para ti.</p> */}
            {/* <Link to={'/trainers'} className='w-full flex justify-center'>
              <button className="w-4/5 text-lg leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md bg-white px-2.5 py-1.5 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 md:w-2/4">Encontrar Profesional</button>
            </Link>
          </div> */}

          {/* <img 
            src={ faceToFaceClass }
            alt="clase semipersonalizada" 
            className='w-full h-full object-cover'
            /> */}
        {/* </figure> */}
      </section>
      
      {/* 10 random cards */}
      {/* <section className='w-full px-8 flex justify-center overflow-hidden'>
        <div className='flex gap-10 animate-slide animate-slide infinite'>
          {
            randomCards.map((index) => {
            const trainer = trainers[index]
            return <Card key={trainer.id} data={trainer} />
            })  
          }
        </div>
      </section> */}

      {/* <section className='px-8 py-10 w-full lg:py-24'>
        <h2 className="mx-auto mb-12 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 md:mb-24 lg:text-5xl">¿Qué estás buscando?</h2>

        <div className='w-full flex flex-col items-center flex-wrap gap-10 md:flex-row md:justify-around border-solid border-1 border-red-500'>
          <Link to={'/trainers/nutritionits'}>
            <CategoryCard img='nutrition' name='nutrition' className='w-full mx-5 rounded-md'/>
          </Link>

          <Link to={'/trainers/personal-trainers'}>
            <CategoryCard img='training' name='training'/>
          </Link>

          <Link to={'/trainers/physiotherapists'}>
              <CategoryCard img='physiotherapy' name='physiotherapy'/>
          </Link>
        </div>
      </section> */}

      <section className='w-full py-10 px-8 flex flex-col items-center lg:py-24'>
        <div className='px-10 mb-8 lg:w-2/3 lg:m-auto lg:mb-10'>
          <h2 className=" mb-10 mx-auto text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 lg:text-5xl">¿Eres entrenador, Fisioterapeuta y/o nutricionista? Crea tu cuenta y consigue tus clientes</h2>

          <p className='text-lg text-center mb-10'> Si eres un entrenador, fisioterapeuta o nutricionista comprometido con la excelencia, ¡te invitamos a unirte a nosotros y crear tu perfil hoy mismo! Exhibe tu experiencia, comparte tus logros y conecta con personas que buscan tu experiencia. ¡Haz crecer tu clientela y amplía tu impacto! Únete a nuestra comunidad de profesionales de la salud y deja que tu talento brille. ¡Es el momento perfecto para impulsar tu carrera hacia nuevos horizontes!</p>

          <div className='flex flex-col items-center gap-2 mb-6npm decoration-violet-50'>
            <Link to={'/register'} className='w-full flex justify-center'>
              <button className="w-full text-lg rounded-md bg-primaryColor hover:bg-hPrimaryColor px-2.5 py-1.5 font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 leading-10 sm:w-3/4">Crear Perfil</button>
            </Link>

            <Link to={'/guide'}>
              <button className="text-lg font-semibold leading-6 text-gray-900 underline">Más información</button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export { Home }