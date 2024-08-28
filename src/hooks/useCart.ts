import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { toast } from 'react-hot-toast'
import { Product } from '@/types/product'

interface CartStore {
    items: Product[]
    addItem: (data: Product[]) => void
    removeItem: (id: number) => void
    removeAll: () => void
    getQuantity: (id: number) => number
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
            removeItem: (id: number) => {
                set({ items: [...get().items.filter((item) => item.id !== id)] })
                toast.success('Item removed from the cart')
            },
            removeAll: () => set({ items: [] }),
            getQuantity: (id: number) => get().items.filter((product) => product.id == id).length || 0,
            // unuque items
            getItems: () => get().items.filter((item, index, self) => self.findIndex((t) => t.id === item.id) === index),
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => localStorage),
        },
    ),
)

export default useCart
