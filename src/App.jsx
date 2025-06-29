import './App.css'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <NavBar />
      <main className="main-content overflow-hidden">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </>
  )
}

export default App
