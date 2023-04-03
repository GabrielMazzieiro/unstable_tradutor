import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home, HLDPage, HTSPage, UUPage, LLUPage, WPPage, TTKOPage } from './pages'




function App() {

  return (
    <Routes>
      <Route key="home" path="/" element={<Home/>}/>
      <Route key="hld" path="/hld" element={<HLDPage/>}/>
      <Route key="hts" path="/hts" element={<HTSPage/>}/>
      <Route key="uu" path="/uu" element={<UUPage/>}/>
      <Route key="hlluome" path="/llu" element={<LLUPage/>}/>
      <Route key="wp" path="/wp" element={<WPPage/>}/>
      <Route key="ttko" path="/ttko" element={<TTKOPage/>}/>
    </Routes>
  )
}

export default App
