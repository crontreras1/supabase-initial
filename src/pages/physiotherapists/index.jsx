import { useEffect, useState } from 'react'
import { Navbar } from '../../components/organims/navbar'
import { Card } from '../../components/organims/card'
import { supabase } from '../../supabase/supabaseClient'
import { SearchTrainers } from '../../components/templates/SearchTrainers'

function PhysiotherapistsCards () {
    const [physiotherapists, setPhysiotherapists] = useState([])

    useEffect(() => {
        async function fetchPhysiotherapistsCardsData () {
            const { data, error } = await supabase
            .from('trainers')
            .select()
            .eq('rol', 'Fisioterapeuta') 
            if (error) {
                throw error
            }
            if (data) {
                setPhysiotherapists(data)
            }
        }
        fetchPhysiotherapistsCardsData()
    }, [])

    const generateRandomPhysiotherapistsCard = (length) => {
        const order = Array.from({ length }, (_, index) => index)
        order.sort(() => Math.random() - 0.5)
        return order
    }

    const randomPhysiotherapistsCard = generateRandomPhysiotherapistsCard(physiotherapists.length)
    
    return (
        <>
            <Navbar />

            <SearchTrainers />
        
            <div className="h-full flex justify-center gap-10 flex-wrap sm:px-10 sm:justify-star">
                {/* {
                    physiotherapists && 
                    physiotherapists.map (physiotherapist => {
                        return <Card key={ physiotherapist.id } data={ physiotherapist }/>
                    })
                } */}
                {
                    randomPhysiotherapistsCard.map((index) => {
                        const physiotherapist = physiotherapists[index]
                        return <Card key={ physiotherapist.id } data={ physiotherapist }/>
                    })
                }
            </div>
        </>
  )
}

export { PhysiotherapistsCards }