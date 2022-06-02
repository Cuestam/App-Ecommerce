import ItemCount from "./ItemCount"
import { useState, useContext } from "react"
import { contexto } from "../context/CartContext"
import { Link } from 'react-router-dom';


const ItemDetail = ({ item }) => {

  const [confirmado, setSeleccionado] = useState(false)
  const { agregarAlCarrito } = useContext(contexto)


  const onAdd = (unidadSeleccionada) => {
    if (unidadSeleccionada !== undefined) {
      setSeleccionado(unidadSeleccionada)
    }
  }

  const hadleClick = () => {
    agregarAlCarrito(item, confirmado)
 }

  return (

    <section className="detail">
      <h3 className="titulo">{item.nombre}</h3>
      <img className="imageDetail" src={item.url} />
      <p>{item.description}</p>
      <p className="price"> {'$' + item.precio} </p>

      {confirmado ?  <Link to="/CartWidget" className="finalizar" onClick={hadleClick} >Ir a carrito</Link> : <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/> }

    </section>


  )
}



export default ItemDetail 