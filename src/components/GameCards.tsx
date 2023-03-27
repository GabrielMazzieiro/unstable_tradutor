import unstable_unicorn_logo from '../assets/logos/unstable_unicorns_logo.jpeg'
import here_to_slay_logo from '../assets/logos/hts_logo.jpeg'
import happy_little_dinosaurs_logo from '../assets/logos/hld_logo.jpeg'
import llamas_unleashed_logo from '../assets/logos/llu_logo.jpg'
import wrong_party_logo from '../assets/logos/wp_logo.jpeg'
import tic_tac_ko from '../assets/logos/tic-tac-ko.jpg'


const GameCards = () => {
    return(
        <div className="row row-cols-1 row-cols-2 row-cols-md-3 gy-4">
            <div className='col'>
                <div className="card">
                    <img src={unstable_unicorn_logo} className="card-img-top" alt="teste"/>
                </div>
            </div>
            <div className='col'>
                <div className="card" >
                    <img src={here_to_slay_logo} className="card-img-top" alt="teste"/>
                </div>
            </div>
            <div className='col'>
                <div className="card" >
                    <img src={happy_little_dinosaurs_logo} className="card-img-top" alt="teste"/>
                </div>
            </div>
            <div className='col'>
                <div className="card" >
                    <img src={llamas_unleashed_logo} className="card-img-top" alt="teste"/>
                </div>
            </div>
            <div className='col'>
                <div className="card" >
                    <img src={wrong_party_logo} className="card-img-top" alt="teste"/>
                </div>
            </div>
            <div className='col'>
                <div className="card" >
                    <img src={tic_tac_ko} className="card-img-top" alt="teste"/>
                </div>
            </div>
        </div>
    )
}

export default GameCards