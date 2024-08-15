"use client"
import React, { useEffect, useState } from 'react'
import SearchBar from '@/components/SearchBar/Index'
import { getData } from '@/libs/dndn-api';
import Link from 'next/link';
import formatCurrency from '@/utils/FormatCurrency';
import Image from 'next/image';

const page = ({ params, searchParams }) => {
  const [page, setPage] = useState(1)
  const [products, setProducts] = useState([])
  let url = `collections/${params.slug}`;

  const handleNextPage = () => {
    scrollTo({
      behavior:"smooth",
      top:0
    })
    setPage((prevState) => prevState + 1)
  }
  
  const handlePrevPage = () => {
    scrollTo({
      behavior:"smooth",
      top:0
    })
    setPage((prevState) => prevState - 1)
  }

  const dropdownLabels = {
    with_stock: 'Availability',
    with_type: 'Product Type',
  };

  const [selectedFilters, setSelectedFilters] = useState({
    with_stock: [],
    with_type: [],
    sort_by: [],
    from_price: [],
    to_price: []
  });

  const [isOpen, setIsOpen] = useState({
    with_stock: false,
    with_type: false,
    price: false,
  });

  const [options, setOptions] = useState({
    with_stock: ['In Stock', 'Out Stock'],
    with_type: ['Man', 'Woman'],
  });

  const handleCheckboxChange = (dropdown, value) => {
    setSelectedFilters((prevState) => {
      const currentFilters = prevState[dropdown];
      const newFilters = currentFilters.includes(value)
        ? currentFilters.filter((filter) => filter !== value)
        : [...currentFilters, value];

      return {
        ...prevState,
        [dropdown]: newFilters,
      };
    });
  };

  const handleDropdownChange = (event) => {
    const { name ,value } = event.target;

    // Update the specific key in the state
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [name]: [value],
    }));
    
  };

  const toggleDropdown = (dropdown) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  const fetchData = async () => {
    // Inisialisasi URLSearchParams untuk parameter query
    const query = new URLSearchParams();
  
    // Tambahkan parameter dari selectedFilters
    Object.keys(selectedFilters).forEach((key) => {
      
      if (selectedFilters[key].length > 0) {
        const values = selectedFilters[key].map(value => value.split(' ')[0].toLowerCase()).join(',');
        query.append(key, values);
      }
    });
  
    // Tambahkan parameter dari searchParams jika ada
    if (Object.keys(searchParams).length > 0) {
      const searchParamsString = new URLSearchParams(searchParams).toString().toLowerCase();
      const searchParamsEntries = new URLSearchParams(searchParamsString).entries();
      
      // Tambahkan parameter satu per satu
      for (const [key, value] of searchParamsEntries) {
        query.append(key, value);
      }
    }
  
    // Konversi ke string query
    const queryString = query.toString();
    console.log(selectedFilters, queryString);
  
    // Lakukan fetch data dengan URL yang digabungkan
    const data = await getData(url, queryString);
    setProducts(data);
  };

  useEffect(() => {
    fetchData()
  }, [page, selectedFilters])

  const handleReset = () => {
    setSelectedFilters({
      from_price: '',
      to_price: '',
    });
  };
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap mx-5">
        <div className="lg:w-[25%] w-full">
          <div className="mt-10 flex flex-col items-center lg:items-start">
            <h1 className="text-md text-slate-600 uppercase mb-5 font-bold">Sort By</h1>
            <select defaultValue="alpha-asc" className="select select-bordered w-full max-w-xs mb-3" name="sort_by" onChange={handleDropdownChange}>
              <option value="alpha-asc">Alphabetically, A-Z</option>
              <option value="alpha-desc">Alphabetically, Z-A</option>
              <option value="price-asc">Price, low to high</option>
              <option value="price-desc">Price, high to low</option>
              <option value="date-asc">Date, old to new</option>
              <option value="date-desc">Date, new to old</option>
            </select>
            <h1 className="text-md text-slate-600 uppercase mb-5 font-bold">Filter By</h1>
            {['with_stock', 'with_type'].map((dropdown, index) => (
              <div key={index} className="relative w-full max-w-xs mb-3">
                <button
                  className="select select-bordered w-full flex items-center"
                  onClick={() => toggleDropdown(dropdown)}
                >
                  {dropdownLabels[dropdown]}
                </button>

                {isOpen[dropdown] && (
                  <div className="absolute bg-white border border-gray-300 shadow-lg mt-1 rounded-md w-full z-10 p-2">
                    {options[dropdown].map((option, idx) => (
                      <label
                        key={idx}
                        className="flex items-center rounded-md hover:bg-gray-200 transition-colors duration-150 cursor-pointer py-2 px-2"
                      >
                        <input
                          type="checkbox"
                          className="form-checkbox text-blue-600 mr-2"
                          checked={selectedFilters[dropdown].includes(option)}
                          onChange={() => handleCheckboxChange(dropdown, option)}
                        />
                        <span className="text-gray-700 text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="relative w-full max-w-xs">
              <button
                className="select select-bordered w-full flex items-center"
                onClick={() => toggleDropdown('price')}
              >
                Price
              </button>

              {isOpen['price'] && (
                <div className="absolute left-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-md px-4 pb-4 w-[calc(100%+2rem)] z-10">
                  <div className="flex justify-end mt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="py-1 px-4 rounded-md transition-colors text-red-600 hover:text-red-800 text-sm"
                    >
                      Reset
                    </button>
                  </div>
                    <hr className="mb-2" />
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium mr-2">Rp</label>
                  <div className="flex space-x-2 w-full">
                    <input
                      type="number"
                      name="from_price"
                      value={selectedFilters.from_price || ''}
                      onChange={handleDropdownChange}
                      placeholder="From"
                      className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <input
                      type="number"
                      name="to_price"
                      value={selectedFilters.to_price || ''}
                      onChange={handleDropdownChange}
                      placeholder="To"
                      className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
        <div className="lg:w-[75%] w-full ">
          <SearchBar />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {products.payload?.data.map((product, index) => {
              return (
                <Link href={''} key={product.id}>
                  <div className="card bg-base-100 w-full shadow-xl">
                    <figure className="flex h-64">
                        <Image
                          src={`https://api.al-miffa.or.id/storage/${product.images[0].path}`} // Dynamic path to your image
                          alt="Shoes"
                          layout="responsive"
                          width={500} // Set a default width
                          height={500} // Set a default height
                          className="object-cover w-full h-full" // Ensure the image covers the container
                          />
                    </figure>
                    <div className="card-body text-center gap-0">
                      <h2 className="text-md">{product.name}</h2>
                      <p className="font-bold text-sm mb-3">IDR {formatCurrency(product.price)}</p>
                      <p className="font-bold text-sm">{product.brand.name}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
        <div className="flex justify-end items-end py-4 px-2 gap-4 mt-5">
            {page <= 1 ? null :
              <button onClick={handlePrevPage} className="transition-all hover:text-slate-500">Prev</button>
            }
            <p>{page} of {products.payload?.last_page}</p>
            {page >= products.payload?.last_page ? null :
              <button onClick={handleNextPage} className="transition-all hover:text-slate-500">Next</button>
            }
        </div>
    </div>
  )
}

export default page