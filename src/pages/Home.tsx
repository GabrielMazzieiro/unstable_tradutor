import { GameCards, TopBar } from "../components"

const Home = () => {
    return(
    <main>
      <TopBar/>
      <div>
        <h1>Bem vindo ao Unstable Tradutor!</h1>
        <p>Esse projeto foi desenvolvido como forma de estudo de programação e com o intuito de ajudar pessoas que não dominam o inglês à jogar os jogos da Unstable Games</p>
        <p>Se quiser dar uma força ou simplesmente ver o projeto, acesse o github pelo link ali em cima!</p>
        <p>Escolha seu jogo!!</p>
      </div>
      <GameCards/>
    </main>
    )

}

export default Home