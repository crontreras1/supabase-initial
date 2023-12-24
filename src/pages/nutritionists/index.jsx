import { useEffect, useState } from 'react'
import { Navbar } from '../../components/organims/navbar'
import { Card } from '../../components/organims/card'
import { supabase } from '../../supabase/supabaseClient'

function NutritionistsCards () {
    const [nutritionists, setNutritionists] = useState([])

    useEffect(() => {
        async function fetchNutritionistsCardsData () {
            const { data, error } = await supabase
            .from('trainers')
            .select()
            .eq('rol', 'Nutricionista') 
            if (error) {
                throw error
            }
            if (data) {
                setNutritionists(data)
            }
        }
        fetchNutritionistsCardsData()
    }, [])

    const generateRandomNutritionistsCard = (length) => {
        const order = Array.from({ length }, (_, index) => index)
        order.sort(() => Math.random() - 0.5)
        return order
    }

    const randomNutritionistsCard = generateRandomNutritionistsCard(nutritionists.length)
    
    return (
        <>
            <Navbar />
            
            <div className="h-full flex justify-center gap-10 flex-wrap sm:px-10 sm:justify-star">
                {
                    randomNutritionistsCard.map((index) => {
                        const nutritionist = nutritionists[index]
                        return <Card key={ nutritionist.id } data={ nutritionist }/>
                    })
                }
            </div>
        </>
  )
}

export { NutritionistsCards }