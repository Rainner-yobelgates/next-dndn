'use client'

import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { HTMLAttributes, MouseEventHandler } from 'react'

import { cn, formatPrice } from '@/lib/utils'
import IconButton from '@/components/ui/IconButton'
import useCart from '@/hooks/useCart'
import { Product } from '@/types/product'
import { Yeseva_One } from 'next/font/google'

// interface Category {
//   name: string
// }

// interface Product {
//   id: string
//   name: string
//   price: string
//   description: string
//   storeId: string
//   slug: string
//   Store: {
//     name: string
//   }
//   images: {
//     url: string
//   }[]
// }

const yasevaOne = Yeseva_One({
  weight: "400",
  subsets: ["latin"],
})

interface ProductCardProps {
  product: Product
  // product: Product & {
  //   Category: Category
  // }
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // const cart = useCart()

  // const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
  //   e.preventDefault()

  //   cart.addItem(product)
  // }

  return (
    <div className='group/card bg-white border hover:shadow-xl duration-300 transition-all rounded-md space-y-4 h-full'>
      <Link
        href={`/product/${product.slug}`}
      // href={`/${product.storeId}/${product.slug}?productId=${product.id}`}
      >
        {/* Images and Actions */}
        <div className='aspect-square m-3 rounded-md bg-gray-100 relative'>
          <Image
            // @ts-ignore
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/storage/${product.images[0].path}`}
            fill
            sizes='200'
            // @ts-ignore
            alt={product.name}
            className='aspect-square object-cover rounded-md'
          />
        </div>
        <div className='px-4 space-y-3 pb-6'>
          <div className='space-y-1'>
            {/* Product Name */}
            <p className='text-sm text-gray-500'>{product.brand?.name}</p>
            <p
              className={cn(
                'font-semibold text-black group-hover/card:text-black text-lg truncate',
                yasevaOne.className,
              )}
              title={product.name}
            >
              {product.name}
            </p>
            {/* <Image alt='Stars' src='/svg/stars.svg' width={100} height={100} /> */}
          </div>
          <div className='flex items-center'>
            {/* Price */}
            <div className='font-semibold text-primary'>
              {/* ts-expect-error */}
              {formatPrice(parseFloat(`${product.price}`))}
            </div>
            {/* <div className='flex justify-center group/icon'>
              <IconButton
                aria-label='add-to-cart'
                className='bg-yellow-100 group-hover/icon:bg-primary'
                onClick={onAddToCart}
                icon={
                  <ShoppingCart
                    size={20}
                    className='text-primary-600 group-hover/icon:text-primary-50'
                  />
                }
              />
            </div> */}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
