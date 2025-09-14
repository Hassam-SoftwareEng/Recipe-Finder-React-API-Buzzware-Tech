function SearchBar({ query, setQuery, handleSearch }) {
  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipe..."
        className="search-input"
      />
      <button className="search-btn">Search</button>
    </form>
  );
}

export default SearchBar;
