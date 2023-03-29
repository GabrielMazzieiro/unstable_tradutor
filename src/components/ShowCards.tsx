import { hdlCards } from '../db/hld'
import { getCardImage } from '../utils'
import CardModal from './CardModal'
import { useState } from 'react'
import type { ICardData } from './ShowCards.types'

const ShowCards = () => {

    const [data, setData] = useState<ICardData>()

    return(
        <>
        <div className="row gy-3">

        {hdlCards.map(item => 
                <div  className='col col-4 col-sm-3 col-lg-2 col-xxl-1 card-back'>
                    <button className='card-button' onClick={() => setData(item)} data-bs-toggle="modal" data-bs-target='#card'>
                        <img src={getCardImage(item.card_id)} className="card-img-top" alt={item.card_name}/>
                    </button>
                </div>
            
        )}
        </div>
        {data && <CardModal item={data}/>}
        </>
    )
    
}

export default ShowCards