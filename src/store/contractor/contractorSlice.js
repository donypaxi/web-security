import { createSlice } from '@reduxjs/toolkit';

export const contractorSlice = createSlice({
    name: 'contractor',
    initialState: {
        contratistas:[]
    },
    reducers: {
        setContratista:(state,actions) => {
            state.contratistas= actions.payload
        }    
    
    }
});
export const { setContratista } = contractorSlice.actions;