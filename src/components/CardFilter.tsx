import React, { Dispatch, SetStateAction, useEffect } from "react";
import { ICardData } from "./ShowCards.types";

interface ICardFilter{
    base_editions: string[]
    expansions: string[]
    setEditions: Dispatch<SetStateAction<string[]>>;
    search: string
    setSearch: Dispatch<SetStateAction<string>>;
    cards: ICardData[]
    setFilteredResults: Dispatch<SetStateAction<ICardData[]>>
}


const CardFilter = ({base_editions, expansions, setEditions, search, setSearch, cards, setFilteredResults}: ICardFilter) => {

    
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

    function handleSearchbox(event: { target: { value: React.SetStateAction<string>; }; }){
        setSearch(event.target.value)
    }

    if (search !== ''){
        useEffect(() => {
            setFilteredResults(
                cards.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(search.toLowerCase())
                }));
            },[search, cards])

        }

    return (
        <>
        <form className="gamefilter d-flex" role="search">
            <div className="row gamefilter-row gy-3">
                <p className="filter-title">Jogos Básicos</p>
                <div className="filter-edition">
                    {base_editions.map(edition => {
                        return (
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={edition} onChange={handleCheckbox} id={edition}/>
                                <label className="form-check-label" htmlFor={edition}>
                                    {edition}
                                </label>
                            </div>
                        )
                    })}        
                </div>  
            </div>
            <div className="row gamefilter-row gy-3">
                <p className="filter-title">Expansões</p>
                <div className="filter-edition">
                {expansions.map(edition => {
                        return (
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={edition} onChange={handleCheckbox} id={edition}/>
                                <label className="form-check-label" htmlFor={edition}>
                                    {edition}
                                </label>
                            </div>
                        )
                    })}     
                </div>
            </div>
        </form>

        <form className="d-flex" role="search">
                <p>Buscar por Nome ou Palavra Chave</p>
                <input className="form-control me-2" type="search" onChange={handleSearchbox} placeholder="Pelo menos 3 caracteres" aria-label="Search"/>
                <button className="btn btn-outline-success" type="button">Procurar</button>
        </form>
        </>
      )
}

export default CardFilter