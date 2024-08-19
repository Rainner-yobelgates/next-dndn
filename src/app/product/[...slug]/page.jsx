"use client"
import { getData } from '@/libs/dndn-api';
import DetailProduct from '@/components/DetailProduct/index'
import { useEffect, useState } from 'react';

const Page = ({ params: { slug } }) => {
    const [product, setProduct] = useState([]);
    const [newArrival, setNewArrival] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;
    
        async function fetchData() {
            setLoading(true);
          try {
            const fetchProduct = await getData(`product/${slug}`);
            setProduct(fetchProduct);
            const fetchNewArrival = await getData("collections/new-arrival-collections");
            setNewArrival(fetchNewArrival);
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setLoading(false);
          }
        }
    
        fetchData();
      }, [slug]);
      
      if (loading) {
        return (
        <div className="fixed inset-0 bg-white bg-opacity-100 flex items-center justify-center z-50">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
        ) // Tampilkan loader saat data sedang di-fetch
      }
    return (
        <DetailProduct product={product} newArrival={newArrival} />
    )
}

export default Page