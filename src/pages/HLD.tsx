import { TopBar } from "../components"
import ShowCards from "../components/ShowCards"
import { hldCards } from "../db"


const HLDPage = () => {

    const title_list = ['Carta de Desastre', 'Carta de Ponto', 'Carta Instantânea']

    return (
     <main>
        <TopBar/>

        <p>HAPPY LITTLE DINOSAURS PAGE</p>
        <ShowCards cards={hldCards} titles={title_list}/>

     </main>
    )
}

export default HLDPage