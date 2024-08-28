import Gallery from "@/components/gallery/Gallery"
import Info from "@/components/Info"
import { api } from "@/lib/axios";
import { Image } from "@/types/images";
import { Product } from "@/types/product";
import Head from "next/head"

const page = async ({
    params,
}: {
    params: {
        slug: string,
    },
}) => {

    const { slug } = params;
    const data = await api.get('/product/' + slug);
    const product = data.data.payload as Product;

    return (
        <div className="container py-14">
            {/* <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center"> */}
            <main className="grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:items-start lg:gap-x-8">
                <Gallery images={
                    product.images != null ? product.images?.map((image) => {
                        return {
                            path: image.path,
                        } as Image
                    }) : []
                } />
                <Info product={product} />
            </main>
        </div>
    )
}

export default page