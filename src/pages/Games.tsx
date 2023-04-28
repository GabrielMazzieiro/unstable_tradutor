import { useState } from "react"
import { CardFilter, TopBar } from "../components"
import ShowCards from "../components/ShowCards"
import { hldCards, htsCards, uuCards } from "../db"
import { ICardData } from "../components/ShowCards.types";


interface IGamePage{
    game: string;
}

interface IGameData{
    cards: ICardData[],
}

interface IGameInfo{
    hld: IGameData
    uu: IGameData
    hts: IGameData
}

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

    const getKeyValue = <T extends object, U extends keyof T>(key: U) => (obj: T) => obj[key];
    const gameData: IGameData = getKeyValue(game)(gameInfo)

    const title_list: string[] = []
    const base_editions: string[] = []
    const expansions: string[] = []

    gameData.cards.map(element => {
        if (!title_list.includes(element.card_type_br)) {
            title_list.push(element.card_type_br)
    } else if (element.card_expansion == false && !base_editions.includes(element.card_edition)){
        base_editions.push(element.card_edition)
    } else if (element.card_expansion == true && !base_editions.includes(element.card_edition)){
        base_editions.push(element.card_edition)
    }
    }); 

    console.log(gameData)

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