import { useEffect, useState } from 'react'
import Navbar from '../../components/organims/navbar'
import { Card } from '../../components/organims/card'
import { supabase } from '../../supabase/supabaseClient'

function Trainers () {
    const [trainers, setTrainers] = useState(null)

    useEffect(() => {
        async function fetchCardsData () {
            const { data, error } = await supabase
            .from('trainers')
            .select()
            .eq('status', true) 
            if (error) {
                throw error
            }
            if (data) {
                setTrainers(data)
            }
        }
        fetchCardsData()
    }, [])
    
    return (
        <>
            <Navbar />
            
            <div className="h-full flex px-10 justify-star gap-10 flex-wrap">
                {
                    trainers && 
                    trainers.map(trainer => {
                        return <Card key={ trainer.id } data={ trainer }/>
                    })
                }
            </div>
        </>
  )
}

export { Trainers }