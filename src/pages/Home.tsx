import { GameCards, TopBar } from "../components"

const Home = () => {
    return(
    <main>
      <TopBar/>
      <div>
        <h1>Welcome to Unstable Tradutor!!</h1>
        <p>This webpage was made to help people play 'unstable games'`s games</p>
        <p>Pick your game!</p>
      </div>
      <GameCards/>
    </main>
    )

}

export default Home