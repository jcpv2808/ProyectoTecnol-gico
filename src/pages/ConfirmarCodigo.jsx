import React from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ConfirmarCodigo() {
    const navigate = useNavigate();

    const mostrarNotificacion = (mensaje, tipo) => {
        toast(mensaje, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            type: tipo,
        });
    };

    return (
        <div>
            <Navigation />
            <ToastContainer />
            <div className='container d-flex justify-content-center align-items-center'>
                <div className="col-lg-5 p-5 rounded shadow bg-white">
                    <h3 className="text-center mb-4">Código de Confirmación</h3>
                    <div className="mb-3">
                        <label htmlFor="codigoConfirmacion" className="form-label">
                            Ingresa el código de confirmación
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="codigoConfirmacion"
                            placeholder="Código"
                        />
                    </div>
                    <Link
                        type="submit"
                        className="btn btn-dark w-100"
                        onClick={async (e) => {
                            e.preventDefault();

                            let codigo = document.getElementById("codigoConfirmacion").value;
                            const reservaId = localStorage.getItem("idReserva");
                            const nombre = localStorage.getItem("nombre");

                            if (codigo && reservaId && nombre) {
                                const objCodigo = {
                                    codigoConfirmacion: codigo,
                                    reservaId: reservaId,
                                    nombre: nombre
                                };

                                try {
                                    await axios.post(`https://backendelhornero.onrender.com/api/reservas/verificarCodigo`, objCodigo);
                                    mostrarNotificacion('Código confirmado correctamente.', 'success');

                                    // Esperar 3 segundos antes de redirigir
                                    setTimeout(() => {
                                        navigate("/");
                                    }, 10000);
                                } catch (error) {
                                    console.error(error);
                                    mostrarNotificacion('El código ingresado es incorrecto.', 'error');
                                }
                            } else {
                                mostrarNotificacion('Debe ingresar un código válido.', 'error');
                            }
                        }}
                    >
                        Confirmar
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ConfirmarCodigo;
