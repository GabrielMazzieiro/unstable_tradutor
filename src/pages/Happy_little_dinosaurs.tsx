import { TopBar } from "../components"
import ShowCards from "../components/ShowCards"
import { hldCards } from "../db"


const HLDPage = () => {

    const title_list = ['Carta de Desastre', 'Carta de Ponto', 'Carta Instantânea']

    const editions: string[] = []


    return (
     <main>
        <TopBar/>
        <img className='game-bg' src={require("../assets/backgrounds/bg_happy_little_dinosaur.png")}/>
        {/* <p>HAPPY LITTLE DINOSAURS PAGE</p> */}
        <ShowCards cards={hldCards} titles={title_list} editions={editions}/>

     </main>
    )
}

export default HLDPage