import { UserCircleIcon } from '@heroicons/react/24/solid'

function Card (data) {
    return (
        <div className='cursor-pointer w-96 h-96 p-3 sm:ring-1 sm:ring-inset sm:ring-gray-500/10'>
            <figure className='h-1/2'>
                { data.data.avatar ? <img
                    src={ data.data.avatar }
                    alt="" 
                    className='w-full h-full rounded-xl object-cover'
                /> : < UserCircleIcon />}
            </figure>
            <p className="text-2xl px-2.5 font-semibold leading-7 text-gray-900">{ `${data.data.first_name} ${data.data.last_name}` }</p>
            <p className="text-sm px-2.5 font-medium leading-6 text-gray-600">{ data.data.rol }</p>
            <p className="text-sm px-2.5 leading-6 text-gray-600">{ data.data.location }</p>
            <p className="text-sm px-2.5 leading-6 text-gray-900">{ data.data.benefits }</p>
            <div className="flex justify-evenly items-center text-sm">
                <span className="text-sm px-2.5 font-medium leading-6 text-gray-600">{ `$${data.data.min_price} - $${data.data.max_price}` }</span>
                <p className="p-1 rounded-full flex justify-center w-32 text-sm font-bold leading-6 text-focus bg-focus/40">{ data.data.free_class  }</p>
            </div>
        </div>
    )
}

export { Card }