import { hdlCards } from '../db/hld'
import { getCardImage } from '../utils'
import CardModal from './CardModal'

const ShowCards = () => {
    return(
        <div className="row gy-3">

        {hdlCards.map(item => 
            <>
                <div className='col col-4 col-sm-3 col-lg-2 col-xxl-1'>
                    <button data-bs-toggle="modal" data-bs-target='#card'>
                        <img src={getCardImage(item.card_id)} className="card-img-top" alt={item.card_name}/>
                    </button>
                </div>
            
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
                                teste
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )}
        </div>

    )
}

export default ShowCards