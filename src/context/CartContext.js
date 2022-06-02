import { createContext, useState } from "react"
export const contexto = createContext()
const { Provider } = contexto

const CartContext = ({children}) => {

    const [carrito,setCarrito] = useState([])
    const [total,setTotal] = useState(0)

    const borrarDelCarrito = (id) => {
        setCarrito(carrito.filter(item => item.id !== id))
    }

    const agregarAlCarrito = (product ,count) => {
 
      if (!isInCart(product)) {
        let copiCart = carrito.slice(0);
        copiCart.push({...product, count})
        setCarrito(copiCart)
    }
     
    }

    const isInCart = (product) => {
      return  carrito && carrito.find(item => item.id === product.id)
    }

    const valorDelContexto = {
        total : total,
        carrito : carrito,
        borrarDelCarrito : borrarDelCarrito,
        agregarAlCarrito : agregarAlCarrito,
        isInCart : isInCart
    }
    
    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CartContext