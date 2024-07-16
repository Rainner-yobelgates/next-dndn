import Image from "next/image";
import Carousel from "./components/Hero/Index";
import Testimoni from "./components/Testimoni/Index";
import Faq from "./components/Faq/Index";
import Product from "./components/Product/Index";
import Footer from "./components/Footer/Index";
import Link from "next/link";

export default function Home() {
  return (
   <>
   <section>
    <Carousel />
   </section>
   <section className="pt-24 lg:pt-28">
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
      <h1 className="text-center font-bold text-2xl lg:text-4xl mb-10 uppercase">New Products</h1>
      <p className="text-end mr-4 text-sky-500 font-semibold underline"><Link href="">View All</Link></p>
      <Product />
    </div>
   </section>
   <section className="pt-24 lg:pt-28">
    <Footer />
   </section>
   </>
  );
}
