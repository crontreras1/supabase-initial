import { useEffect, useState } from 'react'
import { Navbar } from '../../components/organims/navbar'
import { Card } from '../../components/organims/card'
import { supabase } from '../../supabase/supabaseClient'

function PersonalTrainersCards () {
    const [personalTrainers, setPersonalTrainers] = useState([])

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

    const generateRandomPersonalTrainersCard = (length) => {
        const order = Array.from({ length }, (_, index) => index)
        order.sort(() => Math.random() - 0.5)
        return order
    }

    const randomPersonalTrainerssCard = generateRandomPersonalTrainersCard(personalTrainers.length)
    
    return (
        <>
            <Navbar />
            
            <div className="h-full flex justify-center gap-10 flex-wrap sm:px-10 sm:justify-star">
                {/* {
                    personalTrainers && 
                    personalTrainers.map (personalTrainer => {
                        return <Card key={ personalTrainer.id } data={ personalTrainer }/>
                    })
                } */}
                {
                    randomPersonalTrainerssCard.map((index) => {
                        const personalTrainer = personalTrainers[index]
                        return <Card key={ personalTrainer.id } data={ personalTrainer }/>
                    })
                }
            </div>
        </>
  )
}

export { PersonalTrainersCards }