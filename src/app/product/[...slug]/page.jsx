"use client"
import Product from '@/app/components/Product/Index';
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react'

const page = () => {
    const [thumbnail, setThumbnail] = useState('https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp');
    const images = [
        'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp',
        'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
        'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp',
        'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp',
        'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp'
    ];

    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap mb-16">
                <div className="w-full lg:w-1/2 px-5 my-10">
                    <Image 
                    src={thumbnail} 
                    style={{ aspectRatio: '1 / 1' }} 
                    alt="Shoes" 
                    className="w-full h-auto object-cover" 
                    width={500}
                    height={500}
                    />
                    <div className="flex flex-wrap mt-5">
                        {images.map((imgSrc, index) => (
                            <div key={index} className="w-1/4 lg:w-1/5 xl:w-1/6 p-1">
                                <Image
                                        className="w-full h-full object-cover cursor-pointer border-slate-300 border-4 rounded"
                                        style={{ aspectRatio: '1 / 1' }}
                                        onClick={() => setThumbnail(imgSrc)}
                                        src={imgSrc}
                                        width={200}
                                        height={200}
                                        alt={`Thumbnail ${index + 1}`}
                                    />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full lg:w-1/2 px-5 my-10">
                    <h1 className="text-4xl font-semibold mb-2 mt-5">Jordan Retro 6 G</h1>
                    <h2 className="text-lg font-semibold mb-5">Men's Shoes</h2>
                    <h2 className="text-lg font-semibold mb-1">IDR 10.000.000</h2>
                    <p className="text-md text-slate-500 font-medium mb-10">Tax included. Shipping calculated at checkout</p>
                    <label className="block text-sm font-medium text-slate-500 mb-2">Quantity</label>
                    <input type="number"  className="w-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-10" placeholder="1" min="1" />
                    <div className="flex gap-4">
                        <button className="btn btn-wide uppercase bg-green-600 text-white hover:bg-slate-700">Shop By whatsapp</button>
                        <button className="btn btn-wide uppercase">Add to cart</button>
                    </div>
                </div>
            </div>
            <h1 className="text-center font-bold text-2xl lg:text-4xl mb-10 uppercase">You may also like</h1>
            <p className="text-end mr-4 text-sky-500 font-semibold underline"><Link href="">View All</Link></p>
            <Product />
        </div>
    );
}

export default page