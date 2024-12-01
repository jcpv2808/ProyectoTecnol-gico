import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import Navigation from '../components/Navigation'
import './ConfirmarReserva.css'
import { Link } from 'react-router-dom'

function ConfirmarReserva() {

  const navigate = useNavigate();

  let geo = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
  </svg>

  let calendario = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-event" viewBox="0 0 16 16">
    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
  </svg>

  let reloj = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
  </svg>

  let user = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
  </svg>

  const reserva = useSelector(state => state.reserva);
  const dispatch = useDispatch();

  const handleUpdateReserva = (campo, valor) => {
    const updatedReserva = {
      ...reserva,
      [campo]: valor,
    };
    dispatch({ type: 'SET_RESERVA', payload: updatedReserva });
  };

  const validarFormulario = () => {
    if (!reserva.nomCliente || reserva.nomCliente.trim() === "") {
      alert("Por favor, ingresa tu nombre.");
      return false;
    }
    if (!reserva.apeCliente || reserva.apeCliente.trim() === "") {
      alert("Por favor, ingresa tus apellidos.");
      return false;
    }
    if (!reserva.emailCliente || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(reserva.emailCliente)) {
      alert("Por favor, ingresa un email válido.");
      return false;
    }
    if (!reserva.celCliente || reserva.celCliente.toString().length < 9) {
      alert("Por favor, ingresa un número de celular válido.");
      return false;
    }
    if (!document.querySelector(".cbConfirmaReserva").checked) {
      alert("Por favor, confirma que has leído los términos y condiciones.");
      return false;
    }
    return true;
  };


  return (
    <div>
      <Navigation />
      <section>
        {/* Realiza tu reserva INI */}
        <div className="container d-flex row justify-content-center pb-0">
          <div className="col-lg-7">
            <h1 className='importanteTitulo mb-4'>Realiza tu Reserva</h1>
            <ul className='row pasosContainer'>
              <li className='col pasoNroLista'>
                <div className="nroActivo mb-2">1</div>
                <p className='text-center textoPaso textoActivo'>Selecciona tu Sede</p>
              </li>
              <li className='col pasoNroLista'>
                <div className="nroActivo mb-2">2</div>
                <p className='text-center textoPaso textoActivo'>Elige tu Mesa</p>
              </li>
              <li className='col pasoNroLista'>
                <div className="nroActivo mb-2">3</div>
                <p className='text-center textoPaso textoActivo'>Requerimientos opcionales</p>
              </li>
              <li className='col pasoNroLista'>
                <div className="nroActivo mb-2">4</div>
                <p className='text-center textoPaso textoActivo'>Confirma tu reserva</p>
              </li>
            </ul>
          </div>
        </div>
        {/* Realiza tu reserva FIN */}
        {/* Confirma tu reserva INI */}
        <div className='container d-flex row justify-content-center p-arreglado'>
          <div className="col-lg-5 row">
            <div className='col-lg-12 '>
              <div className="infoReservaContainer">
                <p className='tituloReserva'>El Hornero - {reserva.nombre}</p>
                {/* usar api para buscar info del local y llenar datos */}
                <p className='infoReserva'><span className='iconContainer'>{geo}</span> {reserva.dirLocal}</p>

                <p className='infoReserva'><span className='iconContainer'>{calendario}</span>  {reserva.fechaReserva}</p>
                <p className='infoReserva'><span className='iconContainer'>{reloj}</span> Hora de Ingreso - <b>{reserva.horaEntradaReserva}</b></p>
                <p className='infoReserva'><span className='iconContainer'>{reloj}</span> Hora de Salida -  <b>{reserva.horaSalidaReserva}</b></p>
                <p className='infoReserva'><span className='iconContainer'>{user}</span>  {reserva.cantPersonas} personas</p>
              </div>
              <div className="row justify-content-center">
                <div id="separador">&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
        <div className='container d-flex row justify-content-center p-arreglado'>
          <div className="col-lg-3 row justify-content-center">
            <input type="text" maxLength="30" placeholder='Nombres' className='inputClienteInfo'
              onChange={(e) => { handleUpdateReserva('nomCliente', e.target.value) }} />
            <input type="text" maxLength="30" placeholder='Apellidos' className='inputClienteInfo'
              onChange={(e) => { handleUpdateReserva('apeCliente', e.target.value) }} />
            <input type="email" maxLength="80" placeholder='Email' className='inputClienteInfo'
              onChange={(e) => { handleUpdateReserva('emailCliente', e.target.value) }} />
            <input type="number" placeholder='Celular' className='inputClienteInfo'
              onChange={(e) => { handleUpdateReserva('celCliente', e.target.value) }} />
            <div className='row align-items-center cbDetalleContainer'>
              <div className='col-1 cbContainer'>
                <input type="checkbox" className='cbConfirmaReserva' />
              </div>
              <p className='col-10'>He leido TyC.</p>
            </div>
            <div className='row align-items-center cbDetalleContainer'>
              <div className='col-1 cbContainer'>
                <input type="checkbox" className='cbConfirmaReserva' />
              </div>
              <p className='col-10'>Acepto envio de ofertas.</p>
            </div>
          </div>
          <div className='container d-flex row justify-content-center p-arreglado'>
            <div className="col-lg-3 row justify-content-center">
              <Link
                to="/"
                id="btnEnviarContacto"
                onClick={async (e) => {
                  e.preventDefault();
                  if (validarFormulario()) {
                    try {
                      // await axios.post(`http://backendelhornero.onrender.com/api/locales/local/agregarReserva`, reserva);
                      await axios.post(`https://backendelhornero.onrender.com/api/locales/local/agregarReserva`, reserva)
                        .then(response =>{
                          return response.data
                        }).then(data =>{
                          localStorage.setItem("idReserva", data.nuevaReserva._id)
                          localStorage.setItem("nombre", reserva.nombre)
                        })

                      // Restablecer los datos de la reserva
                      dispatch({ type: 'RESET_RESERVA' });

                      navigate("/confirmarCodigo");
                    } catch (error) {
                      console.log(error);
                      alert("Hubo un error al procesar tu reserva. Inténtalo nuevamente.");
                    }
                  }
                }}
              >
                Confirmar Reserva
              </Link>

            </div>
          </div>
        </div>
        {/* Confirma tu reserva FIN */}
      </section >
    </div >
  )
}

export default ConfirmarReserva