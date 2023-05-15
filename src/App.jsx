//ESTA ES LA WEB (PORTAL PRINCIPAL)
//Aquí se introduce los elementos que no queremos que se muevan en ningun view (como el header y el footer)


//Importación de rutas
import { Link, Route, Routes } from 'react-router-dom'


//Importación de estilos específicos?
//import './app.css'


//Importación de views
import Contacts from './views/Contacts/Contacts'
import Home from './views/Home/Home'
import Styleguide from './styleguide/Styleguide'


 //importación de estilos generales?
import './globalStyle/GlobalStyle.scss'


//Creación de función
function App() {

  return (
    <>
    <header>
      <h1>Proyecto Gamma</h1>

    </header>
    <main>
    

      {/* Aquí le decimos que el contenido depende de la ruta */}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/styleguide" element={<Styleguide />} />
      </Routes> 
    </main>
    </>
  )
}

export default App
