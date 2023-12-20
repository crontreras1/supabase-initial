import nutritionImage from '../../../assets/images/category-nutrition.jpg'
import trainingImage from '../../../assets/images/category-personal-trainer.jpg'
import physiotherapyImage from '../../../assets/images/category-physiotherapy.jpg'

function CategoryCard ({ img, name}) {
    const categoryImg = {
        nutrition: nutritionImage,
        training: trainingImage,
        physiotherapy: physiotherapyImage
    }

    const categoryName = {
        nutrition: "Nutrición",
        training: "Entrenamiento",
        physiotherapy: "Fisioterapia"
    }

    return (
        <div className='w-56 h-56 md:h-96 cursor-pointer shadow-md hover:shadow-lg transition duration-300 ease-in-out sm:w-96 sm:h-96'>
            <figure className='relative w-full h-full bg-cover bg-center ring-1 rounded-lg'>
                <div class=" w-full h-full absolute inset-0 bg-black opacity-50 rounded-lg"></div>

                <img className='w-full h-full object-cover rounded-lg' src={ categoryImg[img] } alt='' />
                
                <div className='w-full absolute inset-0 flex items-center justify-center rounded-lg'>
                    <h3 className='text-3xl font-bold leading-9 tracking-tight text-white sm:text-5xl'>{ categoryName[name] }</h3>
                </div>
            </figure>
        </div>
    )
}

export { CategoryCard }