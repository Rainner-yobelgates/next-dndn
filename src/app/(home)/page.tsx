"use client"
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import { Illustrations } from "@/components/illustrations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CollectionList from "@/components/CollectionList";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import useBrand from "@/hooks/brand/useBrand";
import BrandList from "@/components/BrandList";
import useCollectionByWomen from "@/hooks/home/useCollectionByWomen";
import ProductList from "@/components/ProductList";
import useCollectionByMen from "@/hooks/home/useCollectionByMen";
import useNewArrivalCollection from "@/hooks/home/useNewArrivalCollection";
import BannerList from "@/components/BannerList";
import useBanner from "@/hooks/home/useBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";



export default function Home() {
  const { data: dataBrand, isLoading: isLoadingBrand } = useBrand();
  const { data: dataCollectionByWomen, isLoading: isLoadingCollectionByWomen } = useCollectionByWomen();
  const { data: dataCollectionByMen, isLoading: isLoadingCollectionByMen } = useCollectionByMen();
  const { data: dataNewArrivalCollection, isLoading: isLoadingNewArrivalCollection } = useNewArrivalCollection();
  const { data: dataBanner, isLoading: isLoadingBanner } = useBanner();

  const plugin = useRef(
    Autoplay({
      delay: 2000,
    })
  )
  const plugin2 = useRef(
    Autoplay({
      delay: 2000,
    })
  )


  return (
    <main className="container py-14">
      {/* Banner */}
      <BannerList banners={dataBanner} isLoading={isLoadingBanner} />
      <Separator className="my-8" />
      {/* Informasi Gratis Pengiriman dan Flexible Pembayaran */}
      <div className={cn(
        "grid grid-cols-1 gap-4 md:grid-cols-2",
      )}>
        <div className="w-full h-40 flex space-x-10 items-center border rounded-lg bg-gradient-to-b from-muted/50 to-muted p-6">
          {/* <Truck className="h-12 w-12 text-yellow-400" /> */}
          <Illustrations.shipping className="h-28 w-28 text-yellow-400" />
          <div>
            <h1 className="text-lg font-bold">Gratis Pengiriman</h1>
            <p>Gratis pengiriman untuk pembelian diatas Rp 100.000</p>
          </div>
        </div>
        <div className="w-full h-40 flex space-x-10 items-center border rounded-lg bg-gradient-to-b from-muted/50 to-muted p-6">
          <Illustrations.flexiblePayment className="h-28 w-28 text-yellow-400" />
          <div>
            <h1 className="text-lg font-bold">Flexible Payment</h1>
            <p>Pembayaran yang mudah dan aman</p>
          </div>
        </div>
      </div>
      <div className="space-y-16">
        {/* Koleksi Pria */}
        <CollectionList products={dataCollectionByMen} isLoading={isLoadingCollectionByMen} title="Koleksi Pria" description="Produk yang cocok untuk pria" />
        {/* Koleksi Wanita */}
        <CollectionList products={dataCollectionByWomen} isLoading={isLoadingCollectionByWomen} title="Koleksi Wanita" description="Produk yang cocok untuk wanita" />
        {/* Produk Terbaru */}
        <ProductList products={dataNewArrivalCollection} isLoading={isLoadingNewArrivalCollection} title="Produk Terbaru" description="Produk terbaru yang kami tawarkan" />
        {/* Brand Kita */}
        <BrandList data={dataBrand} isLoading={isLoadingBrand} />
        {/* Testimoni */}
        <div className="space-y-8">
          <Carousel
            plugins={[plugin2.current]}
            opts={{
              loop: true,
              dragFree: false,
              slidesToScroll: 1,
              skipSnaps: true,
              align: 'center',
            }}
            draggable={false}
          >
            <CarouselContent>
              {Array.from({ length: 9 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="aspect-square h-full relative">
                    <Image src={`/reviews/${index + 1}.png`} alt="reviews"
                      fill
                      sizes='200'
                      className='aspect-square object-cover rounded-md'
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        {/* Syarat, Ketentuan & FAQ */}
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-bold">Syarat & Ketentuan</h1>
            <p>
              Setelah membaca dan memahami Syarat dan Ketentuan serta FAQ ini. Dengan melanjutkan pembelian, Anda dianggap telah memahami dan menyetujui seluruh ketentuan yang berlaku dalam Syarat dan Ketentuan serta FAQ ini.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1 className="text-lg font-bold">Apakah items di DNDN Luxury original? Bagaimana dengan kualitasnya?</h1>
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  <p>
                    Yes, items yang kami jual di produksi dari berbagai negara yang berbeda.
                    Karena DNDN Luxury merupakan direct importer since 2019, jadi kami berani claim bahwa items yang kami jual adalah Original Factory Outlet.
                  </p>
                  <p>
                    And dont worry, meskipun sisa pabrik, bukan berarti kami sembarangan kirim.
                    Ada cacat, kami tukarkan terlebih dahulu supaya barang yg kamu terima dalam keadaan bagus & layak pakai.
                    Kami juga mensortir barang yang kita ambil dari Factory Outlet, pasti diberikan yang paling terbaik untuk customer.
                  </p>
                  <p className="font-bold">
                    NOTES : Barang yang defectnya terlalu parah tidak akan kami jual.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <h1 className="text-lg font-bold">Apakah items di DNDN Luxury original?</h1>
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  <p>
                    Yes. Semua items di DNDN Luxury adalah Original Factory Outlet / Sisa manufacture
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <h1 className="text-lg font-bold">Apa itu barang factory outlet?</h1>
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  <p>
                    Overstock pabrik yang tidak masuk store, barang yang tidak lulus Quality Control, sehingga tidak bisa dijual di retail store
                    (Store yang ada di Mall Indonesia).
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  <h1 className="text-lg font-bold">Apa itu barang factory outlet?</h1>
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  <p>
                    Overstock pabrik yang tidak masuk store, barang yang tidak lulus Quality Control, sehingga tidak bisa dijual di retail store
                    (Store yang ada di Mall Indonesia).
                  </p>
                  <ul className="list-inside">
                    <li>Tidak selalu mulus 100% seperti barang yang dibeli di butik atau store di mall.</li>
                    <li>Label tag dan price tag bisa salah dan berbeda dengan store, serta terkadang terdapat perbedaan dalam kualitas material, hardware, dan jahitan.</li>
                    <li>Barang tidak selalu mendapatkan Dust Bag, Paperbag, dan Card.</li>
                    <li>Karena barang factory outlet tidak lulus QC, items di DNDN Luxury tidak bisa dibandingkan secara keseluruhan dengan butik atau store di mall.</li>
                    <li>Last season product.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </main >
  );
}
