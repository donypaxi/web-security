import { createSlice } from '@reduxjs/toolkit';

export const contractorSlice = createSlice({
    name: 'contractor',
    initialState: {
        formContractor:{},
        contratistas:[],
        pedidoCompras:[],
        contratos:[],
        mostrar:[],
        activeEdit:false

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
        },
        activeContractor:(state,actions)=> {
            state.activeEdit= true
            state.formContractor={...actions.payload}
            console.log(state.activeEdit)
        },
        desactivarContractor:(state,actions) => {
            state.activeEdit= false
        },
        updateContractor:(state,{payload}) =>{
            const index = state.contratistas.findIndex((contratista) => contratista.id === payload.id);
            if (index !== -1) {
                state.contratistas.splice(index, 1, payload);
            }
        }
    
    }
});
export const { setContratista,setContratos,setPedidoCompra,activeContractor,desactivarContractor,updateContractor } = contractorSlice.actions;