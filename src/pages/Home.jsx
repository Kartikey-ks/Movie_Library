import MovieCards from "../components/MovieCards";
import { useState } from "react";
import { searchMovies } from "../services/api.js";

function Home() {
  const [searchQuery, setSearchQuery] = useState("John Wick");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
      const results = await searchMovies(searchQuery);
      setMovies(results);

    setLoading(false);
  };

  return (
    <div className="home p-4">
      <form onSubmit={handleSearch} className="search-form flex justify-center gap-2 mb-6">
        <input
          type="text"
          className="search-input px-4 py-2 rounded-md w-full max-w-md"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button bg-[#0170db] text-white px-4 py-2 rounded-md">
          Search
        </button>
      </form>

      {loading && <p className="text-center text-black">Loading...</p>}

      <div className="movies-grid flex flex-wrap justify-center gap-6">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCards movie={movie} key={movie.imdbID} />
          ))
        ) : (
          !loading && <p className="text-black text-center">No movies found</p>
        )}
      </div>
    </div>
  );
}

export default Home;
