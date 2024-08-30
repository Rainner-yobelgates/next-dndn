import { Product } from "@/types/product";
import ProductCard from "./cards/ProductCard";
import ProductCardSkeleton from "./skeleton/ProductCardSkeleton";
import { Skeleton } from "./ui/skeleton";

interface IProductListProps {
    isLoading: boolean;
    products: Product[] | undefined;
    title: string;
    description: string;
}

const ProductList: React.FC<IProductListProps> = ({ isLoading, products, title, description }) => {

    if (isLoading) {
        return (
            <div className="space-y-8">
                <div>
                    <Skeleton className='h-4 w-1/2' />
                    <Skeleton className='h-4 w-1/2' />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <ProductCardSkeleton key={i} />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold leading-[1.1]">
                    {title}
                </h1>
                <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    {description}
                </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {products?.map((product, index) =>
                (
                    <ProductCard key={index} product={product} />
                )
                )}
            </div>
        </div>
    );
}

export default ProductList