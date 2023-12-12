import { useEffect, useState } from 'react'
import { Navbar } from '../../components/organims/navbar'
import { Card } from '../../components/organims/card'
import { supabase } from '../../supabase/supabaseClient'

function PhysiotherapistsCards () {
    const [physiotherapists, setPhysiotherapists] = useState(null)

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
    
    return (
        <>
            <Navbar />
            
            <div className="h-full flex justify-center gap-10 flex-wrap sm:px-10 sm:justify-star">
                {
                    physiotherapists && 
                    physiotherapists.map (physiotherapist => {
                        return <Card key={ physiotherapist.id } data={ physiotherapist }/>
                    })
                }
            </div>
        </>
  )
}

export { PhysiotherapistsCards }