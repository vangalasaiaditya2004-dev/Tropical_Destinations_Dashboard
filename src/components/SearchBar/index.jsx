import './index.css'

function SearchBar({ searchText, onSearchChange }) {
  return (
    <div className="search-box">
      <label htmlFor="destination-search">Search destinations</label>
      <input
        id="destination-search"
        type="search"
        placeholder="Search by destination name"
        value={searchText}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  )
}

export default SearchBar
