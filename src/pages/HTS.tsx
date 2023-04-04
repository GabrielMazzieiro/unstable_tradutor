import { TopBar } from "../components"
import ShowCards from "../components/ShowCards"
import { htsCards } from "../db"

const HTSPage = () => {

    return (
     <main>
        <TopBar/>
        <p>HERE TO SLAY PAGE</p>
        <ShowCards cards={htsCards}/>

     </main>
    )
}

export default HTSPage