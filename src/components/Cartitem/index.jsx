import Image from 'next/image'
import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const CartItem = () => {
  return (
    <>
        <div className="flex py-5 gap-3 md:gap-5 border-b">
            <div className="shrink-0 aspect-square w-12 md:w-32">
            <Image 
                src={"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"} 
                style={{ aspectRatio: '1 / 1' }} 
                alt="Shoes" 
                className="w-full h-auto object-cover" 
                width={500}
                height={500}
                />
            </div>
            <div className="w-full">
                <div className="flex flex-col lg:flex-row justify-between">
                    <p className="text-lg lg:text-2xl font-semibold text-slate-800">
                        Jordan Retro 6 G
                    </p>
                    <p className="text-sm lg:text-md font-medium text-slate-600 block lg:hidden">
                        Mens shoes
                    </p>
                    <p className="text-sm lg:text-md font-bold text-slate-600 mt-2">
                        IDR 100.000
                    </p>
                </div>
                <p className="text-sm lg:text-md font-medium text-slate-600 hidden lg:block">
                    Mens shoes
                </p>
                <div className="flex mt-4 items-center justify-between">
                    <div className="flex text-sm lg:text-md text-slate-600 gap-2">
                        <p className="font-semibold">Quantity :</p>
                        <input type="number"  className="w-14 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="1" min="1" />
                    </div>
                    <FaRegTrashAlt size={20} className="text-slate-600 hover:text-red-600 hover:cursor-pointer transition" />
                </div>
            </div>
        </div>
        <div className="flex py-5 gap-3 md:gap-5 border-b">
            <div className="shrink-0 aspect-square w-12 md:w-32">
            <Image 
                src={"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"} 
                style={{ aspectRatio: '1 / 1' }} 
                alt="Shoes" 
                className="w-full h-auto object-cover" 
                width={500}
                height={500}
                />
            </div>
            <div className="w-full">
                <div className="flex flex-col lg:flex-row justify-between">
                    <p className="text-lg lg:text-2xl font-semibold text-slate-800">
                        Jordan Retro 6 G
                    </p>
                    <p className="text-sm lg:text-md font-medium text-slate-600 block lg:hidden">
                        Mens shoes
                    </p>
                    <p className="text-sm lg:text-md font-bold text-slate-600 mt-2">
                        IDR 100.000
                    </p>
                </div>
                <p className="text-sm lg:text-md font-medium text-slate-600 hidden lg:block">
                    Mens shoes
                </p>
                <div className="flex mt-4 items-center justify-between">
                    <div className="flex text-sm lg:text-md text-slate-600 gap-2">
                        <p className="font-semibold">Quantity :</p>
                        <input type="number"  className="w-14 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="1" min="1" />
                    </div>
                    <FaRegTrashAlt size={20} className="text-slate-600 hover:text-red-600 hover:cursor-pointer transition" />
                </div>
            </div>
        </div>
    </>
  )
}

export default CartItem