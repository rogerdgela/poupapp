import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  objetivo: {
    economizar: "Economizar",
    investir: "Investir",
    controlarGastos: "Controlar Gastos",
  },
};

const objetivosTiposSlice = createSlice({
  name: "objetivos",
  initialState,
});

export default objetivosTiposSlice.reducer;
