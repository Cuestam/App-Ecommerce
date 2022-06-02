import { useContext} from "react"
import { contexto } from "../context/CartContext"
import Cart from "./Cart"
import CartEmpty from "./CartEmpty"

const CartWidget = () => {
  const {carrito} = useContext(contexto)

  return (
    
    <section className="cartWidget">
     { carrito.length === 0 ?  <CartEmpty/> : <Cart/> } 
     </section>
  )
}


export default CartWidget