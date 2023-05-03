// 1. Importar los etilos del componente
import './Nav.scss'
import { Link } from 'react-router-dom';

// 2. Crear la función Btn
function Nav() {
    return <>
        
        <div>

            <h1>Valentina's Styleguide</h1>

        </div>


        
            
        <nav className="nav">

            <ul className="nav__icon">

                <li className="nav__list"> 
                    <a href="">Colors</a>
                </li>

                <li className="nav__list"> 
                    <a href="">Typography</a>
                </li>

                <li className="nav__list"> 
                    <a href="">Icons</a>
                </li>

            </ul>

        </nav>

    </>
}

// 3. Exportar función
export default Nav;