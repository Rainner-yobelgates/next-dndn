'use client'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import useCart from '@/hooks/useCart'
import { formatPrice } from '@/lib/utils'

const Summary = () => {
  const [message, setMessage] = useState('');
  const cart = useCart()

  const totalPrice = cart.items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0)

  useEffect(() => {
    const currentUrl = typeof window !== 'undefined' ? window.location.origin : ''
    if (cart.items.length > 0) {
      setMessage(
        `Halo,\n\n` +
        `Saya ingin memesan produk berikut:\n` +
        `${cart.getItems()
          .map((item) => (
            `Nama Produk : ${item.name}\n` +
            `Harga       : ${formatPrice(item.price as number)}\n` +
            `Jumlah      : ${cart.getQuantity(item.id!)}\n` +
            `Brand       : ${item.brand!.name}\n` +
            `Subtotal    : ${formatPrice((item.price as number) * cart.getQuantity(item.id!))}\n` +
            `Link Produk : ${currentUrl}/product/${item.slug}`
          )).join('\n\n')}\n\n` +
        `Total Pembelian : ${formatPrice(totalPrice)}\n\n` +
        `Terima kasih.`
      );

    }
  }, [cart.items]);

  const handleCheckout = () => {
    // Replace 'nomor_telepon' with the actual phone number
    const phoneNumber = 'nomor_telepon'; // e.g., '1234567890'
    const url = `https://api.whatsapp.com/send?phone=6285776594448&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      className='
        mt-16
        rounded-lg
        bg-gray-50
        px-4
        py-6
        sm:p-6
        lg:col-span-5
        lg:mt-0
        lg:p-8
      '
    >
      <h2 className='text-lg font-medium text-gray-900'>Ringkasan Pesanan</h2>
      <div className='mt-6 space-y-4'>
        <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
          <div className='text-base font-medium text-gray-900'>Total Pesanan</div>
          {formatPrice(totalPrice)}
        </div>
        <Button
          disabled={cart.items.length === 0}
          onClick={handleCheckout}
          className='w-full mt-6 hover:before:-translate-x-[500px]'
        >
          Checkout
        </Button>
      </div>
    </div>
  )
}

export default Summary
