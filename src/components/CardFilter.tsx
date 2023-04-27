import React, { Dispatch, SetStateAction } from "react";
import { ICardData } from "./ShowCards.types";

interface ICardFilter{
    cards: ICardData[]
    setEditions: Dispatch<SetStateAction<string[]>>;
}


const CardFilter = ({cards, setEditions}: ICardFilter) => {

    
    function handleCheckbox(event: { target: { value: string; checked: boolean } }){

        const {value, checked} = event.target

        if(checked) {
            setEditions(old => [...old, value])
        } else {
            setEditions( old => {
                return [...old.filter(
                    element => element !== value
                    )]
            }
                )
        }
    }


    

    return (
        <>
        <form className="gamefilter d-flex" role="search">
            <div className="row gamefilter-row gy-3">
                <p className="filter-title">Jogos Básicos</p>
                <div className="filter-edition">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="Base Game" onChange={handleCheckbox} id="Jogo Clássico"/>
                        <label className="form-check-label" htmlFor="Jogo Clássico">
                            Base Game
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="NSFW Base Deck" onChange={handleCheckbox} id="NSFW Base Deck"/>
                        <label className="form-check-label" htmlFor="NSFW Base Deck">
                            NSFW
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="Control Base Deck" onChange={handleCheckbox} id="Control Base Deck"/>
                        <label className="form-check-label" htmlFor="Control Base Deck">
                            Control
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="Chaos Base Deck" onChange={handleCheckbox} id="Chaos Base Deck"/>
                        <label className="form-check-label" htmlFor="Chaos Base Deck">
                            Chaos
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="Travel" onChange={handleCheckbox} id="Travel" disabled/>
                        <label className="form-check-label" htmlFor="Travel">
                            Travel
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="For Kids" onChange={handleCheckbox} id="For Kids" disabled/>
                        <label className="form-check-label" htmlFor="For Kids">
                            For Kids
                        </label>
                    </div>
                </div>  
            </div>
            <div className="row gamefilter-row gy-3">
                <p className="filter-title">Expansões</p>
                <div className="filter-edition">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="NSFWexpansion" disabled/>
                        <label className="form-check-label" htmlFor="NSFWexpansion">
                            NSFW
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="Apocalipse Arco-Iris" disabled/>
                        <label className="form-check-label" htmlFor="Apocalipse Arco-Iris">
                            Apocalipse Arco-Iris
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="Dragões" disabled/>
                        <label className="form-check-label" htmlFor="Dragões">
                            Dragões
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="Unicorns of Legend" disabled/>
                        <label className="form-check-label" htmlFor="Unicorns of Legend">
                            Unicorns of Legend
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="Adventures" disabled/>
                        <label className="form-check-label" htmlFor="Adventures">
                            Adventures
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="Christmas" disabled/>
                        <label className="form-check-label" htmlFor="Christmas">
                            Christmas
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="Nightmares" disabled/>
                        <label className="form-check-label" htmlFor="Nightmares">
                            Nightmares
                        </label>
                    </div>
                </div>
            </div>
        </form>

        <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Nome da Carta" aria-label="Search"/>
                <button className="btn btn-outline-success" type="button">Procurar</button>
        </form>
        </>
      )
}

export default CardFilter