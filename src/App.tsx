import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home, LLUPage, WPPage, TTKOPage } from './pages'
import GamePage from './pages/Games'




function App() {

  return (
    <Routes>
      <Route key="home" path="/" element={<Home/>}/>
      <Route key="hld" path="/hld" element={<GamePage game={"hld"}/>}/>
      <Route key="hts" path="/hts" element={<GamePage game={"hts"}/>}/>
      <Route key="uu" path="/uu" element={<GamePage game={"uu"}/>}/>
      <Route key="hlluome" path="/llu" element={<LLUPage/>}/>
      <Route key="wp" path="/wp" element={<WPPage/>}/>
      <Route key="ttko" path="/ttko" element={<TTKOPage/>}/>
    </Routes>
  )
}

export default App
