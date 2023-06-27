import { createSlice } from '@reduxjs/toolkit';

export const contractorSlice = createSlice({
    name: 'contractor',
    initialState: {
        nombre :''
    },
    reducers: {
        increment: (state, /* action */ ) => {
        },
        
    }
});
export const { increment } = contractorSlice.actions;