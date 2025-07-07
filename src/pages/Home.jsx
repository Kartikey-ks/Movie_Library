import MovieCards from "../components/MovieCards";
import { useState, useEffect } from "react"; // ✅ useEffect used inside component
import { searchMovies } from "../services/api.js";
import { doc, getDoc, setDoc } from "firebase/firestore"; // ✅ fixed import
import { auth, db } from "../services/firebase.js";
import { onAuthStateChanged } from "firebase/auth";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ New state to store favourites
  const [favourites, setFavourites] = useState([]);

  // ✅ Load user's favourites from Firestore
  const loadFavourites = async () => {
    const user = auth.currentUser;
    if (!user) return;

    const favRef = doc(db, "favourites", user.uid);
    const favSnap = await getDoc(favRef);

    if (favSnap.exists()) {
      setFavourites(favSnap.data().movies || []);
    } else {
      setFavourites([]);
    }
  };

  // ✅ Save updated favourites to Firestore
  const saveFavourites = async (newFavourites) => {
    const user = auth.currentUser;
    if (!user) return;

    await setDoc(doc(db, "favourites", user.uid), {
      movies: newFavourites
    });
    console.log("✅ Movie saved to Firestore!");
  };

  // ✅ Add a movie to user's favourites
  const addToFavourites = async (movie) => {
    if (!auth.currentUser) return alert("Please log in to save favourites.");

    if (!favourites.some((fav) => fav.imdbID === movie.imdbID)) {
      const updated = [...favourites, movie];
      setFavourites(updated);
      await saveFavourites(updated);
    }
  };

  // ✅ Load favourites once when component mounts and user is logged in
  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      loadFavourites();
    }
  });

  return () => unsubscribe(); // cleanup listener on unmount
}, []);

  // 🔍 Handle search submission
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
            // ✅ Pass onLike function to MovieCards
            <MovieCards movie={movie} key={movie.imdbID} onLike={() => addToFavourites(movie)} />
          ))
        ) : (
          !loading && <p className="text-black text-center">No movies found</p>
        )}
      </div>
    </div>
  );
}

export default Home;
