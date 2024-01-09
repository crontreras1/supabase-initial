import { useEffect, useState } from 'react'
import { Navbar } from '../../components/organims/navbar'
import { Card } from '../../components/organims/card'
import { supabase } from '../../supabase/supabaseClient'
import { Footer } from '../../components/organims/footer'
import { Link } from 'react-router-dom'
import { SearchTrainers } from '../../components/templates/SearchTrainers'

function Trainers () {
    const [trainers, setTrainers] = useState([])

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

    // Generate random cards
    const generateRandomCards = (length) => {
        const order = Array.from({ length }, (_, index) => index)
        order.sort(() => Math.random() - 0.5)
        return order
    };
    
    const randomCards = generateRandomCards(trainers.length)
    
    console.log(trainers);
    
    return (
        <>
            <Navbar />

            <SearchTrainers />
            
            <div className="h-full flex justify-center gap-10 flex-wrap sm:px-10 sm:justify-star">
                {/* `profile/${data.data.id_profile}` */}
                
                {
                    randomCards.map((index) => {
                    const trainer = trainers[index]
                    return <Link to={ `profile/${trainers[index].id_profile}` }><Card key={trainer.id} data={trainer} /> </Link>

                    })
                }
            </div>

            <Footer />
        </>
  )
}

export { Trainers }