import { createSlice } from '@reduxjs/toolkit';

export const contractorSlice = createSlice({
    name: 'contractor',
    initialState: {
        contratistas:[],
        pedidoCompras:[],
        contratos:[],
        mostrar:[]

    },
    reducers: {
        setContratista:(state,actions) => {
            state.contratistas= actions.payload
            state.mostrar = state.contratistas
        },
        setContratos:(state,actions)=>{
            state.contratos= actions.payload
        },
        setPedidoCompra:(state,actions)=>{
            state.pedidoCompras= actions.payload
        }
    
    }
});
export const { setContratista,setContratos,setPedidoCompra } = contractorSlice.actions;