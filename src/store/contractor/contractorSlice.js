import { createSlice } from '@reduxjs/toolkit';
import { filterRegister } from '../../helpers';

export const contractorSlice = createSlice({
    name: 'contractor',
    initialState: {
        dataEdit:{},
        contratistas:[],
        records:[],
        mostrar:[],
        filter:[],
        activeEdit:false,
        idRegister:''

    },
    reducers: {
        
        setContratista:(state,actions) => {
            state.contratistas= actions.payload
        },
        addNewContratista: (state, actions ) => {
            state.contratistas.push( actions.payload );
            // state.isSaving = false;
        },
        addNewRegister: (state, actions ) => {
            state.records.push( actions.payload );
            // state.isSaving = false;
        },
        
        active:(state,actions)=> {
            state.activeEdit= true
            state.dataEdit={...actions.payload}
        },
        desactivarContractor:(state,actions) => {
            state.activeEdit= false
        },
        setFilter :(state,{payload}) => {
            // const {numero,type,empresa,servicio}= payload
            const filter = filterRegister(state.records,payload)
            state.mostrar= filter
                
            
        },
        setRecords:(state,actions)=>{
            // state.mostrar = actions.payload
            state.records= actions.payload
            state.mostrar=state.records
        },
        updateContractor:(state,{payload}) =>{
            const index = state.contratistas.findIndex((contratista) => contratista.id === payload.id);
            if (index !== -1) {
                state.contratistas.splice(index, 1, payload);
            }
        },
        updateRegister:(state,{payload})=> {
            const index = state.records.findIndex((register) => register.id === payload.id);
            if (index !== -1) {
                state.records.splice(index, 1, payload);
            }
            state.mostrar=state.records
        },

        deleteContractorById:(state,{payload}) => {
            console.log(payload)
            state.contratistas = state.contratistas.filter( contratista => contratista.id !== payload );
        },
        
        deleteRegisterById:(state,{payload}) => {
            state.records = state.records.filter( register => register.id !== payload );

        },
        idRegister:(state,actions)=>{
            state.idRegister=actions.payload
        }
        
    }
});
export const {setFilter,setMostrar,setContratista,addNewContratista,addNewRegister,setRecords,active,updateRegister,desactivarContractor,updateContractor,deleteContractorById,deleteRegisterById,idRegister } = contractorSlice.actions;