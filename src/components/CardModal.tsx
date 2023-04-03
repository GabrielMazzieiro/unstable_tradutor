
import React from "react"
import { getCardImage } from "../utils"
import type { ICardData } from './ShowCards.types'

interface CardModalProps {
    data: ICardData;
  }

const CardModal = ({data}:CardModalProps) => {
    return(
        <div className="modal fade" id="card" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">{data.card_name}</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                            </div>
                            <div className="modal-body">
                                <img src={getCardImage(data.card_id)} className="modal-img" alt={data.card_name}/>
                                <div className='modal-infos'>
                                    <div className='modal-data original'>
                                        <h1>Original</h1>
                                        <p>Name: {data.card_name}</p>
                                        <p>Type: {data.card_type}</p>
                                        {data.card_effect && <p>Effect: {data.card_effect}</p>}
                                        {data.card_flavor && <p>Flavor Text: {data.card_flavor}</p>}
                                    </div>
                                    <div className='modal-data translated'>
                                        <h1>Tradução</h1>
                                        <p>Nome: {data.card_name_br}</p>
                                        <p>Tipo: {data.card_type_br}</p>
                                        {data.card_effect_br && <p>Efeito: {data.card_effect_br}</p>}
                                        {data.card_flavor_br && <p>Flavor Text: {data.card_flavor_br}</p>}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default CardModal