import { configureStore } from "@reduxjs/toolkit";
import usuarioSlice from "./slices/usuarioSlice";

const store = configureStore({
  reducer: {
    usuario: usuarioSlice,
  },
});

export default store;
