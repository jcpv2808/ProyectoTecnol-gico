import React from 'react'
import Navigation from '../components/Navigation'


import local1 from '../assets/localAsiaInfo.png'
import local2 from '../assets/localBarrancoInfo.png'
import local3 from '../assets/localLaMolinaInfo.png'
import local4 from '../assets/localChorrillosInfo.png'
import local5 from '../assets/localDosDeMayoInfo.png'
import local6 from '../assets/localPremiumInfo.png'

import './Locales.css'

function Locales() {
  let chevron = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
  </svg>
  return (
    <div>
      <Navigation />
      <section>
        <div className="container d-flex row justify-content-center text-center">
          <p id="tituloCercano">Encuentra tu restaurante más cercano</p>
          <p className='linkCartaContainer'>Llama y descarga la carta <a className='linkCarta' href="https://elhornero.com.pe/cartas/ELHORNERO_CARTA2021_LICORES_VINOS_compressed.pdf" target='_blank'><b>aquí.</b></a></p>
          <div id='chevronContainer'>
            <a href="" id='chevronLink'>{chevron}</a>
          </div>
          {/* LOCALES INI */}
          <div className="row localContainerInfo">
            <div className="col-lg-6 localImgContainer">
              <img src={local1} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 row justify-content-center align-items-center align-content-center">
              <div className='infoLocalesContainer'>
                <p className='col-12 localesTitulo'>Asia</p>
                <p className='col-12'><b>Horario de atención:</b></p>
                <p className='col-12'>L - S 12:00 p.m. a 10:00 p.m.</p>
                <p className='col-12 mb-3'>Dom. de 12:00 p.m. a 6:00 p.m.</p>
                <p className='col-12 mb-3'>Panamericana Sur Km. 97.50, <b>Boulevard de Asia</b></p>
                <p className='col-12'><b>Tlf.946552605 - (01) 530 7305</b></p>
              </div>
            </div>
          </div>
          <div className="row localContainerInfo">
            <div className="col-lg-6 row justify-content-center align-items-center align-content-center">
              <div className='infoLocalesContainer'>
                <p className='col-12 localesTitulo'>Barranco</p>
                <p className='col-12'><b>Horario de atención:</b></p>
                <p className='col-12'>L - S 11:30 a.m. a 12:00 p.m.</p>
                <p className='col-12 mb-3'>Dom. de 11:30 a.m. a 8:00 p.m.</p>
                <p className='col-12 mb-3'>Av. Paseo de la República 6500, <b>Barranco</b></p>
                <p className='col-12'><b>Tlf.511 247 - 4646</b></p>
              </div>
            </div>
            <div className="col-lg-6 localImgContainer">
              <img src={local2} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="row localContainerInfo">
            <div className="col-lg-6 localImgContainer">
              <img src={local3} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 row justify-content-center align-items-center align-content-center">
              <div className='infoLocalesContainer'>
                <p className='col-12 localesTitulo'>La Molina</p>
                <p className='col-12'><b>Horario de atención:</b></p>
                <p className='col-12'>L - S 11:30 p.m. a 12:00 p.m.</p>
                <p className='col-12 mb-3'>Dom. de 11:30 p.m. a 11:00 p.m.</p>
                <p className='col-12 mb-3'>Av. Circunvalación del Golf 408, Camacho - <b>La Molina</b></p>
                <p className='col-12'><b>Tlf.511436 - 8319</b></p>
              </div>
            </div>
          </div>
          <div className="row localContainerInfo">
            <div className="col-lg-6 row justify-content-center align-items-center align-content-center">
              <div className='infoLocalesContainer'>
                <p className='col-12 localesTitulo'>Chorrillos</p>
                <p className='col-12'><b>Horario de atención:</b></p>
                <p className='col-12'>L - S 12:00 a.m. a 12:00 p.m.</p>
                <p className='col-12 mb-3'>Dom. de 12:00 a.m. a 11:00 p.m.</p>
                <p className='col-12 mb-3'>Malecón Grau 983, <b>Chorrillos</b></p>
                <p className='col-12'><b>Tlf.511 251 - 8109</b></p>
              </div>
            </div>
            <div className="col-lg-6 localImgContainer">
              <img src={local4} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="row localContainerInfo">
            <div className="col-lg-6 localImgContainer">
              <img src={local5} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 row justify-content-center align-items-center align-content-center">
              <div className='infoLocalesContainer'>
                <p className='col-12 localesTitulo'>San Isidro, Av. Dos de Mayo</p>
                <p className='col-12'><b>Horario de atención:</b></p>
                <p className='col-12'>L - S 11:30 a.m. a 12:00 p.m.</p>
                <p className='col-12 mb-3'>Dom. de 11:30 a.m. a 10:00 p.m.</p>
                <p className='col-12 mb-3'>Av. Dos de Mayo 758, <b>San Isidro</b></p>
                <p className='col-12'><b>Tlf.511 421 - 0162</b></p>
              </div>
            </div>
          </div>
          <div className="row localContainerInfo">
            <div className="col-lg-6 row justify-content-center align-items-center align-content-center">
              <div className='infoLocalesContainer'>
                <p className='col-12 localesTitulo'>El Hornero Premium, San Isidro</p>
                <p className='col-12'><b>Horario de atención:</b></p>
                <p className='col-12'>L - S 11:30 a.m. a 12:00 p.m.</p>
                <p className='col-12 mb-3'>Dom. de 11:30 a.m. a 11:00 p.m.</p>
                <p className='col-12 mb-3'>Av. Rivera Navarrete 798 Esquina con Calle Chinchón 977, <b>San Isidro</b></p>
                <p className='col-12'><b>Tlf.511 398 - 6891</b></p>
              </div>
            </div>
            <div className="col-lg-6 localImgContainer">
              <img src={local6} className="img-fluid" alt="" />
            </div>
          </div>
          {/* LOCALES FIN */}
        </div>
      </section>
    </div>
  )
}

export default Locales