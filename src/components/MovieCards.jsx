function MovieCards({movie}) {
    function likeMovie() {
        alert(`You liked ${movie.title}`);
    }

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="moovie-overlay">
                    <button className="like" onClick={likeMovie}>
                        🤍
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCards;