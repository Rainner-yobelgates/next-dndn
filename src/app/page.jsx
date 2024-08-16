import Hero from "@/components/Hero/Index";
import Testimoni from "@/components/Testimoni/Index";
import Faq from "@/components/Faq/Index";
import Product from "@/components/Product/Index";
import NewProducts from "@/components/NewProduct/Index";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { getData } from "@/libs/dndn-api";

export default async function Home() {
  const manCollection = await getData("collections/man")
  const womanCollection = await getData("collections/woman")
  const newProducts = await getData("collections/new-arrival-collections")
  const hero = await getData("banners")
  
  // let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  return (
   <>
   <section>
    <Hero api={hero} />
    <div className="flex justify-center pt-14 gap-5">
    <Link href={""}><FaWhatsapp size={36} color="#25D366" /></Link>
    <Link href={""}><FaInstagram size={36} color="#E1306C"/></Link>
    </div>
   </section>

   <section className="pt-14">
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-2xl lg:text-3xl mb-10 uppercase">New Products</h1>
      <p className="text-end mr-4 text-slate-500 font-semibold underline text-sm mb-2"><Link href="/collections/new-arrival-collections">View All</Link></p>
      <NewProducts api={newProducts} />
    </div>
   </section>

   <section className="pt-16 lg:pt-20">
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-2xl lg:text-3xl mb-10 uppercase">Woman Collections</h1>
      <p className="text-end mr-4 text-slate-500 font-semibold underline text-sm mb-2"><Link href="/collections/woman-collections">View All</Link></p>
      <Product api={womanCollection} />
    </div>
   </section>
   <section className="pt-16 lg:pt-20">
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-2xl lg:text-3xl mb-10 uppercase">Man Collections</h1>
      <p className="text-end mr-4 text-slate-500 font-semibold underline text-sm mb-2"><Link href="/collections/man-collections">View All</Link></p>
      <Product api={manCollection} />
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
