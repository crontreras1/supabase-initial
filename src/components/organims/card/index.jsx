import { RxAvatar } from "react-icons/rx"


function Card (data) {
    return (
            <div className='cursor-pointer w-72 h-96 p-3 ring-1 ring-inset ring-gray-500/10 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out'>
                <div className='h-1/2 relative'>
                    <figure className='w-full h-full'>
                        { data.data.avatar ? <img
                            src={ data.data.avatar }
                            alt="" 
                            className='w-full h-full rounded-xl object-cover'
                        /> : < RxAvatar className='w-full h-full object-cover' /> }
                    </figure>

                    { data.data.rol ? <p className="text-xs absolute left-2 bottom-2 font-medium leading-6 rounded-md bg-gray-50 px-2 py-0 text-gray-600 ring-1 ring-inset ring-gray-500/10">{ data.data.rol }</p> : <span className='hidden'></span> }
                </div>

                <div className='h-1/2 flex flex-col justify-evenly'>
                    { data.data.first_name ? <p className="text-xl px-2.5 font-semibold leading-7 text-gray-900">{ `${data.data.first_name} ${data.data.last_name}` }</p> : <span className='hidden' ></span> }
                    
                    { data.data.location ? <p className="text-sm px-2.5 leading-6 text-gray-600">{ data.data.location }</p> : <span className='hidden'></span> }
                    
                    { data.data.benefits ? <p className="text-xs px-2.5 leading-6 text-gray-900">{ data.data.benefits }</p> : <span className='hidden'></span> }
                    
                    <div className="flex justify-evenly items-center text-sm">
                        { data.data.min_price && data.data.max_price ? <span className="text-sm px-2.5 font-medium leading-6 text-gray-600">{ `$ ${data.data.min_price} - $ ${data.data.max_price}` }</span> : <span className='hidden'></span> }
                        
                        { data.data.free_class ? <p className="p-0 flex justify-center w-24 text-xs font-bold leading-6 text-primaryColor">1ra Clase Gratis</p> : <span className='hidden'></span> }
                    </div>
                </div>
            </div>
    )
}

export { Card }