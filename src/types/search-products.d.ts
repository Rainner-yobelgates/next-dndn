import { Product } from "./product"

export interface SearchProducts {
    man_collections: {
        slug: string
        name: string
    }[]
    woman_collections: {
        slug: string
        name: string
    }[]
    products: Product[]
}
