import Hero from "@/components/Hero/Index";
import Testimoni from "@/components/Testimoni/Index";
import Faq from "@/components/Faq/Index";
import Product from "@/components/Product/Index";
import Footer from "@/components/Footer/Index";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { getData } from "@/libs/dndn-api";

export default async function Home() {
  const manCollection = await getData("collections/man", "limit=2")
  const womanCollection = await getData("collections/woman", "limit=2")
  const hero = await getData("banners", "limit=2")
  
  // let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  return (
   <>
   <section>
    <Hero api={hero} />
    <div className="flex justify-center pt-14 gap-5">
        <FaFacebook size={36} color="#1877F2" />
        <FaInstagram size={36} color="#E1306C"/>
        <FaTiktok size={36} />
    </div>
   </section>
   <section className="pt-14 lg:pt-18">
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-2xl lg:text-4xl mb-10 uppercase">Testimoni</h1>
      <Testimoni />
    </div>
   </section>
   <section className="pt-24 lg:pt-28">
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-2xl lg:text-4xl mb-5 uppercase">Terms Conditions & Faq</h1>
      <p className="text-sm lg:text-md text-center mb-10 text-slate-500 px-3 max-w-xl mx-auto break-words">
        Setelah membaca dan memahami Syarat dan Ketentuan serta FAQ ini. Dengan melanjutkan pembelian, Anda dianggap telah memahami dan menyetujui seluruh ketentuan yang berlaku dalam Syarat dan Ketentuan serta FAQ ini.
      </p>
      <Faq />
    </div>
   </section>
   <section className="pt-24 lg:pt-28">
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-2xl lg:text-4xl mb-10 uppercase">Woman Collections</h1>
      <p className="text-end mr-4 text-sky-500 font-semibold underline"><Link href="">View All</Link></p>
      <Product api={womanCollection} />
    </div>
   </section>
   <section className="pt-24 lg:pt-28">
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-2xl lg:text-4xl mb-10 uppercase">man Collections</h1>
      <p className="text-end mr-4 text-sky-500 font-semibold underline"><Link href="">View All</Link></p>
      <Product api={manCollection} />
    </div>
   </section>
   <section className="pt-24 lg:pt-28">
    <Footer />
   </section>
   </>
  );
}
