"use client"
import Hero from "@/components/Hero/Index";
import Testimoni from "@/components/Testimoni/Index";
import Faq from "@/components/Faq/Index";
import Product from "@/components/Product/Index";
import NewProducts from "@/components/NewProduct/Index";
import BrandsSlider from "@/components/BrandsSlider/Index";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { getData } from "@/libs/dndn-api";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [manCollection, setManCollection] = useState([]);
  const [womanCollection, setWomanCollection] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [hero, setHero] = useState([]);
  // const hash = window.location.hash
  
  useEffect(() => {
    // Fungsi untuk fetch data
    async function fetchData() {
      setLoading(true)
      try {
        const fetchManCollection = await getData("collections/man");
        const fetchWomanCollection = await getData("collections/woman");
        const fetchNewProducts = await getData("collections/new-arrival-collections");
        const fetchHero = await getData("banners");
        const fetchBrands = await getData("brands");
  
        // Set state dengan data yang di-fetch
        setManCollection(fetchManCollection);
        setWomanCollection(fetchWomanCollection);
        setNewProducts(fetchNewProducts);
        setHero(fetchHero);
        setBrands(fetchBrands);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Selesai loading
      }
    }

    fetchData();
  }, []);
  // if (loading) {
  //   return (
  //   <div className="fixed inset-0 bg-white bg-opacity-100 flex items-center justify-center z-50">
  //     <span className="loading loading-spinner loading-lg"></span>
  //   </div>
  //   )
  // }
  return (
   <>
   <section>
    <Hero api={hero} loading={loading} />
    <div className="flex justify-center pt-14 gap-5">
    <Link href={"https://api.whatsapp.com/send?phone=6281617171488&"} target="_blank"><FaWhatsapp size={36} color="#25D366" /></Link>
            <Link href={"https://www.instagram.com/dndn.luxury/"} target="_blank"><FaInstagram size={36} color="#E1306C"/></Link>
    </div>
   </section>

   <section className="pt-14">
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-2xl lg:text-3xl mb-10 uppercase">New Products</h1>
      <p className="text-end mr-4 text-slate-500 font-semibold underline text-sm mb-2"><Link href="/collections/new-arrival-collections">View All</Link></p>
      <NewProducts api={newProducts} loading={loading} />
    </div>
   </section>
   <section className="pt-14">
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-2xl lg:text-3xl mb-10 uppercase">Our Brands</h1>
      <BrandsSlider api={brands} loading={loading} />
    </div>
   </section>

   <section className="pt-16 lg:pt-20">
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-2xl lg:text-3xl mb-10 uppercase">Woman Collections</h1>
      <p className="text-end mr-4 text-slate-500 font-semibold underline text-sm mb-2"><Link href="/collections/woman-collections">View All</Link></p>
      <Product api={womanCollection} loading={loading} />
    </div>
   </section>
   <section className="pt-16 lg:pt-20">
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-2xl lg:text-3xl mb-10 uppercase">Man Collections</h1>
      <p className="text-end mr-4 text-slate-500 font-semibold underline text-sm mb-2"><Link href="/collections/man-collections">View All</Link></p>
      <Product api={manCollection} loading={loading} />
    </div>
   </section>
   <section className="pt-16 lg:pt-20" id="faq">
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-2xl lg:text-3xl mb-5 uppercase">Terms Conditions & Faq</h1>
      <p className="text-sm lg:text-md text-center mb-10 text-slate-500 px-3 max-w-xl mx-auto break-words">
        Setelah membaca dan memahami Syarat dan Ketentuan serta FAQ ini. Dengan melanjutkan pembelian, Anda dianggap telah memahami dan menyetujui seluruh ketentuan yang berlaku dalam Syarat dan Ketentuan serta FAQ ini.
      </p>
      <Faq />
    </div>
   </section>
   <section className="pt-14 lg:pt-18" id="testimoni">
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-2xl lg:text-3xl mb-10 uppercase">Testimoni</h1>
      <Testimoni />
    </div>
   </section>
   </>
  );
}
