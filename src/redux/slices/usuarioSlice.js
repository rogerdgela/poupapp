const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    nome: "",
    renda: 0,
    objetivoFinanceiro: ""
}
const usuarioSlice = createSlice({
    name: 'usuario',
    initialState,
    reducers: {},
});

export default usuarioSlice.reducer;
