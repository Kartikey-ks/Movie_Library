
// export const fetchMovies = async() => {
//     const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
//     const data = await response.json();
//     return data.results;
// };


const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com";

// Function to search movies by title
export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`
  );
  const data = await response.json();
  return data.Search || [];
};
