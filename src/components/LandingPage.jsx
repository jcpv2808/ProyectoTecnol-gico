import React from 'react'
import Header from './Header'
import AcercaDe from './AcercaDe'
import Servicios from './Servicios'
import Preguntas from './Preguntas'
import Footer from './Footer'

function LandingPage() {
  return (
    <div>
        <Header/>
        <AcercaDe/>
        <Servicios/>
        <Preguntas/>
        <Footer/>
    </div>
  )
}

export default LandingPage