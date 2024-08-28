'use client'

// import { Product, Store } from '@prisma/client'
import { ShoppingCart } from 'lucide-react'
import { MouseEventHandler, useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import useCart from '@/hooks/useCart'
import { formatPrice } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { Attribute, Combination, Product, Variant } from '@/types/product'
import { Icons } from './Icons'
import { Input } from './ui/input'
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group'

interface InfoProps {
  product: Product
}

const Info: React.FC<InfoProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedAttributeValues, setSelectedAttributeValues] = useState<string[]>([])
  const [variantStock, setVariantStock] = useState<string | number | null | undefined>(product.stock)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const cart = useCart()

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    if (selectedProduct && (product.attributes ?? []).length > 0) {
      cart.addItem(Array.from({ length: quantity }).map(() => selectedProduct))
    } else {
      cart.addItem(Array.from({ length: quantity }).map(() => product))
    }   
  }

  const handleVariantStock = (attrValue: string) => {
    const variant = product.variants?.find((variant) => {
      const attributeMap = variant.combinations.reduce((acc: { [key: string]: string }, combination) => {
        const attrName = product.attributes?.find((attr) => attr.id === combination.value.attribute_id)?.name!
        acc[attrName] = combination.value.value
        return acc
      }, {})

      return Object.keys(attributeMap).every((key) => attributeMap[key] === attrValue)
    })

    if (variant) {
      setVariantStock(variant.stock)
      setSelectedProduct({
        ...product,
        variants: [variant]
      })
    }
  }

  return (
    <div>
      <h1 className='text-3xl font-semibold text-gray-900'>{product.name}</h1>
      <div className='mt-3 flex items-end justify-between'>
        <h2 className='text-2xl font-medium text-gray-900'>
          {/* @ts-ignore */}
          {formatPrice(parseFloat(product.price))}
        </h2>
      </div>
      <p className='my-2 text-muted-foreground'>
        {product.brand?.name}
      </p>
      {/* Attributes */}
      {product.attributes && product.attributes.map((attr, attrIndex) => (
        <div className="flex flex-col gap-y-3 items-start" key={attrIndex}>
          <label htmlFor="size">{attr.name}</label>
          <ToggleGroup
            type="single"
            defaultValue={selectedAttributeValues[attrIndex]}
            value={selectedAttributeValues[attrIndex]}
            variant="outline"
          >
            {attr.values.map((value, index) => (
              <ToggleGroupItem
                key={index}
                value={`${value.value}`}
                onClick={() => {
                  setSelectedAttributeValues((prev) => {
                    const newSelectedAttributeValues = [...prev]
                    newSelectedAttributeValues[attrIndex] = `${value.value}`
                    handleVariantStock(`${value.value}`)
                    return newSelectedAttributeValues
                  })
                }}
                className="data-[state=on]:bg-black data-[state=on]:text-white"
              >
                {value.value.toUpperCase()}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      ))}

      {/* quantity */}
      <div className='flex flex-col gap-y-3'>
        <label htmlFor='quantity' className='mt-5'>Jumlah</label>
        <div className="flex gap-x-6 items-center">
          <Input
            id='quantity'
            type='number'
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            min={1}
            max={variantStock ? variantStock : product.stock}
            className='w-40'
          />
          <span className='text-muted-foreground'>
            {variantStock ? `tersedia ${variantStock}` : `tersedia ${product.stock}`}
          </span>
        </div>
      </div>
      <div className='mt-10 flex items-center gap-x-2'>
        <Button onClick={onAddToCart} className='flex items-center gap-x-2 hover:bg-green-700 bg-green-800'>
          Pesan by WhatsApp
          <Icons.whatsapp />
        </Button>
        <Button onClick={onAddToCart} className='flex items-center gap-x-2' disabled={(product.attributes ?? []).length > 0 ? (selectedProduct ? false : true) : false}>
          Tambah ke Keranjang
          <ShoppingCart />
        </Button>
      </div>
      <Separator className='my-4' />
      <div className='flex flex-col gap-y-6'>
        <h3 className='font-medium'>Deskripsi :</h3>
        {product.description ? (
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
        ) : (
          <p>Tidak ada deskripsi</p>
        )}
      </div>
    </div>
  )
}

export default Info
