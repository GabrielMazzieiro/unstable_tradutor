import { TopBar } from "../components"
import ShowCards from "../components/ShowCards"
import { htsCards } from "../db"

const HTSPage = () => {

    const title_list = ['Líder de Grupo', 'Monstro', 'Carta de Herói', 'Items', 'Items Amaldiçoados', 'Carta de Modificador', 'Carta Mágica', 'Carta de Desafio']

    return (
     <main>
        <TopBar/>
        <p>HERE TO SLAY PAGE</p>
        <ShowCards cards={htsCards} titles={title_list}/>

     </main>
    )
}

export default HTSPage