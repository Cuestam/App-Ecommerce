import { Link } from "react-router-dom"
import { useContext } from "react"
import { contexto } from "../context/CartContext"
import { toast } from "react-toastify"

const Items = ({item}) => {

      const { agregarAlCarrito } = useContext(contexto)
    
  const hadleClick = () => {
        
      agregarAlCarrito(item, 1)
      toast.success("Producto añadido al carrito" , {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
   }       
  
      return (
            <div className="cards">
                   <img  className="image" src={item.url} />
                  <h3 className="titulo">{item.nombre}</h3>
                  <p className="price"> {'$' + item.precio} </p>
                  <div className="buttonBuy">
                   <button className= 'comprar'onClick={hadleClick} to="/CartWidget"  variant="contained" size='small'>Comprar</button> 
                   <Link className="linkCard" to={`/itemDetailContainer/${item.id}`}> <button className='comprar' variant="contained" size='small' color ='error'> Ver</button></Link>
                  </div>
            </div>
      )
}


export default Items