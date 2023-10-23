import { UserCircleIcon } from '@heroicons/react/24/solid'
import { useForm } from 'react-hook-form'

function RegisterForm() {
    
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <>
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Llena el formulario y anunciate</h2>
    </div>

    <form onSubmit={ onSubmit }>
        <div className="mx-auto space-y-12 max-w-2xl px-6">
            <div className="mt-2 flex flex-col items-center justify-center gap-x-3">
                <UserCircleIcon className="h-28 w-28 text-gray-300" aria-hidden="true" />

                <button
                    type="button"
                    className=" rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                    Cambiar foto de perfil
                </button>
            </div>
            
            <div className="border-b border-gray-900/10 pb-12">
                <h3 className="mb-6 text-2xl font-semibold leading-7 text-gray-900">General:</h3>

                <div className="mt-6 flex flex-col items-start justify-center gap-x-3 ">

                    <label htmlFor="rol" className="block text-sm font-medium leading-6 text-gray-900">Rol:</label>

                    <div className="mt-2 w-full">
                        <select
                            id='rol'
                            name='rol'
                            autoComplete='rol-name'
                            { ...register('rol') }
                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6 cursor-pointer'
                        >
                            <option>Entrenador</option>
                            <option>Fisioterapeuta</option>
                            <option>Nutricionista</option>
                        </select>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Nombre(s)</label>
                    
                        <div className="mt-2">
                            <input 
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                { ...register('first-name', {
                                    require: {
                                        value: true,
                                        message: 'Nombre es requerido'
                                    }
                                }) }
                                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            />

                            { errors.first-name?.type === 'require && <sapan>'}
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Apellido(s)</label>
                    
                        <div className="mt-2">
                            <input 
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                { ...register('last-name') }
                                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex flex-col items-start justify-center gap-x-3 ">
                    <label htmlFor="genre" className="block text-sm font-medium leading-6 text-gray-900">Genero:</label>

                    <div className="mt-2 w-full">
                        <select
                            id='genre'
                            name='genre'
                            autoComplete='genre-name'
                            { ...register('genre') }
                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6 cursor-pointer'
                        >
                            <option>Masculino</option>
                            <option>Femenino</option>
                        </select>
                    </div>
                </div>

                <div className="mt-6 col-span-full">
                    <label htmlFor="benefits" className="block text-sm font-medium leading-6 text-gray-900">Beneficios: (opcional)</label>

                    <p className="mb-3 text-sm leading-6 text-gray-600">Cuéntale a tu usuario en max. 120 caracteres, cómo lo puedes ayudar.</p>

                    <div className="nt-2">
                        <textarea
                            name="benefits"
                            id="benefits"
                            rows={ 3 }
                            maxLength={ 120 }
                            defaultValue={ '' }
                            { ...register('benefits') }
                            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className=" mt-6 col-span-full">
                    <label htmlFor="biography" className="block text-sm font-medium leading-6 text-gray-900">Biografía: (opcional)</label>

                    <p className="mb-3 text-sm leading-6 text-gray-600">Cuéntale a tu usuario por qué eres su mejor opción.</p>

                    <div className="nt-2">
                        <textarea
                            name="biography"
                            id="biography"
                            rows={ 10 }
                            defaultValue={ '' }
                            { ...register('biography') }
                            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className=" mt-6 col-span-full">
                    <label htmlFor="education" className="block text-sm font-medium leading-6 text-gray-900">Educación: (opcional)</label>

                    <p className="mb-3 text-sm leading-6 text-gray-600">Escribe los título y/o certificados que tienes.</p>

                    <div className="mt-2">
                        <textarea
                            name="education"
                            id="education"
                            rows={ 10 }
                            defaultValue={ '' }
                            { ...register('education') }
                            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                
            </div>
            
            <div className="border-b border-gray-900/10 pb-12">
                <h3 className="mb-6 text-2xl font-semibold leading-7 text-gray-900">Información de contacto:</h3>

                <div className="mt-6 sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Correo Electrónico</label>

                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder='example@example.com'
                            autoComplete="email"
                            { ...register('email') }
                            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                         />
                    </div>
                </div>

                <div className="mt-6 sm:col-span-4">
                    <label htmlFor="tel" className="block text-sm font-medium leading-6 text-gray-900">Número de Celular:</label>

                    <div className="mt-2">
                        <input
                            id="tel"
                            name="tel"
                            type="tel"
                            maxLength={ 10 }
                            { ...register('tel') }
                            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                         />
                    </div>
                </div>

                <div className="mt-6 sm:col-span-4">
                    <p className="block text-sm font-medium leading-6 text-gray-900">Redes Sociales: (Opcional)</p>

                    <div className="w-1/2">
                        <div className="mt-2 flex justify-between">
                            <label htmlFor="social-media-instagram" className="mb-3 text-sm leading-6 text-gray-600">Instagram:</label>

                            <input
                                id="instagram-form"
                                name="instagram-form"
                                type="url"
                                placeholder="URL"
                                { ...register('instagram-form') }
                                className="block rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            />
                        </div>

                        <div className="mt-2 flex justify-between">
                            <label htmlFor="social-media-facebook" className="mb-3 text-sm leading-6 text-gray-600">Facebook:</label>

                            <input
                                id="facebook-form"
                                name="facebook-form"
                                type="url"
                                placeholder="URL"
                                { ...register('facebook-form') }
                                className="block rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            />
                        </div>

                        <div className="mt-2 flex justify-between">
                            <label htmlFor="social-media-x" className="mb-3 text-sm leading-6 text-gray-600">Twitter:</label>

                            <input
                                id="x-form"
                                name="x-form"
                                type="url"
                                placeholder="URL"
                                { ...register('twitter-form') }
                                className="block rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
                <h3 className="mb-6 text-2xl font-semibold leading-7 text-gray-900">Servicios:</h3>

                <div className="w-1/2">
                    <div className="mt-2 flex justify-between items-end">
                        <label htmlFor="face-to-face-classes">Clases Presenciales:</label>

                        <input 
                            id="face-to-face-classes"
                            name="face-to-face-classes"
                            type="checkbox"
                            { ...register('face-to-face-classes') }
                            className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>

                    <div className="mt-2 flex justify-between items-end">
                        <label htmlFor="online-classes">Clases Online:</label>

                        <input 
                            id="online-classes"
                            name="online-classes"
                            type="checkbox"
                            { ...register('online-classes') }
                            className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                    <div className="mt-2 flex justify-between items-end">
                        <label htmlFor="tools">Material de trabajo:</label>

                        <input 
                            id="tools"
                            name="tools"
                            type="checkbox"
                            { ...register('tools') }
                            className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                </div>

                <div className=" mt-6 col-span-full">
                    <label htmlFor="schedule" className="block text-sm font-medium leading-6 text-gray-900">Agenda: (opcional)</label>

                    <p className="mb-3 text-sm leading-6 text-gray-600">Escribe las horas laborales dentro de la semana.</p>

                    <div className="nt-2">
                        <textarea
                            name="schedule"
                            id="schedule"
                            rows={ 10 }
                            defaultValue={ '' }
                            { ...register('schedule') }
                            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className=" mt-6 col-span-full">
                    <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">Ubicación:</label>

                    <div className="nt-2">
                        <textarea
                            name="location"
                            id="location"
                            placeholder="Ciudad, País"
                            rows={ 1 }
                            defaultValue={ '' }
                            { ...register('location') }
                            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            </div>

            <div  className=" pb-12">
                <h3 className="mb-6 text-2xl font-semibold leading-7 text-gray-900">Precio:</h3>

                <div>
                    <p className="block text-sm font-medium leading-6 text-gray-900">Rango de precio</p>

                    <p className="mb-3 text-sm leading-6 text-gray-600">Valor en pesos colombianos.</p>

                    <div className="block sm:flex gap-6">
                        <label htmlFor="min-price" className="block text-sm font-medium leading-6 text-gray-900">Mínimo:</label>

                        <div className="mt-2">
                            <input
                                id="min-price"
                                name="min-price"
                                type="text"
                                placeholder='50.000'
                                { ...register('min-price') }
                                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            />
                        </div>

                        <label htmlFor="max-price" className="block text-sm font-medium leading-6 text-gray-900">Máximo:</label>

                        <div className="mt-2">
                            <input
                                id="max-price"
                                name="max-price"
                                type="text"
                                placeholder='150.000'
                                { ...register('max-price') }
                                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex justify-between items-end w-1/2">
                        <label htmlFor="free-class">Material de trabajo:</label>

                        <input 
                            id="free-class"
                            name="free-class"
                            type="checkbox"
                            { ...register('free-class') }                                
                            className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                </div>
            </div>

            {/* <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-buttonLink px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-hoverButtonLink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Iniciar Sesión</button>
            </div> */}
            <div className="mt-6 pb-12 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancelar</button>
        
                <button type="submit" className="w-1/3 rounded-md bg-buttonLink px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-hoverButtonLink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Terminar</button>
            </div>
        </div>
    </form>
    </>
  )
}

export default RegisterForm