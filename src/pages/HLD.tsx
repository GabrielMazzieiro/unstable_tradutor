import { TopBar } from "../components"
import ShowCards from "../components/ShowCards"
import { hldCards } from "../db"

const HLDPage = () => {

    return (
     <main>
        <TopBar/>

        <p>HAPPY LITTLE DINOSAURS PAGE</p>
        <ShowCards cards={hldCards}/>

     </main>
    )
}

export default HLDPage