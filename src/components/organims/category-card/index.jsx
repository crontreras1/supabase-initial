import nutritionImage from '../../../assets/category-nutrition.jpg'
import trainingImage from '../../../assets/category-personal-trainer.jpg'
import physiotherapyImage from '../../../assets/category-physiotherapy.jpg'

function CategoryCard ({ img, name}) {
    const categoryImg = {
        nutrition: nutritionImage,
        training: trainingImage,
        physiotherapy: physiotherapyImage
    }

    const categoryName = {
        nutrition: "NUTRICIÓN",
        training: "ENTRENAMIENTO",
        physiotherapy: "FISIOTERAPIA"
    }

    return (
        <div className=' w-80 h-96 cursor-pointer rounded-lg'>
            <figure className='relative mb-4 w-full h-full bg-cover bg-center rounded-lg'>
                <div class=" w-full h-full absolute inset-0 bg-black opacity-50"></div>

                <img className='w-full h-full object-cover' src={ categoryImg[img] } alt='' />
                <div className='absolute inset-0 flex items-center justify-center'>
                    <h3 className='text-2xl font-bold leading-9 tracking-tight text-white'>{ categoryName[name] }</h3>
                </div>
            </figure>
        </div>
    )
}

export { CategoryCard }