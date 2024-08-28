import { api } from "@/lib/axios";
import { Product } from "@/types/product";
import { useQuery } from "@tanstack/react-query";

const useProductDetail = (productId: string) => {
    return useQuery({
        queryKey: ['product', productId],
        queryFn: async () => {
            const res = await api.get(`/products/${productId}`);
            return res.data.payload as Product;
        }
    })
}

export default useProductDetail