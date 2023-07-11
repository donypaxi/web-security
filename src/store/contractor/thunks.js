import { addDoc, collection, deleteDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { FirebaseDB } from "../../firebase/config"
import { loadContractor, loadRecords } from "../../helpers"
import { addNewContratista, addNewRegister, deleteContractorById, deleteRegisterById, setContratista,  setMostrar, setRecords, updateContractor, updateRegister } from "./contractorSlice"

export const startNewContractor = (form) => {
    return async(dispatch) => {
        const {empresa,ruc,telefono} = form
        const newContractor = {
            empresa,
            ruc,
            telefono
        }
        const docRef = await addDoc(collection(FirebaseDB,'usuarios/NVJKnqX8MI7dJryiq0hW/contratista'),newContractor)
        newContractor.id= docRef.id
        dispatch(addNewContratista(newContractor))
    }
}


export const startNewRegister = (data) => {
    return async(dispatch) => {
        const {register,numero,servicio,empresa,type} = data
        const newRegister = {register,numero,servicio,empresa,type}
        const docRef = await addDoc(collection(FirebaseDB,'usuarios/NVJKnqX8MI7dJryiq0hW/registros'),newRegister)
        newRegister.id=docRef.id
        dispatch(addNewRegister(newRegister))
    }
}

export const starLoadingRecords= () => {
    return async(dispatch)=> {
        const arrayRegistros= await loadRecords()
        dispatch(setRecords(arrayRegistros))
        // dispatch(setMostrar(arrayRegistros))
    }
}


export const starLoadingContractor= () => {
    return async(dispatch)=> {
        const arrayContratistas= await loadContractor()
        dispatch(setContratista(arrayContratistas))
    }
}

export const starSaveContractor = (data) => {
    return async (dispatch) => {
        try {
            const { empresa, ruc, telefono, id } = data;
            const newData = { empresa, ruc, telefono };
            
            const resp = await updateDoc(doc(FirebaseDB, "usuarios/NVJKnqX8MI7dJryiq0hW/contratista", id), newData);
            dispatch(updateContractor(data));
          } catch (error) {
            console.error(error);
          }

    }
}


export const starSaveRegister = (data) => {
    return async (dispatch) => {
        try {
            const { register,numero, servicio,empresa,type, id } = data;
            const newData = { register,numero, servicio, empresa, type };
            
            const resp = await updateDoc(doc(FirebaseDB, "usuarios/NVJKnqX8MI7dJryiq0hW/registros", id), newData);
            dispatch(updateRegister(data));
          } catch (error) {
            console.error(error);
          }

    }
}


export const startDeletingContractor = (id) => {
    return async( dispatch) => {

        const docRef = doc( FirebaseDB, `/usuarios/NVJKnqX8MI7dJryiq0hW/contratista/${id}`);
        await deleteDoc( docRef );
        dispatch( deleteContractorById(id));

    }
}

export const startDeletRegister = (id) => {
    return async( dispatch) => {

        const docRef = doc( FirebaseDB, `/usuarios/NVJKnqX8MI7dJryiq0hW/registros/${id}`);
        await deleteDoc( docRef );
        dispatch( deleteRegisterById(id) );

    }
}

