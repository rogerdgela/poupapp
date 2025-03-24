import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nome: "",
    renda: "",
    objetivoFinanceiro: ""
}
const usuarioSlice = createSlice({
    name: 'usuario',
    initialState,
    reducers: {},
});

export default usuarioSlice.reducer;
