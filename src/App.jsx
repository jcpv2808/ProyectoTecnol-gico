import { useState } from 'react'
import './normalize.css'
import './estilos.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'

import LandingPage from './components/LandingPage'
import Reservas from './pages/Reservas'
import Locales from './pages/Locales';
import Contacto from './pages/Contacto';
import ReservaLocales from './pages/ReservaLocales';
import ReservaMesa from './pages/ReservaMesa';
import ReservaRequerimientos from './pages/ReservaRequerimientos';
import ConfirmarReserva from './pages/ConfirmarReserva';
import ConfirmarCodigo from './pages/confirmarCodigo';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/Reservas' element={<Reservas />} />
          <Route path='/Locales' element={<Locales />} />
          <Route path='/Contacto' element={<Contacto />} />
          <Route path='/ReservaLocales' element={<ReservaLocales />} />
          <Route path='/ReservaMesa' element={<ReservaMesa />} />
          <Route path='/ReservaRequerimientos' element={<ReservaRequerimientos />} />
          <Route path='/ConfirmarReserva' element={<ConfirmarReserva />} />
          <Route path='/confirmarCodigo' element={<ConfirmarCodigo />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
