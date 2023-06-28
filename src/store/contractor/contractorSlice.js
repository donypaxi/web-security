import { createSlice } from '@reduxjs/toolkit';

export const contractorSlice = createSlice({
    name: 'contractor',
    initialState: {
        contratistas:[],
        mostrar:[]

    },
    reducers: {
        setContratista:(state,actions) => {
            state.contratistas= actions.payload
            state.mostrar = state.contratistas
        },
        lodingMostrar : (state,action)=> {
        }
    
    }
});
export const { setContratista,lodingMostrar } = contractorSlice.actions;