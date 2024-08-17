'use client'
import { useContext, useEffect, useState } from 'react'; 
import NewProduct from '@/components/NewProduct/Index';
import ProductImage from '@/components/ProductImage/index';
import formatCurrency from '@/utils/FormatCurrency';
import Link from 'next/link';
import CartContext from '@/context/CartContext'

const DetailProduct = ({ product, newArrival }) => {
    const [quantity, setQuantity] = useState(1)
    const [selectedVariants, setSelectedVariants] = useState({});
    const [variantStock, setVariantStock] = useState();
    const [disableBtn, setDisableBtn] = useState(product.payload.variants.length !== 0 ? true : false)
    const { addItemToCart } = useContext(CartContext);
    const currentUrl = typeof window !== 'undefined' ? window.location.origin : '';
    
    const addToCartHandler = () => {
        addItemToCart({
            name: product.payload.name,
            slug: product.payload.slug,
            price: product.payload.price,
            image: product.payload.images[0].path,
            stock: variantStock ? variantStock : product.payload.stock,
            variant: selectedVariants,
            brand: product.payload.brand.name,
            quantity: quantity
        })
    }

    const handleVariant = (key, val) => {
        setSelectedVariants((prevVariants) => ({
            ...prevVariants,
            [key]: val,
        }));
    };
    useEffect(() => {
        const findMatchingItems = (data, criteria) => {
            
            return data.filter(item => {
              // Membuat objek untuk memetakan atribut berdasarkan kunci
              const attributeMap = item.combinations.reduce((acc, combination) => {
                const attributeName = combination.value.attribute_id === 16 ? 'Warna' : 'Ukuran'; // Mapping attribute_id ke nama atribut
                acc[attributeName] = combination.value.value;
                return acc;
              }, {});
          
              setDisableBtn(Object.keys(criteria).length === 0 ? true : false);
              // Periksa apakah semua kriteria cocok
              
              return Object.entries(criteria).every(([key, value]) => attributeMap[key] === value);
            });
          };
          
        const matchingItems = findMatchingItems(product.payload.variants, selectedVariants);
        setDisableBtn(matchingItems.length === 1 ? false : true);
        setVariantStock(matchingItems[0]?.stock ?? null);
        setQuantity(1)
        
    }, [selectedVariants])
    
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
                    <p className="text-sm text-slate-500 font-medium mb-5">Tax included. Shipping calculated at checkout</p>
                    
                    {product.payload.attributes.map((attr, index) => (
                        <div key={index}>
                            <h2 className="block text-sm font-medium text-slate-500 mb-2 mt-3">{attr.name}</h2>
                            <div className="flex items-center">
                                {attr.values.map((val, idx) => {
                                    
                                    // Buat ID dan htmlFor yang unik berdasarkan indeks atau nilai
                                    const inputId = `${attr.name}-${val.value}-${idx}`;
                                    return (
                                        <label
                                            key={idx}
                                            htmlFor={inputId}
                                            className="border-2 rounded-lg cursor-pointer flex items-center mr-4"
                                        >
                                            <input
                                                type="radio"
                                                name={attr.name}
                                                id={inputId}
                                                className="hidden peer"
                                                value={val.value}
                                                onChange={(e) => handleVariant(attr.name ,e.target.value)}
                                            />
                                            <span className="peer-checked:bg-slate-500 peer-checked:text-white px-3 py-2 block w-full h-full rounded">
                                                {val.value}
                                            </span>
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                    <div className="mt-5">
                        <label className="block text-sm font-medium text-slate-500 mb-2">Quantity</label>
                        <input type="number" className="w-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5" value={quantity} min="1" max={variantStock ? variantStock : product.payload.stock} onChange={(e) => setQuantity( parseInt(e.target.value, 10))} />
                        <div className="lg:flex lg:gap-4">
                            <Link target="_blank" href={`https://api.whatsapp.com/send?phone=6281617171488&text=Hai%20Min%2C%20Aku%20tertarik%20dengan%20${product.payload.name}.%20Apakah%20bisa%20dibantu%3F%20${currentUrl}/product/${product.payload.slug}`} className="btn btn-wide uppercase bg-green-600 text-white hover:bg-slate-700 mb-2">Shop By whatsapp</Link>
                            <button onClick={addToCartHandler} disabled={disableBtn} className="btn btn-wide uppercase">Add to cart</button>
                        </div>
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

export default DetailProduct