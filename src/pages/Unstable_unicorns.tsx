import { useState } from "react"
import { CardFilter, TopBar } from "../components"
import ShowCards from "../components/ShowCards"
import { uuCards } from "../db"


const UUPage = () => {

    const title_list = [
    'Maldição',
    'Instantânea',
    'Unicórnio Básico',
    'Encantamento',
    'Unicórnio Supremo',
    'Mágica',
    'Bebê Unicórnio',
    'Unicórnio Mágico'
    ]

    const [editions, setEditions] = useState<string[]>([])

    return (
     <main>
        <TopBar/>
        <CardFilter cards={uuCards} setEditions={setEditions}/>
        <ShowCards cards={uuCards} titles={title_list} editions={editions}/>

     </main>
    )
}

export default UUPage