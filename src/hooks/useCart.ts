import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { toast } from 'react-hot-toast'
import { Product } from '@/types/product'

interface CartStore {
    items: Product[]
    addItem: (data: Product[]) => void
    removeItem: (id: Product) => void
    removeAll: () => void
    getQuantity: (id: Product) => number
    getItems: () => Product[]
}

const useCart = create(
    persist<CartStore>(
        (set, get) => ({
            items: [],
            addItem: (data: Product[]) => {
                // const currentItems = get().items
                // const existingItem = currentItems.find((item) => item.id === data.id)

                // if (!existingItem) {
                //     // return toast('Item already in cart.')
                //     toast.success('Item added to cart')
                // }

                set({ items: [...get().items, ...data] })
                toast.success('Item added to cart', {
                    icon: '🛒',
                })
            },
            removeItem: (product: Product) => {
                set({ items: [...get().items.filter((item) => item.id !== product.id && item.variants![0]?.id !== product.variants![0]?.id)] })
                toast.success('Item removed from the cart')
            },
            removeAll: () => set({ items: [] }),
            // getQuantity: (id: number) => get().items.filter((product) => product.id === id).length || 0, 
            getQuantity: (product: Product) => get().items.filter((item) => item.id === product.id && item.variants![0]?.id === product.variants![0]?.id).length || 0,
            // unuque items
            getItems: () => get().items.filter((item, index, self) => self.findIndex(
                (t) => (t.id === item.id) && (t.variants![0]?.id === item.variants![0]?.id),
            ) === index),
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => localStorage),
        },
    ),
)

export default useCart
