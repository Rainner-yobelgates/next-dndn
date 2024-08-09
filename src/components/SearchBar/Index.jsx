'use client'
import { getData } from '@/libs/dndn-api';
import Link from 'next/link';
import { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState({
    products: [],
    manCollections: [],
    womanCollections: []
  });

  const handleSearch = async (event) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);
    const searching = await getData("search", `keyword=${searchQuery}`);


    if (searching.success === true) {
      const products  = searching.payload.products;
      const manCollections = searching.payload.man_collections;
      const womanCollections = searching.payload.woman_collections;
      
      setFilteredResults({ products, manCollections, womanCollections });
    } else {
      setFilteredResults({ products: [], manCollections: [], womanCollections: [] });
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
          {filteredResults?.products.length > 0 && (
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Products</h3>
              {filteredResults?.products.map((item, index) => (
                <Link key={index} href={`/product/${item.id}`} passHref>
                  <div className="block p-2 border-b border-gray-200 hover:bg-gray-100">
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          )}
          {filteredResults?.manCollections.length > 0 && (
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Man Collections</h3>
              {filteredResults?.manCollections.map((item, index) => (
                <Link key={index} href={`/collection/${item.id}`} passHref>
                  <div className="block p-2 border-b border-gray-200 hover:bg-gray-100">
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          )}
          {filteredResults?.womanCollections.length > 0 && (
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Woman Collections</h3>
              {filteredResults?.womanCollections.map((item, index) => (
                <Link key={index} href={`/collection/${item.id}`} passHref>
                  <div className="block p-2 border-b border-gray-200 hover:bg-gray-100">
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          )}
          {filteredResults?.products.length === 0 &&
          filteredResults?.womanCollections.length === 0 &&
          filteredResults?.manCollections.length === 0 && (
            <div className="p-2 text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
