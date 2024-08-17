"use client"
import CartContext from '@/context/CartContext';
import formatCurrency from '@/utils/FormatCurrency';
import Image from 'next/image'
import Link from 'next/link';
import React, { useContext } from 'react'
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci';
import { FaRegTrashAlt } from 'react-icons/fa'

const CartItem = () => {
    const { addItemToCart, cart, deleteItemCart } = useContext(CartContext);
    
    //Ketika quantity sama maka akan ditambah 1
    const increaeseQty = (item) => {
        addItemToCart(item)
    }
    //Ketika quantity kurang dari 1 maka akan dikurang 1
    const decreaeseQty = (item) => {
        if (item.quantity > 1) {
            const cartItem = {...item, quantity:item.quantity - 1}
            addItemToCart(cartItem)  
        }
    }
    
  return (
    <>
    {cart.cartItems?.map((item, index) => {
        return (
            <div className="flex py-5 gap-3 md:gap-5 border-b" key={index}>
                <div className="shrink-0 aspect-square w-32">
                <Image 
                    src={`https://api.al-miffa.or.id/storage/${item.image}`} 
                    style={{ aspectRatio: '1 / 1' }} 
                    alt="Shoes" 
                    className="w-full h-auto object-cover" 
                    width={500}
                    height={500}
                    />
                </div>
                <div className="w-full">
                    <div className="flex flex-col lg:flex-row justify-between">
                        <p className="text-lg lg:text-2xl font-semibold text-slate-800 mb-1">
                            {item.name}
                        </p>
                        <p className="text-sm lg:text-md font-medium text-slate-600 block lg:hidden">
                            {item.brand}
                        </p>
                        <div className="flex lg:hidden">
                            {Object.entries(item.variant).map(([key, value]) => (
                                <p className="text-sm lg:text-md font-medium text-slate-600 block lg:hidden mr-2">
                                {key} : <b>{value}</b>
                                </p>
                            ))}
                        </div>
                        <p className="text-sm lg:text-md font-bold text-slate-600 mt-2">
                            IDR {formatCurrency(item.price)}
                        </p>
                    </div>
                    <p className="text-sm lg:text-md font-medium text-slate-600 hidden lg:block">
                        {item.brand}
                    </p>
                    {Object.entries(item.variant).map(([key, value]) => (
                        <p className="text-sm lg:text-md font-medium text-slate-600 hidden lg:block">
                            {key} : <b>{value}</b>
                        </p>
                    ))}
                    <div className="flex mt-2 items-center justify-between">
                        <div className="flex text-sm lg:text-md text-slate-600 gap-2">
                            <p className="font-semibold">Quantity :</p>
                            <div className="flex items-center">
                                <button onClick={() => decreaeseQty(item)}><CiSquareMinus size={25} /></button>
                                <p className="font-bold mx-2">{item.quantity}</p>
                                <button onClick={() => increaeseQty(item)}><CiSquarePlus size={25} /></button>
                            <p className="mx-2 font-semibold text-slate-500">/ {item.stock}</p>
                            </div>
                        </div>
                        <button onClick={() => deleteItemCart(item.slug)}><FaRegTrashAlt size={20} className="text-slate-600 hover:text-red-600 hover:cursor-pointer transition" /></button>
                    </div>
                </div>
            </div>
        )
    })}
    {cart.cartItems?.length === 0 && (
            <p className="p-2 text-gray-500 text-center font-semibold">Your basket is empty, <Link className="underline" href="/collections/new-arrival-collections">Continue shopping</Link></p>
          )}
    </>
  )
}

export default CartItem