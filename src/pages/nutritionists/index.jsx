import { useEffect, useState } from 'react'
import { Navbar } from '../../components/organims/navbar'
import { Card } from '../../components/organims/card'
import { supabase } from '../../supabase/supabaseClient'

function NutritionistsCards () {
    const [nutritionists, setNutritionists] = useState(null)

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
    
    return (
        <>
            <Navbar />
            
            <div className="h-full flex justify-center gap-10 flex-wrap sm:px-10 sm:justify-star">
                {
                    nutritionists && 
                    nutritionists.map (nutritionist => {
                        return <Card key={ nutritionist.id } data={ nutritionist }/>
                    })
                }
            </div>
        </>
  )
}

export { NutritionistsCards }