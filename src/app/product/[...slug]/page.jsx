import NewProduct from '@/components/NewProduct/Index';
import ProductImage from '@/components/ProductImage/index';
import { getData } from '@/libs/dndn-api';
import formatCurrency from '@/utils/FormatCurrency';
import Link from 'next/link';


const page = async ({ params: { slug } }) => {
    const product = await getData(`product/${slug}`)
    const newArrival = await getData("collections/new-arrival-collections")
    console.log(newArrival);
    
    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap mb-16">
                <div className="w-full lg:w-1/2 px-5 my-10">
                  <ProductImage images={product.payload.images} />
                </div>
                <div className="w-full lg:w-1/2 px-5 my-10">
                    <h1 className="text-4xl font-semibold mb-2 mt-5">{product.payload.name}</h1>
                    <h2 className="text-lg font-semibold mb-5">{product.payload.brand.name} - {product.payload.condition}</h2>
                    <h2 className="text-lg font-semibold mb-1">IDR {formatCurrency(product.payload.price)}</h2>
                    <p className="text-md text-slate-500 font-medium mb-10">Tax included. Shipping calculated at checkout</p>
                    <label className="block text-sm font-medium text-slate-500 mb-2">Quantity</label>
                    <input type="number"  className="w-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-10" placeholder="1" min="1" max={product.payload.stock} />
                    <div className="lg:flex lg:gap-4">
                        <button className="btn btn-wide uppercase bg-green-600 text-white hover:bg-slate-700 mb-2">Shop By whatsapp</button>
                        <button className="btn btn-wide uppercase">Add to cart</button>
                    </div>
                    <hr className="my-10" />
                        <div dangerouslySetInnerHTML={{ __html: product.payload.description }} />
                </div>
            </div>
            <h1 className="text-center font-bold text-2xl lg:text-4xl mb-10 uppercase">You may also like</h1>
            <p className="text-end mr-4 text-slate-500 font-semibold underline text-sm mb-2"><Link href="/collections/new-arrival-collections">View All</Link></p>
            <NewProduct api={newArrival} />
        </div>
    );
}

export default page