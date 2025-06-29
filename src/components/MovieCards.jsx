function MovieCards({ movie }) {
    // ✅ Updated likeMovie function to use OMDb Title
    function likeMovie() {
        alert(`You liked ${movie.Title}`); // changed from movie.title
    }

    return (
        <div className="movie-card text-white bg-gray-800 w-60 h-90 rounded-lg m-10 overflow-hidden">
            <div className="movie-poster h-full relative">
                {/* ✅ Updated src and alt to use movie.Poster and movie.Title */}
                <img
                    className="w-full h-full object-cover"
                    src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"} // fallback if Poster not available
                    alt={movie.Title}
                />

                {/* ✅ Gradient overlay stays same */}
                <div className="absolute bottom-0 w-full h-30 bg-gradient-to-t from-black to-transparent px-2 py-1 flex items-end">
                    <div>
                        {/* ✅ Updated title and year */}
                        <h3 className="text-lg font-semibold">{movie.Title}</h3>
                        <p className="text-xs">{movie.Year}</p>
                    </div>
                </div>

                {/* Like button stays the same */}
                <div className="absolute top-2 left-2">
                    <button className="cursor-pointer" onClick={likeMovie}>🤍</button>
                </div>
            </div>
        </div>
    );
}

export default MovieCards;
