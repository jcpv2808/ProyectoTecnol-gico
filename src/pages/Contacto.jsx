import React from 'react'
import Navigation from '../components/Navigation'
import './Contacto.css'
import contactoImg from "../assets/contactoImg.png"
import { Link } from 'react-router-dom'

function Contacto() {
  let prefijosNumericos =
    <select id='prefijosNumericos'>
      <option value="54">AR (+54)</option>
      <option value="55">BR (+55)</option>
      <option value="56">CL (+56)</option>
      <option value="57">CO (+57)</option>
      <option value="593">EC (+593)</option>
      <option value="51" selected>PE (+51)</option>
      <option value="58">VE (+58)</option>
    </select>

  return (
    <div>
      <Navigation />
      <div className="container d-flex row justify-content-center">
        {/* IMAGEN INI*/}
        <div className="col-lg-6">
          <img src={contactoImg} alt="" className='img-fluid contactoImg' />
        </div>
        {/* IMAGEN INI*/}
        {/* CONTACTO INI */}
        <div className="col-lg-6 d-flex contacto">
          {/* TITULO INI */}
          <div>
            <h1 id='contactateTitulo'>Contáctate con nosotros</h1>
          </div>
          {/* TITULO FIN */}
          {/* INFO INI */}
          <div id='contactenosInfoNotas' className='text-center'>
            <p>Contáctenos utilizando la información que se encuentra a continuación.</p>
            <p>Responderemo rápidamente a sus consultas y comentarios.</p>
          </div>
          {/* INFO FIN */}
          {/* NOMBRES Y APELLIDOS INI */}
          <div className='col-lg-12 row pb-4 justify-content-between'>
            <div className='col-lg-5'>
              <p className='m-0 pb-1'><b>Nombres</b></p>
              <div>
                <input type="text" placeholder='Nombres' className='w-80 inputEstilo' />
              </div>
            </div>
            <div className='col-lg-5'>
              <p className='m-0 pb-1'><b>Apellidos</b></p>
              <div>
                <input type="text" placeholder='Apellidos' className='w-80 inputEstilo' />
              </div>
            </div>
          </div>
          {/* NOMBRES Y APELLIDOS FIN */}
          {/* EMAIL INI */}
          <div className='col-lg-12 row pb-4'>
            <p className='m-0 pb-1'><b>Email</b></p>
            <div className='col-lg-12'>
              <input type="text" placeholder='tucompañia@compañia.com' id='inputCorreo' className='inputEstilo' />
            </div>
          </div>
          {/* EMAIL FIN */}
          {/* CELULAR Y COMPAÑIA INI */}
          <div className='row justify-content-between mb-3'>
            <div class="col-lg-6 row">
              <p className='m-0 pb-1'><b>Celular</b></p>
              {/* SELECT COMPUESTO INI*/}
              <div className='row' id='selectCompuesto'>
                <div class="col-lg-6 prefijosContainer">{prefijosNumericos}</div>
                <div className='col-lg-6' id='celularInputContainer'>
                  <input id='celularInput' type="number" placeholder="999999999" />
                </div>
              </div>
              {/* SELECT COMPUESTO FIN*/}
            </div>
            <div className='col-lg-5'>
              <div className='col-lg-12'>
                <p className='m-0 pb-1'><b>Compañia</b>(Opcional)</p>
                <input type="text" placeholder='Tu compañia' className='inputEstilo' />
              </div>
            </div>
          </div>
          {/* CELULAR Y COMPAÑIA INI */}
          {/* MENSAJE INI */}
          <div className='col-lg-12 row pb-4'>
            <p className='m-0 pb-1'><b>Mensaje</b></p>
            <div className='col-lg-12'>
              <input type="text" placeholder='Escribemos tu mensaje' id='inputMensaje' className='inputEstilo' />
            </div>
          </div>
          {/* MENSAJE FIN */}
          {/* CHECKBOX INI*/}
          <div className='row align-items-center cbDetalleContainer'>
            <div className='col-1 cbContainerContacto'>
              <input type="checkbox" className='cbConfirmaReserva' />
            </div>
            <p className='col-10'>He leido TyC.</p>
          </div>
          <div className='row align-items-center cbDetalleContainer'>
            <div className='col-1 cbContainerContacto'>
              <input type="checkbox" className='cbConfirmaReserva' />
            </div>
            <p className='col-10'>Acepto envio de ofertas.</p>
          </div>
          {/* CHECKBOX FIN */}
          {/* BTN INI */}
          <div className='container d-flex row justify-content-center p-arreglado'>
            <div className="col-lg-7 row justify-content-center">
              <Link to="/Contacto" id='btnEnviarContacto'>Enviar</Link>
            </div>
          </div>
          {/* BTN FIN */}
        </div>
        {/* CONTACTO FIN */}

      </div>
    </div>
  )
}

export default Contacto