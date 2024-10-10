import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchInput);
        }
    };

    return (
        <input
            type="text"
            className="form-control search-bar"
            placeholder="Search for news..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleSearch}
        />
    );
}

export default SearchBar;
