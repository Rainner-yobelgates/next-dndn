'use client'

import { X } from 'lucide-react'
import Image from 'next/image'

import IconButton from '@/components/ui/IconButton'
import useCart from '@/hooks/useCart'
import { formatPrice } from '@/lib/utils'
import Link from 'next/link'
import { Product } from '@/types/product'

interface CartItemProps {
  data: Product
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart()

  const onRemove = () => {
    cart.removeItem(data)
  }

  return (
    <li className='flex py-6 border-b'>
      <div className='relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48'>
        <Image
          fill
          // // @ts-expect-error
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/storage/${data.images![0].path}`}
          alt={data.name!}
          className='object-cover object-center'
        />
      </div>
      <div className='relative ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
        <div className='absolute z-10 right-0 top-0'>
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
          <div className='flex justify-between'>
            <Link
              href={`/products/${data.slug}`}
              className='sm:text-lg font-semibold text-black line-clamp-2'
            >
              {data.name}
            </Link>
          </div>

          <div className='mt-1 text-sm'>
            <p className='text-gray-500 sm:text-center capitalize'>
              {data.brand?.name}
            </p>
          </div>

          {/* @ts-expect-error Decimal type */}
          {formatPrice(parseFloat(data.price))} x {cart.getQuantity(data)}
        </div>
      </div>
    </li>
  )
}

export default CartItem
