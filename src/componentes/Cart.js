import React from 'react'
import { useContext,} from "react"
import { contexto } from "../context/CartContext"
import { Link } from 'react-router-dom';

const Cart = () => {

    const resultado = useContext(contexto)
    const carrito = resultado.carrito
    const borrar = resultado.borrarDelCarrito


  return (
    <>
          
          {carrito.map(item => (
              <div className='finalizarCompra' key={item.id}>
                  <h3>{item.nombre}</h3>
                  <img  className="imgcar" src={item.url} />
                  <p>{item.description}</p>
                  <p>${item.precio} x {item.count}</p>
                  <p>Total : ${item.precio * item.count}</p>
                    <button className='borrar' onClick={() => borrar(item.id)}>Borrar</button>
              </div>
          ))}
          <div className='totalCart'>

        <h1 className='total'>Total : $ {carrito.reduce((acc, ele) => {
      acc = acc + parseFloat(ele.precio * ele.count)
      return acc}, 0) } </h1>
      <button className='btnConfirm'><Link className='linkFin' to="/FinalizarCompra">Finalizar compra </Link></button> 
      </div>
      </>
  )
}

export default Cart


