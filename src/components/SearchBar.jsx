import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query);
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="search-form bg-white flex justify-center gap-2 fixed top-20 left-1/2 transform -translate-x-1/2"
>
  <input
    type="text"
    className="search-input px-4 py-2 rounded-md w-full max-w-md"
    placeholder="Search for a movie..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
  <button
    type="submit"
    className="search-button bg-[#0170db] text-white px-4 py-2 rounded-md"
  >
    Search
  </button>
</form>
  );
}

export default SearchBar;
