'use client'
import { useState } from 'react';

const SearchBar = ({ data }) => {
  const [query, setQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState({
    products: [],
    collections: []
  });

  const handleSearch = (event) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);

    if (searchQuery !== '') {
      const products = data.products.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      const collections = data.collections.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredResults({ products, collections });
    } else {
      setFilteredResults({ products: [], collections: [] });
    }
  };

  return (
    <div className="relative w-full max-w-md p-4 ml-auto">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {query && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg mt-2 z-10">
          {filteredResults.products.length > 0 && (
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Products</h3>
              {filteredResults.products.map((item, index) => (
                <div key={index} className="p-2 border-b border-gray-200 hover:bg-gray-100">
                  {item.name}
                </div>
              ))}
            </div>
          )}
          {filteredResults.collections.length > 0 && (
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Collections</h3>
              {filteredResults.collections.map((item, index) => (
                <div key={index} className="p-2 border-b border-gray-200 hover:bg-gray-100">
                  {item.name}
                </div>
              ))}
            </div>
          )}
          {filteredResults.products.length === 0 &&
          filteredResults.collections.length === 0 && (
            <div className="p-2 text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
