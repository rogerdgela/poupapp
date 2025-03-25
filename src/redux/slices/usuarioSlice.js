import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nome: "",
  renda: "",
  objetivoFinanceiro: "",
  orcamentoDiario: 0,
};

const usuarioSlice = createSlice({
  name: "usuario",
  initialState,
  reducers: {
    defineUsuario: (state, action) => {
      const { nome, renda, objetivoFinanceiro } = action.payload;
      state.nome = nome;
      state.renda = renda;
      state.objetivoFinanceiro = objetivoFinanceiro;
    },
    defineOrcamentoDiario: (state, action) => {
      const renda = action.payload;
      state.renda = parseFloat(renda);
      state.orcamentoDiario = Math.round(renda / 30);
    },
  },
});


export const { defineUsuario, defineOrcamentoDiario } = usuarioSlice.actions;

export default usuarioSlice.reducer;
