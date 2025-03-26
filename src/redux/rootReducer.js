import { combineReducers } from "@reduxjs/toolkit";
import usuarioSlice from "./slices/usuarioSlice";

const rootReducer = combineReducers({
    usuario: usuarioSlice,
    
});

export default rootReducer;
