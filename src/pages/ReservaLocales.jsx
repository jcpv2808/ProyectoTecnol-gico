import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Navigation from '../components/Navigation'
import "./ReservaLocales.css"
import local1 from '../assets/localAsia.png'
import local2 from '../assets/localBarranco.png'
import local3 from '../assets/localLaMolina.png'
import local4 from '../assets/localChorrillos.png'
import local5 from '../assets/localDosDeMayo.png'
import local6 from '../assets/localPremium.png'

import { Link } from 'react-router-dom'

function ReservaLocales() {
  const reserva = useSelector(state => state.reserva);  // Obtener el estado de reserva
  const dispatch = useDispatch();

  const handleUpdateReserva = ({nombre, dirLocal}) => {

    const updatedReserva = {
      ...reserva,
      nombre: nombre,
      dirLocal: dirLocal
    };

    dispatch({ type: 'SET_RESERVA', payload: updatedReserva });
  };

  return (

    <div>
      <Navigation />
      <section>
        {/* Realiza tu reserva INI */}
        <div className="container d-flex row justify-content-center pb-5">
          <div className="col-lg-7">
            <h1 className='importanteTitulo mb-4'>Realiza tu Reserva</h1>
            <ul className='row pasosContainer'>
              <li className='col pasoNroLista'>
                <div className="nroActivo mb-2">1</div>
                <p className='text-center textoPaso textoActivo'>Selecciona tu Sede</p>
              </li>
              <li className='col pasoNroLista'>
                <div className="nroInactivo mb-2">2</div>
                <p className='text-center textoPaso '>Elige tu Mesa</p>
              </li>
              <li className='col pasoNroLista'>
                <div className="nroInactivo mb-2">3</div>
                <p className='text-center textoPaso '>Requerimientos opcionales</p>
              </li>
              <li className='col pasoNroLista'>
                <div className="nroInactivo mb-2">4</div>
                <p className='text-center textoPaso '>Confirma tu reserva</p>
              </li>
            </ul>
          </div>
        </div>
        {/* Realiza tu reserva FIN */}

        {/* locales */}
        <div className='container d-flex row justify-content-center pCorregido'>
          <div className="localesContainer row d-flex col-lg-6">
            <div className='localImg col-lg-2'>
              <img src={local1} alt="" className='img-fluid' loading='lazy' />
            </div>
            <div className='localInfo col-lg-10 d-flex-column'>
              <Link onClick={()=>handleUpdateReserva({nombre: "Asia", dirLocal:"Panamericana Sur Km. 97.50, Boulevard de Asia"})} to="/ReservaMesa" className='linkLocal'>
                <p className='localNombre'>Asia</p>
                <p className='localDir'>Panamericana Sur Km. 97.50, <b>Boulevard de Asia</b></p>
              </Link>
            </div>
          </div>
        </div>
        <div className='container d-flex row justify-content-center pCorregido'>
          <div className="localesContainer row d-flex col-lg-6">
            <div className='localImg col-lg-2'>
              <img src={local2} alt="" className='img-fluid' loading='lazy' />
            </div>
            <div className='localInfo col-lg-10 d-flex-column'>
              <Link onClick={()=>handleUpdateReserva({nombre: "Barranco", dirLocal:"Av. Paseo de la República 6500, Barranco"})} to="/ReservaMesa" className='linkLocal'>
                <p className='localNombre'>Barranco</p>
                <p className='localDir'>Av. Paseo de la República 6500, <b>Barranco</b></p>
              </Link>
            </div>
          </div>
        </div>
        <div className='container d-flex row justify-content-center pCorregido'>
          <div className="localesContainer row d-flex col-lg-6">
            <div className='localImg col-lg-2'>
              <img src={local3} alt="" className='img-fluid' loading='lazy' />
            </div>
            <div className='localInfo col-lg-10 d-flex-column'>
              <Link onClick={()=>handleUpdateReserva({nombre: "La Molina", dirLocal:"Av. Circunvalación del Golf 408, Camacho - La Molina"})} to="/ReservaMesa" className='linkLocal'>
                <p className='localNombre'>La Molina</p>
                <p className='localDir'>Av. Circunvalación del Golf 408,
                  Camacho - <b>La Molina</b></p>
              </Link>
            </div>
          </div>
        </div>
        <div className='container d-flex row justify-content-center pCorregido'>
          <div className="localesContainer row d-flex col-lg-6">
            <div className='localImg col-lg-2'>
              <img src={local4} alt="" className='img-fluid' loading='lazy' />
            </div>
            <div className='localInfo col-lg-10 d-flex-column'>
              <Link onClick={()=>handleUpdateReserva({nombre: "Chorrillos", dirLocal:"Malecón Grau 983, Chorrillos"})} to="/ReservaMesa" className='linkLocal'>
                <p className='localNombre'>Chorrillos</p>
                <p className='localDir'>Malecón Grau 983, <b>Chorrillos</b></p>
              </Link>
            </div>
          </div>
        </div>
        <div className='container d-flex row justify-content-center pCorregido'>
          <div className="localesContainer row d-flex col-lg-6">
            <div className='localImg col-lg-2'>
              <img src={local5} alt="" className='img-fluid' loading='lazy' />
            </div>
            <div className='localInfo col-lg-10 d-flex-column'>
              <Link onClick={()=>handleUpdateReserva({nombre: "San Isidro, Av. Dos de Mayo", dirLocal:"Av. Dos de Mayo 758, San Isidro"})} to="/ReservaMesa" className='linkLocal'>
                <p className='localNombre'>San Isidro, Av. Dos de Mayo</p>
                <p className='localDir'>Av. Dos de Mayo 758, <b>San Isidro</b></p>
              </Link>
            </div>
          </div>
        </div>
        <div className='container d-flex row justify-content-center pCorregido'>
          <div className="localesContainer row d-flex col-lg-6">
            <div className='localImg col-lg-2'>
              <img src={local6} alt="" className='img-fluid' loading='lazy' />
            </div>
            <div className='localInfo col-lg-10 d-flex-column'>
              <Link onClick={()=>handleUpdateReserva({nombre: "El Hornero Premium, San Isidro", dirLocal:"Av. Rivera Navarrete 798 Esquina con Calle Chinchón 977, San Isidro"})} to="/ReservaMesa" className='linkLocal'>
                <p className='localNombre'>El Hornero Premium, San Isidro</p>
                <p className='localDir'>Av. Rivera Navarrete 798, <b>San Isidro</b></p>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ReservaLocales