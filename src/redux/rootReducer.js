import { combineReducers } from "@reduxjs/toolkit";
import usuarioSlice from "./slices/usuarioSlice";
import objetivosTiposSlice from "./slices/objetivosTiposSlice";
import transacoesSlice from "./slices/transacoesSlices";

const rootReducer = combineReducers({
    usuario: usuarioSlice,
    objetivos: objetivosTiposSlice,
    transacoes: transacoesSlice,
});

export default rootReducer;
