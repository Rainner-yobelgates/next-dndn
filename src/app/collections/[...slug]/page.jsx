import React from 'react'
import SearchBar from '@/components/SearchBar/Index'

const page = () => {
  const data = {
    products: [
      { name: 'Apple iPhone' },
      { name: 'Samsung Galaxy' },
      { name: 'Google Pixel' },
      // Tambahkan lebih banyak data produk sesuai kebutuhan
    ],
    collections: [
      { name: 'Summer Collection' },
      { name: 'Winter Collection' },
      { name: 'Spring Collection' },
      // Tambahkan lebih banyak data koleksi sesuai kebutuhan
    ]
  };
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
          <SearchBar data={data} />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card bg-base-100 w-full shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-full shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-full shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-full shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page