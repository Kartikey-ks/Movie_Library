import './App.css'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import Register from './pages/Register'
import Login from "./pages/Login"
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import MovieInfo from './pages/MovieInfo'
import SearchBar from './components/SearchBar'
import { useState } from 'react'

import { searchMovies } from './services/api'  // ✅ use your API

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(query) {
    if (!query) return;
    setLoading(true);
    try {
      const results = await searchMovies(query); // 🔎 fetch movies
      setSearchResults(results || []);
    } catch (err) {
      console.error("Search error:", err);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <NavBar />
      <SearchBar onSearch={handleSearch} />

      <main className="main-content overflow-hidden">
        <Routes>
          <Route path="/" element={<Home movies={searchResults} loading={loading} />} />
          <Route path="/home" element={<Home movies={searchResults} loading={loading} />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie/:id" element={<MovieInfo />} />
        </Routes>
      </main>
    </>
  )
}

export default App;
