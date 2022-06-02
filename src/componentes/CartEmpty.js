import React from 'react'
import { Link } from 'react-router-dom'

const CartEmpty = () => {
  return (
      <div className='empty'>
    <p className="carritoVacio">Carrito vacio, agregue productos por favor</p>
    <Link to="/" className='linkInicio'> <button className='btnInicio'> Ir a productos</button> </Link>
    </div>
  )
}

export default CartEmpty