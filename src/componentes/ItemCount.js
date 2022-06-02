import { useState } from "react"


const ItemCount = ({ initial, stock, onAdd }) => {

  const [contador, setContador] = useState(initial)

  const add = (e) => {
    contador < stock ? setContador(contador + 1) : setContador(contador + 0)
  }

  const rest = (e) => {
    contador === 0 ? setContador(contador + 0) : setContador(contador - 1)
  }

  const confirm = (e) => {
    onAdd(contador)
  }

  return (

    <div className="counts">
      <button className="suma" onClick={rest} >-</button>
      <div className="contador"><p>{contador}</p></div>
      <button className="suma" onClick={add}>+</button>
      <button className="compra" size='small' onClick={confirm}>Confirmar</button>
    </div>
  )
}

export default ItemCount 