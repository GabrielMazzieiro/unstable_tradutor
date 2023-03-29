
import { getCardImage } from "../utils"
import type { ICardData } from './ShowCards.types'


const CardModal = ({item}:ICardData) => {
    return(
        <div className="modal fade" id="card" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">{item.card_name}</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                            </div>
                            <div className="modal-body">
                                <img src={getCardImage(item.card_id)} className="modal-img" alt={item.card_name}/>
                                <div className='modal-infos'>
                                    <div className='modal-data original'>
                                        <h1>Original</h1>
                                        <p>Name: {item.card_name}</p>
                                        <p>Type: {item.card_type}</p>
                                        {item.card_flavor && <p>Flavor Text: {item.card_flavor}</p>}
                                        {item.card_effect && <p>Effect: {item.card_effect}</p>}
                                    </div>
                                    <div className='modal-data translated'>
                                        <h1>Translated</h1>
                                        <p>Name: {item.card_name}</p>
                                        <p>Type: {item.card_type}</p>
                                        {item.card_flavor && <p>Flavor Text: {item.card_flavor}</p>}
                                        {item.card_effect && <p>Effect: {item.card_effect}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default CardModal