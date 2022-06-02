import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <nav className="secciones">
            <ul>
                <li><NavLink className='link' to="category/Cerveza"><p>Cervezas</p></NavLink></li>
                <li><NavLink className='link' to="category/Vino"><p>Vinos</p></NavLink></li>
                <li><NavLink className='link' to="category/Destilado"><p>Destilados</p></NavLink></li>
                <li><NavLink className='link' to="category/Aperitivo"><p>Aperitivos</p></NavLink></li>
            </ul>
        </nav>
    )

}

export default Nav