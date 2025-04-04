import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    contas: []
}

const contasSlice = createSlice({
    name: 'contas',
    initialState,
    reducers: {
        adicionaConta: (state, action) => {
            const novaConta = action.payload;
            state.contas.push({ id: uuidv4(), ...novaConta });
        }
    }
})

export const { adicionaConta } = contasSlice.actions
export default contasSlice.reducer