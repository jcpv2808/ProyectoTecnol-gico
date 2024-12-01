import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import "./ReservaRequerimientos.css";

function ReservaRequerimientos() {
  const reserva = useSelector((state) => state.reserva);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdateReserva = (campo, valor) => {
    if (campo === "ocasionEsp") valor = Boolean(valor);

    const updatedReserva = {
      ...reserva,
      [campo]: campo === "nesecidadExtra" && (!valor || valor.trim() === "") ? "ninguna" : valor,
    };

    dispatch({ type: "SET_RESERVA", payload: updatedReserva });
  };


  const handleAccept = () => {
    const { ocasionEsp, personaDisc, nesecidadExtra } = reserva;

    // Validar requerimientos
    if (!ocasionEsp && !personaDisc && (!nesecidadExtra || nesecidadExtra.trim() === "")) {
      alert("Por favor, agrega al menos un requerimiento antes de continuar.");
      return;
    }

    // Asignar "ninguna" si nesecidadExtra está vacío o solo contiene espacios
    const updatedReserva = {
      ...reserva,
      nesecidadExtra: nesecidadExtra && nesecidadExtra.trim() !== "" ? nesecidadExtra : "ninguna",
    };

    // Actualizar la reserva en el store
    dispatch({ type: "SET_RESERVA", payload: updatedReserva });

    // Redirigir
    navigate("/ConfirmarReserva");
  };



  return (
    <div>
      <Navigation />
      <section>
        <div className="container d-flex row justify-content-center pb-0">
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
                <div className="nroActivo mb-2">3</div>
                <p className="text-center textoPaso textoActivo">Requerimientos opcionales</p>
              </li>
              <li className="col pasoNroLista">
                <div className="nroInactivo mb-2">4</div>
                <p className="text-center textoPaso">Confirma tu reserva</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="container d-flex row justify-content-center pb-5 requirimientosContainer">
          <div className="col-lg-5">
            <p className="reqTitulo">Ayudamos a personalizar su experiencia</p>
            <div>
              <label className="reqSubTitulo" htmlFor="ocasionEspecial">
                ¿Ocasion Especial?
              </label>
              <select
                id="ocasionEspecial"
                className="ocasionEspecialSelect px-4 py-1 d-flex mb-3 w-75"
                onChange={(e) => handleUpdateReserva("ocasionEsp", e.target.value === "1")}
                defaultValue="0"
              >
                <option value="0">No Aplica</option>
                <option value="1">Si Aplica</option>
              </select>
            </div>
            <div className="row align-items-center mb-3">
              <p className="col discText">Persona con discapacidad</p>
              <div className="col d-flex justify-content-around">
                <input
                  className="checkboxDiscapacidad"
                  type="checkbox"
                  onChange={(e) => handleUpdateReserva("personaDisc", e.target.checked)}
                />
              </div>
            </div>
            <div className="row">
              <p>¿Alguna nesecidad que debamos tomar en cuenta?</p>
              <div>
                <textarea
                  className="nesecInput w-75 d-flex mb-5"
                  rows="4"
                  onChange={(e) => handleUpdateReserva("nesecidadExtra", e.target.value)}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btnAceptar" onClick={handleAccept}>
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReservaRequerimientos;
