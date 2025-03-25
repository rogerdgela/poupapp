import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nome: "",
  renda: "",
  objetivoFinanceiro: "",
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
  },
});

export const { defineUsuario } = usuarioSlice.actions;

export default usuarioSlice.reducer;
