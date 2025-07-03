import './App.css'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import Register from './pages/Register'
import Login from "./pages/Login";
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
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  )
}

export default App
