function MovieCards({ movie, onLike }) {
  function likeMovie() {
    alert(`You liked ${movie.Title}`);
    console.log("❤️ Like button clicked for:", movie.Title);
    if (onLike) onLike(); // ✅ Will now work
  }

  return (
    <div className="movie-card text-white bg-gray-800 w-60 h-90 rounded-lg m-10 overflow-hidden">
      <div className="movie-poster h-full relative">
        <img
          className="w-full h-full object-cover"
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
          alt={movie.Title}
        />

        <div className="absolute bottom-0 w-full h-30 bg-gradient-to-t from-black to-transparent px-2 py-1 flex items-end">
          <div>
            <h3 className="text-lg font-semibold">{movie.Title}</h3>
            <p className="text-xs">{movie.Year}</p>
          </div>
        </div>

        <div className="absolute top-2 left-2">
          <button className="cursor-pointer" onClick={likeMovie}>🤍</button>
        </div>
      </div>
    </div>
  );
}

export default MovieCards;
