import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../services/api";
import "../style/MovieInfo.css"; // ✅ create this file for custom CSS

function Movie() {
  const { id } = useParams(); // get :id from URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        const data = await getMovieById(id); // fetch from OMDB/TMDB
        setMovie(data);
      } catch (err) {
        console.error("Error fetching movie:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-black">Loading...</p>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-black">Movie not found</p>
      </div>
    );
  }

  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    if (hours === 0) return `${mins}m`;
    if (mins === 0) return `${hours}h`;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="relative bg-[url(C:/Users/lappi/Documents/React/movie-library/temp-bg2.jpg)] bg-cover bg-center h-screen">
      <main className="">
        {/* Poster */}
        <div className="flex items-center justify-evenly pt-60 w-full relative">
          <div className="w-60 aspect-[2/3] bg-white shadow-lg">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Movie Info */}
        <div className="title flex flex-col justify-center bg-black/40 backdrop-blur-sm text-white w-100 h-60 rounded-3xl p-5">
          <h1 className="text-4xl font-bold">{movie.Title}</h1>
          <h2 className="pt-4">
            <span className="font-extralight">Duration: </span>
            {formatRuntime(parseInt(movie.Runtime))}
          </h2>
          <h2 className="pt-4">
            <span className="font-extralight">Genre: </span>
            {movie.Genre}
          </h2>
          <h2 className="pt-4">
            <span className="font-extralight">IMDb: </span>
            {movie.imdbRating}
          </h2>
        </div>

        {/* Extra Info */}
        <div className="actor flex flex-col justify-center bg-black/40 backdrop-blur-sm text-white w-80 h-80 rounded-3xl p-5">
          <h2 className="pt-4">
            <span className="font-extralight">Release: </span>
            {movie.Released}
          </h2>
          <h2 className="pt-4">
            <span className="font-extralight">Director: </span>
            {movie.Director}
          </h2>
          <h2 className="pt-4">
            <span className="font-extralight">Age Rating: </span>
            {movie.Rated}
          </h2>
          <h2 className="pt-4">
            <span className="font-extralight">Actors: </span>
            {movie.Actors}
          </h2>
        </div>
        </div>


        {/* Plot Summary */}
        <div className="plot text-white pt-20 fixed z-10 left-1/2 -translate-x-1/2">
          <p>{movie.Plot}</p>
        </div>
      </main>

      {/* Ellipse shadow */}
      <div className="ellipse-shadow fixed -bottom-195 left-1/2 -translate-x-1/2"></div>
    </div>
  );
}

export default Movie;
