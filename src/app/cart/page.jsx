import React from 'react'
import CartItem from '../components/CartItem'

const page = () => {
  return (
    <div className="container mx-auto">
        <h1 className="text-center font-bold text-xl my-10 text-slate-600">Your Cart</h1>
        <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-[2] mx-5">
                <h3 className="text-lg font-bold">Cart Items</h3>
                <CartItem />
            </div>
            <div className="flex-1 mx-5">
                <h3 className="text-lg font-bold">Summary</h3>
                <div className="p-5 my-5 bg-slate-200 rounded-xl">
                  <div className="flex justify-between">
                    <h2 className="uppercase text-md lg:text-lg font-medium text-black">Subtotal</h2>
                    <h2 className="text-md lg:text-lg font-medium text-black">IDR 100.000</h2>
                  </div>
                    <p className="text-sm lg:text-lg py-5 border-t mt-5">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora dignissimos explicabo mollitia, qui velit asperiores sunt sint, rerum perspiciatis atque nesciunt at unde minima dolor obcaecati magni, itaque commodi ab repellat cumque neque quam ad odit! Ratione est nobis explicabo exercitationem facilis amet sapiente suscipit ad placeat corrupti! Quo, nulla.
                    </p>
                </div>
                <div className="flex justify-center">
                  <button className="btn btn-wide uppercase bg-slate-700 text-white hover:text-black">Checkout</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page