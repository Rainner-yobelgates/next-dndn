'use server'

import { api } from "@/lib/axios";
import { SearchProducts } from "@/types/search-products"

export const searchProducts = async (query: string): Promise<SearchProducts> => {
    const response = await api.get(`/search?keyword=${query}`);

    // const productsByCategory = response.data.reduce((acc: SearchProducts[], product: any) => {
    //     const category = product.category.name;
    //     const existingCategory = acc.find((item) => item.category === category);

    //     if (existingCategory) {
    //         existingCategory.products.push(product);
    //     } else {
    //         acc.push({
    //             category,
    //             products: [product],
    //         });
    //     }


    //     return acc;
    // }, []);

    const productsByCategory = response.data.payload as SearchProducts;

    return productsByCategory;
}

export default searchProducts;