"use client"
import React, { useContext, useEffect, useState } from 'react'
import CartItem from '@/components/CartItem'
import CartContext from '@/context/CartContext';
import formatCurrency from '@/utils/FormatCurrency';

const page = () => {
  const { cart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const calculateTotalPrice = (items) => {
      return items.reduce((total, item) => {
          const price = parseFloat(item.price);
          const quantity = item.quantity; 
          return total + (price * quantity); 
      }, 0);
  };

  useEffect(() => {
      if (cart?.cartItems) {
          const calculatedTotal = calculateTotalPrice(cart.cartItems);
          setTotalPrice(calculatedTotal);
      }
  }, [cart?.cartItems]);

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
                <div className="p-10 my-5 bg-[#fff4f4] rounded-xl border">
                  <div className="flex justify-between">
                    <h2 className="uppercase text-md font-medium">Subtotal</h2>
                    <h2 className="text-md font-medium">IDR {formatCurrency(totalPrice)}</h2>
                  </div>
                  <hr className="my-5" />
                    <p className="text-sm">
                    Berikut adalah detail lengkap pesanan Anda. Harap pastikan semua informasi sudah benar sebelum melanjutkan ke pembayaran. Periksa item, jumlah, dan total biaya dengan cermat. Jika sudah sesuai, silakan lanjutkan untuk menyelesaikan pembelian Anda.
                    </p>
                </div>
                <div className="flex justify-center">
                  <button className="btn btn-wide uppercase bg-[#302e2e] text-white hover:text-[#302e2e] hover:bg-[#fff4f4]">Checkout</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page