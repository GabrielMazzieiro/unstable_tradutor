import { useState } from "react"
import { CardFilter, TopBar } from "../components"
import ShowCards from "../components/ShowCards"
import { hldCards, htsCards, uuCards } from "../db"
import { ICardData } from "../components/ShowCards.types";
import { IGameData, IGameInfo, IGamePage } from "./Games.types";

const GamePage = ({game}: IGamePage) => {

    const [editions, setEditions] = useState<string[]>([])  
    const [search, setSearch] = useState<string>('')
    const [filteredResults, setFilteredResults] = useState<ICardData[]>([])

    const gameInfo: IGameInfo = {
        hld: {
            cards: hldCards,
        },
        uu: {
            cards: uuCards,
        },
        hts: {
            cards: htsCards,
        }
    }

    const getKeyValue = <T extends object, U extends keyof T>(obj: T, key: U) => obj[key];
    const gameData: IGameData = getKeyValue(gameInfo, game)

    const title_list: string[] = []
    const base_editions: string[] = []
    const expansions: string[] = []

    gameData.cards.map(element => {
        if (!title_list.includes(element.card_type_br)) {
            title_list.push(element.card_type_br)
    }
        if (element.card_expansion === false && !base_editions.includes(element.card_edition)){
        base_editions.push(element.card_edition)
    } 
        if (element.card_expansion === true && !expansions.includes(element.card_edition)){
        expansions.push(element.card_edition)
    }
    }); 

    return (
     <main>
        <TopBar/>

        <CardFilter 
            base_editions={base_editions}
            expansions={expansions} 
            setEditions={setEditions} 
            search={search}
            setSearch={setSearch}
            cards={gameData.cards}
            setFilteredResults={setFilteredResults}
        />

        <ShowCards 
        cards={gameData.cards} 
        titles={title_list} 
        editions={editions}
        search={search}
        filteredResults={filteredResults}
        />

     </main>
    )
}

export default GamePage