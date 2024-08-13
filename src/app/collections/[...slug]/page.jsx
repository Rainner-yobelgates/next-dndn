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
  let query = "page=1" 

  const fetchData = async () =>  {
    if (Object.keys(searchParams).length > 0) {
      const queryString = new URLSearchParams(searchParams).toString().toLowerCase();
      query += `?${queryString}`;
    }
    const data = await getData(url, query);
    setProducts(data)
  }

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
  useEffect(() => {
    fetchData()
  }, [page])
  
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap mx-5">
        <div className="lg:w-[30%] w-full">
          <div className="mt-10 flex flex-col items-center lg:items-start">
            <h1 className="text-md text-slate-600 uppercase mb-5 font-bold">Sort By</h1>
            <select className="select select-bordered w-full max-w-xs mb-3">
              <option disabled selected>Who shot first?</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <h1 className="text-md text-slate-600 uppercase mb-5 font-bold">Filter By</h1>
            <select className="select select-bordered w-full max-w-xs mb-3">
              <option disabled selected>Who shot first?</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <select className="select select-bordered w-full max-w-xs mb-3">
              <option disabled selected>Who shot first?</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <select className="select select-bordered w-full max-w-xs mb-3">
              <option disabled selected>Who shot first?</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <select className="select select-bordered w-full max-w-xs mb-3">
              <option disabled selected>Who shot first?</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>
        <div className="lg:w-[70%] w-full ">
          <SearchBar />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {products.payload?.data.map((product, index) => {
              console.log(product);
              
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
        <div className="flex justify-center items-center py-4 px-2 gap-4 mt-5">
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