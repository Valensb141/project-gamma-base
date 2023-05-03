// 1. Importar los etilos del componente
import './Nav.scss'
import { Link } from 'react-router-dom';

// 2. Crear la función Btn
function Nav() {
    return <>
        
        <div>

            <h1>Valentina's Styleguide</h1>

        </div>


        <div className="sg__nav">
            
            <link> <a href="">Colors</a> </link>
            <link>Typography</link>
            
        </div>

    </>
}

// 3. Exportar función
export default Nav;