import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status:'checking'
    },
    reducers: {
        login:(state,action)=>{

        },
        logout:(state,action)=>{

        }
    }
});
export const { login,logout } = authSlice.actions;