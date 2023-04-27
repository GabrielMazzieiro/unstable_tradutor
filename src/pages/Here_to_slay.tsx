import { TopBar } from "../components"
import ShowCards from "../components/ShowCards"
import { htsCards } from "../db"

const HTSPage = () => {

    const title_list = ['Líder de Grupo', 'Monstro', 'Carta de Herói', 'Items', 'Items Amaldiçoados', 'Carta de Modificador', 'Carta Mágica', 'Carta de Desafio']

    const editions: string[] = []

    return (
     <main>
        <TopBar/>
        <img className='game-bg' src={require("../assets/backgrounds/bg_here_to_slay1.png")}/>
        {/* <p>HERE TO SLAY PAGE</p> */}
        <ShowCards cards={htsCards} titles={title_list} editions={editions}/>

     </main>
    )
}

export default HTSPage