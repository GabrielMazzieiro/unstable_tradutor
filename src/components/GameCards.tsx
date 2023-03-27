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
                    <a href='/uu'>
                        <img src={unstable_unicorn_logo} className="card-img-top" alt="Untable Unicorns"/>
                    </a>
                </div>
            </div>
            <div className='col'>
                <div className="card" >
                    <a href='/hts'>
                        <img src={here_to_slay_logo} className="card-img-top" alt="Here To Slay"/>
                    </a>
                </div>
            </div>
            <div className='col'>
                <div className="card" >
                    <a href='/hld'>
                        <img src={happy_little_dinosaurs_logo} className="card-img-top" alt="Happy Little Dinosaurs"/>
                    </a>
                </div>
            </div>
            <div className='col'>
                <div className="card" >
                    <a href='llu'>
                        <img src={llamas_unleashed_logo} className="card-img-top" alt="Llamas Unleashed"/>
                    </a>
                </div>
            </div>
            <div className='col'>
                <div className="card" >
                    <a href='/wp'>
                        <img src={wrong_party_logo} className="card-img-top" alt="Wrong Party"/>
                    </a>
                </div>
            </div>
            <div className='col'>
                <div className="card" >
                    <a href='/ttko'>
                        <img src={tic_tac_ko} className="card-img-top" alt="Tic Tac K.O"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default GameCards