//En cada view debe de estar la función y el export default para que se vea en pantalla
//Tambn debe tener importado su archivo .scss o .css en caso de tenerlo
import './Contacts.scss'
import Contact from "../components/contact/Contact.jsx";

function Contacts() {
    return <div>
        {/* Dentro del componente metemos los datos que llevara el "props" */}
    <Contact name="María" icon="emoji" img="http://placekitten.com/200/300"/>
    </div> 
}

export default Contacts;