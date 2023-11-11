function Card () {
    return (
        <div className="flex justify-evenly gap-10 flex-wrap">
            <div className='w-72 h-auto sm:ring-1 sm:ring-inset sm:ring-gray-500/10 sm:cursor-pointer sm:border-spacing-1'>
                <figure className='mb-2 w-full h-1/2'>
                    <img
                        src="https://i.blogs.es/5341b4/personal-1277392_1920/1366_2000.webp"
                        alt="" 
                        className='w-full h-full p-2 object-cover'
                    />
                </figure>
                <p className="text-2xl px-2.5 font-semibold leading-7 text-gray-900">Cristian Contreras</p>
                <p className="text-sm px-2.5 font-medium leading-6 text-gray-600">Entrenador</p>
                <p className="text-sm px-2.5 leading-6 text-gray-600">Bogotá, Colombia</p>
                <p className="text-sm px-2.5 leading-6 text-gray-900">¡Plan personalizado, motivación constante y metas alcanzables para que te enamores del ejercicio y alcances tus objetivos!</p>
                <div className="mt-6 flex justify-evenly items-center text-sm">
                    <span>$ 50.000 - $ 120.000</span>
                    <p className="p-1 rounded-full flex justify-center w-32 text-sm font-bold leading-6 text-focus bg-focus/40">1ra Clase Gratis</p>
                </div>
            </div>
        </div>
    )
}

export { Card }