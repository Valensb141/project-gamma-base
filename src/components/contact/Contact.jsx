import './Contact.scss'

function Contact(props) {

    console.log(props);

    return <div className='contact'>
        <div>
            <img className='contact__img' src=( props.img ) alt="" />
        </div>
        <div>
            {/* props.name lo que hace es llamar al dato que metamos cuando el componente esté en uso usando "name=""" */}
            <strong>(props.name)</strong>
            {/* props.icon lo que hace es llamar al dato que metamos cuando el componente esté en uso usando "icon=""" */}
            <p className='contact__text'>(props.icon)</p>
        </div>
    </div>
}

export default Contact;