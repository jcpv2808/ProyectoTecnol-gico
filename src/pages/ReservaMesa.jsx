import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navigation from '../components/Navigation';
import './ReservaMesa.css';
import { Link, useNavigate } from 'react-router-dom';

function ReservaMesa() {
  const hoy = new Date().toISOString().split('T')[0];
  
  const [horaEntrada, setHoraEntrada] = useState('01:00');
  const [horaSalida, setHoraSalida] = useState('02:00');
  const [horaSalidaDisabled, setHoraSalidaDisabled] = useState(true);
  
  const reserva = useSelector((state) => state.reserva);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdateReserva = (campo, valor) => {
    const updatedReserva = {
      ...reserva,
      [campo]: valor,
    };
    dispatch({ type: 'SET_RESERVA', payload: updatedReserva });
  };

  const handleHoraEntradaChange = (e) => {
    const value = e.target.value;
    setHoraEntrada(value);
    setHoraSalidaDisabled(value === '');

    handleUpdateReserva('horaEntradaReserva', value);
  };

  const handleHoraSalidaChange = (e) => {
    const value = e.target.value;
    if (value <= reserva.horaEntradaReserva) {
      alert('La hora de salida debe ser mayor que la hora de entrada');
      return;
    }
    setHoraSalida(value);
    handleUpdateReserva('horaSalidaReserva', value);
  };

  const handleNextStep = () => {
    if (
      !reserva.cantPersonas ||
      !reserva.fechaReserva ||
      !reserva.horaEntradaReserva ||
      !reserva.horaSalidaReserva
    ) {
      alert('Por favor, completa todos los campos antes de continuar.');
      return;
    }
    navigate('/ReservaRequerimientos');
  };

  return (
    <div>
      <Navigation />
      <section>
        <div className="container d-flex row justify-content-center pb-5">
          <div className="col-lg-7">
            <h1 className="importanteTitulo mb-4">Realiza tu Reserva</h1>
            <ul className="row pasosContainer">
              <li className="col pasoNroLista">
                <div className="nroActivo mb-2">1</div>
                <p className="text-center textoPaso textoActivo">Selecciona tu Sede</p>
              </li>
              <li className="col pasoNroLista">
                <div className="nroActivo mb-2">2</div>
                <p className="text-center textoPaso textoActivo">Elige tu Mesa</p>
              </li>
              <li className="col pasoNroLista">
                <div className="nroInactivo mb-2">3</div>
                <p className="text-center textoPaso">Requerimientos opcionales</p>
              </li>
              <li className="col pasoNroLista">
                <div className="nroInactivo mb-2">4</div>
                <p className="text-center textoPaso">Confirma tu reserva</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="container d-flex row justify-content-center pCorregido">
          <div className="col-lg-5 mesaInfoContainer">
            <ul className="row infoMesaContainerSelects">
              <li className="col-6 text-center infoMesa cantPersonas">
                <select
                  onChange={(e) => handleUpdateReserva('cantPersonas', e.target.value)}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona personas
                  </option>
                  <option value="1">1 persona</option>
                  <option value="2">2 personas</option>
                  <option value="3">3 personas</option>
                  <option value="4">4 personas</option>
                  <option value="5">5 personas</option>
                </select>
              </li>
              <li className="col-6 text-center infoMesa fechaReserva">
                <input
                  type="date"
                  min={`${hoy}`}
                  id="fechaPicker"
                  onChange={(e) => handleUpdateReserva('fechaReserva', e.target.value)}
                />
              </li>
              <li className="col-6 text-center infoMesa horaReserva">
                <div className="horaPickerContainer">
                  <p>Hora de Ingreso</p>
                  <input
                    type="time"
                    id="horaEntrada"
                    className="horaPicker"
                    value={horaEntrada}
                    onChange={(e) => handleHoraEntradaChange(e)}
                  />
                </div>
              </li>
              <li className="col-6 text-center infoMesa horaReserva">
                <div className="horaPickerContainer">
                  <p>Hora de Salida</p>
                  <input
                    type="time"
                    id="horaSalida"
                    className="horaPicker"
                    value={horaSalida}
                    disabled={horaSalidaDisabled}
                    onChange={(e) => handleHoraSalidaChange(e)}
                    min={reserva.horaEntradaReserva}
                  />
                </div>
              </li>
            </ul>
            <div>
              <button className="btnEligeTuMesa p-3" onClick={handleNextStep}>
                Elige tu mesa
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReservaMesa;
