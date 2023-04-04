import { getCardImage } from '../utils'
import CardModal from './CardModal'
import { useState } from 'react'
import type { ICardData } from './ShowCards.types'

interface ShowCardProps{
    cards: [ICardData];
}


const ShowCards = ({cards}:ShowCardProps) => {

    const [data, setData] = useState<ICardData>()

    return(
        <>
        <div className="row gy-3">

        {cards.map(item => 
                <div  className='col col-4 col-sm-3 col-lg-2 col-xxl-1 card-back'>
                    <button className='card-button' onClick={() => setData(item)} data-bs-toggle="modal" data-bs-target='#card'>
                        <img src={getCardImage(item.card_id, item.game)} className="card-img-top" alt={item.card_name}/>
                    </button>
                </div>
            
        )}
        </div>
        {data && <CardModal data={data}/>}
        </>
    )
    
}

export default ShowCards