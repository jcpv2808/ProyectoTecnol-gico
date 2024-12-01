const initialState = {
  reserva: {
    nombre: "",
    fechaReserva: "",
    cantPersonas: 0,
    horaEntradaReserva: "",
    horaSalidaReserva: "",
    ocasionEsp: false,
    personaDisc: false,
    nesecidadExtra: "",
    nomCliente: "",
    apeCliente: "",
    emailCliente: "",
    celCliente: "",
    dirLocal: ""
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RESERVA':
      return {
        ...state,
        reserva: action.payload
      };
    case 'RESET_RESERVA':
      return { ...initialState };
    default:
      return state;
  }
};

export default reducer;
