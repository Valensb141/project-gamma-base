// 1. Importar los etilos del archivo
import './Styleguide.scss'

// Tambn importar los componentes que se usarán
import Nav from './components/Nav/Nav'
//import Btn from './components/btn/Btn'


// 2. Crear la función 
function Styleguide() {
    return <>
        <Nav />
        <h1>SOY LA STYLEGUIDE</h1>
    </>
}

// 3. Exportar función
export default Styleguide;