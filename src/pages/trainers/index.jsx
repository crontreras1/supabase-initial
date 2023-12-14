import { useEffect, useState } from 'react'
import { Navbar } from '../../components/organims/navbar'
import { Card } from '../../components/organims/card'
import { supabase } from '../../supabase/supabaseClient'
import { Footer } from '../../components/organims/footer'

function Trainers () {
    const [trainers, setTrainers] = useState(null)

    useEffect(() => {
        async function fetchCardsData () {
            const { data, error } = await supabase
            .from('trainers')
            .select()
            .eq('status', false) 
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
            
            <div className="h-full flex justify-center gap-10 flex-wrap sm:px-10 sm:justify-star">
                {
                    trainers && 
                    trainers.map(trainer => {
                        return <Card key={ trainer.id } data={ trainer }/>
                    })
                }
            </div>

            <Footer />
        </>
  )
}

export { Trainers }