import { TopBar } from "../components"
import ShowCards from "../components/ShowCards"
import { htsCards } from "../db"

const HTSPage = () => {

    const title_list = ['Party Leader', 'Monster', 'Hero Card', 'Items', 'Cursed Items', 'Modifier Card', 'Magic Card', 'Challenge Card']

    return (
     <main>
        <TopBar/>
        <p>HERE TO SLAY PAGE</p>
        <ShowCards cards={htsCards} titles={title_list}/>

     </main>
    )
}

export default HTSPage