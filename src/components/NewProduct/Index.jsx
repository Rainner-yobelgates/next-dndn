"use client"
import formatCurrency from "@/utils/FormatCurrency";
import Image from "next/image";
import Link from "next/link";

const NewProduct = ({api, loading}) => {
    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-6">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="flex-shrink-0 w-full">
                        <div className="skeleton h-64 w-full"></div>
                        <div className="skeleton h-4 w-28 mt-2"></div>
                        <div className="skeleton h-4 w-full mt-2"></div>
                        <div className="skeleton h-4 w-full mt-2"></div>
                    </div>
                ))}
            </div>

        )
    }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-6">
        {api.payload?.data.map((product, index) => {
            return (
                <Link href={`/product/${product.slug}`} key={index}>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="flex h-64"> {/* Set a fixed height for the figure */}
                            <Image
                            src={`https://api.al-miffa.or.id/storage/${product.images[0].path}`} // Dynamic path to your image
                            alt="Shoes"
                            layout="responsive"
                            width={500} // Set a default width
                            height={500} // Set a default height
                            className="object-cover w-full h-full" // Ensure the image covers the container
                            />
                        </figure>
                        <div className="card-body text-center gap-0">
                            <h2 className="text-md">{product.name}</h2>
                            <p className="font-bold text-sm mb-3">IDR {formatCurrency(product.price)}</p>
                            <p className="font-bold text-sm">{product.brand.name}</p>
                        </div>
                    </div>
                </Link>
            )
        })}
  </div>
  )
}

export default NewProduct