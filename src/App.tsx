import './App.css'
import {GameCards, TopBar} from './components'


function App() {

  return (
    <main>
      <TopBar/>
      <div>
        <h1>Welcome to Unstable Tradutor!!</h1>
        <p>This webpage was made to help people translate unstable games`s games</p>
        <p>Choose our game!</p>
      </div>
      <GameCards/>
    </main>
  )
}

export default App
