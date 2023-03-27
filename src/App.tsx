import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home, HLDPage } from './pages'




function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hld" element={<HLDPage/>}/>

    </Routes>
  )
}

export default App
