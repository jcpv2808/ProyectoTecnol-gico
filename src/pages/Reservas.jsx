import React from 'react'
import Navigation from '../components/Navigation'
import { Link } from 'react-router-dom'
import './Reservas.css'

function Reservas() {
  return (
    <div>
      <Navigation />
      <section id="reservas">
        {/* IMPORTANTE INI */}
        <div className="container d-flex row justify-content-center">
          <div className="col-lg-7">
            <h1 className='importanteTitulo mb-4'>Realiza tu Reserva</h1>
            <p className='importante'>¡IMPORTANTE!</p>
            <p>Antes de enviar realizar tu reserva debe tener en cuenta lo siguiente:</p>
            <ul className='mb-5'>
              <li>Se tomarán en cuenta las reservas realizadas <b>con un mínimo de 24
              horas de anticipación.</b></li>
              <li>Se aceptarán reservas por este medio <b>solo de Lunes a Viernes.</b></li>
              <li>Reservas sujetas a disponibilidad del restaurante. <b>No disponible en 
              feriados y días festivos.</b></li>
              <li><b>La reserva solo será válida cuando el restaurante realice la 
              confirmación por correo electrónico o llamada telefónica.</b></li>
              <li>En el caso se requiera una reserva para fines de semana, comunicarse 
              directamente con el numéro de reserva del restaurante de su elección.</li>
            </ul>
            <div id="btnContainer" className='d-flex justify-content-center'>
              <Link id='btnAceptar' className="pt-2 pb-2 ps-4 pe-4" to="/ReservaLocales">Aceptar</Link>
            </div>
          </div>
        </div>
      </section>
        {/* IMPORTANTE FIN */}
    </div>
  )
}

export default Reservas