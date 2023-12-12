import { useEffect, useState } from 'react'
import { Navbar } from '../../components/organims/navbar'
import { Card } from '../../components/organims/card'
import { supabase } from '../../supabase/supabaseClient'

function PersonalTrainersCards () {
    const [personalTrainers, setPersonalTrainers] = useState(null)

    useEffect(() => {
        async function fetchPersonalTrainersCardsData () {
            const { data, error } = await supabase
            .from('trainers')
            .select()
            .eq('rol', 'Entrenador') 
            if (error) {
                throw error
            }
            if (data) {
                setPersonalTrainers(data)
            }
        }
        fetchPersonalTrainersCardsData()
    }, [])
    
    return (
        <>
            <Navbar />
            
            <div className="h-full flex justify-center gap-10 flex-wrap sm:px-10 sm:justify-star">
                {
                    personalTrainers && 
                    personalTrainers.map (personalTrainer => {
                        return <Card key={ personalTrainer.id } data={ personalTrainer }/>
                    })
                }
            </div>
        </>
  )
}

export { PersonalTrainersCards }