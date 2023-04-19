import { TopBar } from "../components"
import ShowCards from "../components/ShowCards"
import uuCards from "../db/uu"

const UUPage = () => {

    const title_list = [
    'Maldição',
    'Instantânea',
    'Unicórnio Básico',
    'Encantamento',
    'Unicórnio Supremo',
    'Mágica',
    'Bebê Unicórnio',
    'Unicórnio Mágico']

    return (
     <main>
        <TopBar/>
        <p>UNSTABLE UNICORNS PAGE</p>
        <ShowCards cards={uuCards} titles={title_list}/>


     </main>
    )
}

export default UUPage