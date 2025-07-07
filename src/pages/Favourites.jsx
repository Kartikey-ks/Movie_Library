import { useEffect, useState } from "react";
import { auth, db } from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";
import MovieCards from "../components/MovieCards";

function Favourites() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchFavourites = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const favRef = doc(db, "favourites", user.uid);
      const favSnap = await getDoc(favRef);

      if (favSnap.exists()) {
        setFavourites(favSnap.data().movies || []);
      }
    };

    fetchFavourites();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Favourites</h2>
      <div className="movies-grid flex flex-wrap justify-center gap-6">
        {favourites.map((movie) => (
          <MovieCards key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
