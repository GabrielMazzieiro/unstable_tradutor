import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home, HLDPage, HTSPage, UUPage, LLUPage, WPPage, TTKOPage } from './pages'




function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hld" element={<HLDPage/>}/>
      <Route path="/hts" element={<HTSPage/>}/>
      <Route path="/uu" element={<UUPage/>}/>
      <Route path="/llu" element={<LLUPage/>}/>
      <Route path="/wp" element={<WPPage/>}/>
      <Route path="/ttko" element={<TTKOPage/>}/>
    </Routes>
  )
}

export default App
