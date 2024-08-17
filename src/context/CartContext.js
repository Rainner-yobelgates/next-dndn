"use client"
import { createContext, useEffect, useState } from "react"

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    useEffect(() =>{
        setCartToState()
    }, [])

    const setCartToState = () => {
        setCart(
            localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')): []
        )
    }

    const addItemToCart = async ({name, slug, price, image, stock, variant, brand, quantity, }) => {
        
        const item = {name, slug, price, image, stock, variant, brand, quantity}
        let newCartItems
        const isItemExist = cart?.cartItems?.find((i) => i.slug === item.slug)

        if (isItemExist) {
            let newQuantity;
            
            if (item.quantity === isItemExist.quantity) {
                newQuantity = Math.min(isItemExist.quantity + 1, item.stock);
            }else if(isItemExist.quantity - item.quantity === 1){
                newQuantity = Math.min(isItemExist.quantity - 1, item.stock);
            } 
            else {
                newQuantity = Math.min(isItemExist.quantity + item.quantity, item.stock);
            }

            newCartItems = cart.cartItems.map((i) =>
                i.slug === isItemExist.slug
                    ? { name:item.name, slug:item.slug, price:item.price, stock:item.stock, variant:item.variant, brand:item.brand, image:item.image ,quantity: newQuantity }
                    : i
            );
        }else{
            newCartItems = [...(cart?.cartItems || []), item]
        }
        
        localStorage.setItem("cart", JSON.stringify({cartItems: newCartItems}))
        setCartToState()

    }

    const deleteItemCart = (slug) => {
        const newCartItems = cart?.cartItems?.filter((i) => i.slug !== slug)
        localStorage.setItem("cart", JSON.stringify({cartItems:newCartItems}))
        setCartToState()
    }
    return <CartContext.Provider value={{cart, addItemToCart, deleteItemCart}}>
        {children}
    </CartContext.Provider>
}     

export default CartContext