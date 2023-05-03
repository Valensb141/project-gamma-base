// 1. Importar los etilos del archivo
import './Styleguide.scss'

// Tambn importar los componentes que se usarán
import Nav from './components/Nav/Nav'
import Btn from './components/btn/Btn'


// 2. Crear la función 
function Styleguide() {
    return <>
        {/* <Nav />
        <h1>SOY LA STYLEGUIDE</h1> */}

        <h2>Colors</h2>
        <div className='colors__container'>
            <div className="bg-color-darkerPurple"></div>
            <div className="bg-color-darkPurple"></div>
            <div className="bg-color-mediumPurple"></div>
            <div className="bg-color-lightPurple"></div>
            <div className="bg-color-lighterPurple"></div>
        </div>
    </>
}

// 3. Exportar función
export default Styleguide;