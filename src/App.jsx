//ESTA ES LA WEB (PORTAL PRINCIPAL)

//Importación de rutas
import { Link, Route, Routes } from 'react-router-dom'

//importación de estilos generales
import './globalStyle/GlobalStyle.scss'

//Importación de views
import Home from './views/Home'
import Contact from './views/Contact'
import Styleguide from './styleguide/Styleguide'

function App() {

  return (
    <>
    <header>
      <h1>Proyecto Gamma</h1>
      <Link to="/contact">Contacto</Link>
      <Link to="/">Home</Link>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/styleguide" element={<Styleguide />} />
      </Routes>
    </main>
    </>
  )
}

export default App
