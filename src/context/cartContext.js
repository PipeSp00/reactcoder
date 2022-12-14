import { createContext, useContext, useState } from "react"


export const CartContext =  createContext ([])

export const useCartContext = () => useContext(CartContext)
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState ([])

    const total = () => cart.reduce ((acumulador, producto) => acumulador + producto.precio * producto.cantidad, 0)

    const removeProduct = (id) => {
        const newCart = cart.filter((producto) => producto.id !== id);
    setCart(newCart)

    }

    const emptyCart = () => setCart([])
    const addProduct = (item, cantidad) => {


        const element = cart.find((producto) => producto.id === item.id);
    
        if (!element) return setCart([...cart, { ...item, cantidad }]);
    
        const newCart = cart.map((producto) => {
          if (producto.id === item.id) {
            return { ...producto, cantidad: producto.cantidad + cantidad };
          }
          return producto;
        });
        setCart(newCart);
      };

    const value = {

        cart, 
        addProduct,
        removeProduct,
        total,
        emptyCart
    }



    return <CartContext.Provider value ={value}> {children}</CartContext.Provider>
}