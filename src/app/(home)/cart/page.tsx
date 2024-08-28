'use client'

import CartItem from "@/components/cart/CartItem"
import Summary from "@/components/cart/Summary"
import CartSkeleton from "@/components/skeleton/CartSkeleton"
import useCart from "@/hooks/useCart"
import Head from "next/head"
import { useEffect, useState } from "react"

const page = () => {
    const [isMounted, setIsMounted] = useState(false)

    const cart = useCart()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return <CartSkeleton />
    }

    console.log(cart)

    return (
        <div className="container py-16">
            <main>
                <h1 className='text-3xl font-bold text-black'>Keranjang Belanja</h1>
                <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>                    
                    <div className='lg:col-span-7'>
                        {cart.items.length === 0 && (
                            <p className='text-neutral-500'>No items added to cart</p>
                        )}
                        <ul>
                            {cart.getItems().map((item) => (
                                <CartItem key={item.id} data={item} />
                            ))}
                        </ul>
                    </div>
                    <Summary />
                </div>
            </main>
        </div>
    )
}

export default page