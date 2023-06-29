import { createSlice } from '@reduxjs/toolkit';

export const contractorSlice = createSlice({
    name: 'contractor',
    initialState: {
        dataEdit:{},
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
        addNewContratista: (state, actions ) => {
            state.contratistas.push( actions.payload );
            // state.isSaving = false;
        },
        addNewPC:(state,actions)=>{
            state.pedidoCompras.push(actions.payload)
        },
        setContratos:(state,actions)=>{
            state.contratos= actions.payload
        },
        addNewContrato:(state,actions)=>{
            state.contratos.push(actions.payload)
        },
        setPedidoCompra:(state,actions)=>{
            state.pedidoCompras= actions.payload
        },
        active:(state,actions)=> {
            state.activeEdit= true
            state.dataEdit={...actions.payload}
        },
        desactivarContractor:(state,actions) => {
            state.activeEdit= false
        },
        updateContractor:(state,{payload}) =>{
            const index = state.contratistas.findIndex((contratista) => contratista.id === payload.id);
            if (index !== -1) {
                state.contratistas.splice(index, 1, payload);
            }
        },
        updateContract:(state,{payload}) =>{
            const index = state.contratos.findIndex((contrato) => contrato.id === payload.id);
            if (index !== -1) {
                state.contratos.splice(index, 1, payload);
            }
        },
        updatePC:(state,{payload})=>{
            const index = state.pedidoCompras.findIndex((pedidoCompra)=>pedidoCompra.id===payload.id)
            if(index !== -1){
                state.pedidoCompras.splice(index,1,payload)
            }
        },
        deleteContractorById:(state,{payload}) => {
            console.log(payload)
            state.contratistas = state.contratistas.filter( contratista => contratista.id !== payload );
        },
        deleteContractById:(state,{payload}) => {
            console.log(payload)
            state.contratos = state.contratos.filter( contrato => contrato.id !== payload );
        },
        deletePCById:(state,{payload}) => {
            state.pedidoCompras = state.pedidoCompras.filter( pedidoCompra => pedidoCompra.id !== payload );

        }
    
    }
});
export const { setContratista,addNewContratista,setContratos,addNewContrato,addNewPC,setPedidoCompra,active,desactivarContractor,updateContractor,updateContract,updatePC,deleteContractorById,deleteContractById,deletePCById } = contractorSlice.actions;