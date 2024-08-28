// {
//     "id": 13,
//     "name": "Belt",
//     "slug": "belt",
//     "price": 1200000,
//     "condition": "New",
//     "stock": 12,
//     "status": 1,
//     "isPreorder": 0,
//     "day_of_preorder": 0,
//     "isMan": 1,
//     "isWoman": 1,
//     "description": "<p>Test</p>",
//     "created_at": "2024-07-29T22:15:39.000000Z",
//     "updated_at": "2024-08-17T15:49:15.000000Z",
//     "images": [
//         {
//             "path": "products/W9XNcWZJ7J0ikmSy-3TZjTFRLWWeseKZK-G4MuwuvyRygjEcrl.webp"
//         },
//         {
//             "path": "products/9EveQBIbm3xDUJag-GIDDNkGm7vU3WWsL-8LUYmQQPttOmfXAv.webp"
//         }
//     ],
//     "brand": {
//         "id": 2,
//         "name": "Kenzo"
//     },
//     "attributes": [
//         {
//             "id": 18,
//             "product_id": 13,
//             "name": "Size",
//             "values": [
//                 {
//                     "id": 45,
//                     "attribute_id": 18,
//                     "value": "m"
//                 },
//                 {
//                     "id": 46,
//                     "attribute_id": 18,
//                     "value": "l"
//                 },
//                 {
//                     "id": 47,
//                     "attribute_id": 18,
//                     "value": "s"
//                 }
//             ]
//         }
//     ],
//     "variants": [
//         {
//             "id": 50,
//             "product_id": 13,
//             "stock": 3,
//             "status": 1,
//             "created_at": null,
//             "updated_at": null,
//             "combinations": [
//                 {
//                     "id": 78,
//                     "product_variant_id": 50,
//                     "attribute_value_id": 45,
//                     "value": {
//                         "id": 45,
//                         "attribute_id": 18,
//                         "value": "m"
//                     }
//                 }
//             ]
//         },
//         {
//             "id": 51,
//             "product_id": 13,
//             "stock": 4,
//             "status": 1,
//             "created_at": null,
//             "updated_at": null,
//             "combinations": [
//                 {
//                     "id": 79,
//                     "product_variant_id": 51,
//                     "attribute_value_id": 46,
//                     "value": {
//                         "id": 46,
//                         "attribute_id": 18,
//                         "value": "l"
//                     }
//                 }
//             ]
//         },
//         {
//             "id": 52,
//             "product_id": 13,
//             "stock": 5,
//             "status": 1,
//             "created_at": null,
//             "updated_at": null,
//             "combinations": [
//                 {
//                     "id": 80,
//                     "product_variant_id": 52,
//                     "attribute_value_id": 47,
//                     "value": {
//                         "id": 47,
//                         "attribute_id": 18,
//                         "value": "s"
//                     }
//                 }
//             ]
//         }
//     ]
// }
export type Product = {
    id?: number
    name?: string
    slug?: string
    price?: string | number
    stock?: string | number
    isPreorder?: string | number
    images?: {
        path: string
    }[]
    conditions?: string
    status?: string
    isMan?: number
    isWoman?: number
    description?: string
    created_at?: string
    updated_at?: string
    brand?: {
        id: string
        name: string
    }
    attributes?: Attribute[]
    variants?: Variant[]
}

type Attribute = {
    id: number
    name: string
    values: {
        id: number
        attribute_id: number
        value: string
    }[]
}

type Variant = {
    id: number
    product_id: number
    stock: number
    status: number
    created_at: string
    updated_at: string
    combinations: Combination[]
}

type Combination = {
    id: number
    product_variant_id: number
    attribute_value_id: number
    value: {
        id: number
        attribute_id: number
        value: string
    }
}