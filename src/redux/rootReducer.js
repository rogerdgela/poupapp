import { combineReducers } from "@reduxjs/toolkit";
import usuarioSlice from "./slices/usuarioSlice";
import objetivosTiposSlice from "./slices/objetivosTiposSlice";
const rootReducer = combineReducers({
    usuario: usuarioSlice,
    objetivos: objetivosTiposSlice,
});

export default rootReducer;
