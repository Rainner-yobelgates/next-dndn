'use client'
import { getData } from '@/libs/dndn-api';
import formatCurrency from '@/utils/FormatCurrency';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const SearchBar = ({setSearchOpen}) => {
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
    <div className="fixed top-0 right-0 lg:w-1/4 w-1/2 h-full bg-white shadow-lg z-50 p-4 overflow-y-auto">
        <button
              onClick={() => setSearchOpen((prevState) => !prevState)}
              className="inline-flex items-center p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <hr />
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Search..."
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
            />
            {query && (
        <div >
          <div className="mt-4">
          {filteredResults?.products && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Products</h3>
              <hr />
              {filteredResults.products.map((item, index) => (
                <Link key={index} href={`/product/${item.id}`} passHref>
                  <div className="flex p-2 border-b border-gray-200 hover:bg-gray-100">
                    {/* Gambar Produk */}
                    <div className="relative w-32 h-32 mr-4">
                      <Image
                        src={`https://api.al-miffa.or.id/storage/${item.images[0].path}`}
                        alt={item.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded" // Optional: add rounded corners or other styling
                      />
                    </div>
                    
                    {/* Informasi Produk */}
                    <div>
                      <div className="font-semibold text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.brand.name}</div>
                      <div className="text-sm text-gray-800 font-medium mt-1">IDR {formatCurrency(item.price)}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          </div>
          {filteredResults?.manCollections && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold my-4">Man Collections</h3>
              <hr />
              {filteredResults?.manCollections.map((item, index) => (
                <Link key={index} href={`/collection/${item.id}`} passHref>
                  <div className="block p-2 hover:bg-gray-100 mb-2">
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          )}
          {filteredResults?.womanCollections && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold my-4">Woman Collections</h3>
              <hr />
              {filteredResults?.womanCollections.map((item, index) => (
                <Link key={index} href={`/collection/${item.id}`} passHref>
                  <div className="block p-2 hover:bg-gray-100 mb-2">
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          )}
          {!filteredResults?.products &&
          !filteredResults?.womanCollections &&
          !filteredResults?.manCollections && (
            <div className="p-2 text-gray-500">No results found</div>
          )}
        </div>
      )}
        </div>
  );
};

export default SearchBar;
