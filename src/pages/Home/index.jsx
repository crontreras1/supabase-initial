import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/organims/navbar'
import { CategoryCard } from '../../components/organims/category-card'
import { Link } from 'react-router-dom'
import faceToFaceClass from '../../assets/images/face-to-face-class-image.jpg'
import { Footer } from '../../components/organims/footer'
import { supabase } from '../../supabase/supabaseClient'
import { Card } from '../../components/organims/card'
import './styles.css'
import { SearchTrainers } from '../../components/templates/SearchTrainers'

function Home () {
  const [trainers, setTrainers] = useState([])



  // const img = {faceTofaceClass: faceToFaceClass}


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
        <div className="w-full flex flex-col items-center pb-10 sm:w-4/5">
          <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 lg:text-5xl">ENCUENTRA TU PROFESIONAL DE LA SALUD</h2>

          < SearchTrainers />
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
      <section className='w-90 pb-10 px-5 flex justify-start overflow-hidden overflow-x-auto sm:mx-10 sm:px-10'>
        <div className='flex gap-10 animate-slide animate-slide infinite'>
          {
            randomCards.map((index) => {
            const trainer = trainers[index]
            return <Link to={ `trainers/profile/${trainers[index].id_profile}` }><Card key={trainer.id} data={trainer} /></Link>
            })  
          }
        </div>
      </section>

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