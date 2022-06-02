import { Link } from 'react-router-dom';
import Nav from './Nav';
import Dropdown from './Dropdown';
import { useState, useEffect  } from "react"
import { useContext, } from "react"
import { search } from "../context/SearchContext"
import { contexto } from "../context/CartContext"


function Header() {

  const [dropdown, setDropdown] = useState(false);
  const {counts} = useContext(contexto);
  const [cantidad, setCantidad] = useState(0);
  const buscar = useContext(search)
  const valor = buscar.handleSearch
  const val = buscar.buscars


  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  
  useEffect(() => {
  setCantidad(counts)
  })

  return (
    <>
      <header>
        <Link to="/">
          <img src="/images/unnamed.jpg" className="logo" />
        </Link>

        <input type="text" onChange={valor} value={val} placeholder=" Buscar por nombre o tipo" className="search" />

        <nav >
          <ul>
            <li className="linkHeader" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}><img src="/images/chat.png " className="linkHeader" /><p>Ayuda</p>  {dropdown && <Dropdown />}</li>
            <li ><Link className='car' to="/Login"><img src="images/usuario.png" className="linkHeader" /><p>Usuario</p></Link></li>
            <li><Link className='car' to="/CartWidget"> <img src="images/carrito.png" className="linkHeader" /><p>Carrito</p><p>{cantidad}</p></Link></li>
          </ul>
        </nav>

      </header>
      <Nav />
    </>
  )
}


export default Header
