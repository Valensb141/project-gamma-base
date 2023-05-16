import { useEffect } from 'react';
import './Contact.scss'

function Contact(props) {
    // creamos variable (data) y la variable que usaremso para hacer cambios (setData)
    let [data, setData] = useState([]);

    //Solicito la información Contactos
    // Hooks: UseEffect (Hacer algo en concreto cuando cambie algo) y UseState(refresca la vista cuando cambie algo)
    useEffect(() => {
    fetch('/contacts.json')
    .then(res => res.json())
    .then(data => {
        setData(info);
    });
    })

    // En este caso se usaría el UseState, queremos que se vuelva ejecutar nuestra funcion pero con los datos nuevos
    return <div>
        {/* el map se usará siempre que querramos usar un array para decirle al componente los datos que utilizará */}
        {data.map(item => <Contact img={item.amg} name={item.name} icon={item.icon}/>)}
    </div>

}

export default Contact;