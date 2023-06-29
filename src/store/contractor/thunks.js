import { addDoc, collection, deleteDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { FirebaseDB } from "../../firebase/config"
import { loadContract, loadContractor, loadPedidoCompra } from "../../helpers"
import { addNewContratista, addNewContrato, addNewPC, deleteContractById, deleteContractorById, deletePCById, setContratista, setContratos, setPedidoCompra, updateContract, updateContractor, updatePC } from "./contractorSlice"

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

export const startNewContract = (contract) => {
    return async(dispatch) => {
        const {contrato,numero,nombreEmpresa,nombre} = contract
        const newContrato = {contrato,numero,nombreEmpresa,nombre}
        const docRef = await addDoc(collection(FirebaseDB,'usuarios/NVJKnqX8MI7dJryiq0hW/contratos'),newContrato)
        newContrato.id=docRef.id
        dispatch(addNewContrato(newContrato))
    }
}

export const startNewPedidoCompra = (newPC) => {
    return async(dispatch) => {
        const docRef = await addDoc(collection(FirebaseDB,'/usuarios/NVJKnqX8MI7dJryiq0hW/pedidos-compras'),newPC)
        newPC.id=docRef.id
        dispatch(addNewPC(newPC))

    }
}

export const starLoadingContract= () => {
    return async(dispatch)=> {
        const arrayContratos= await loadContract()
        dispatch(setContratos(arrayContratos))
    }
}

export const starLoadingPedidoCompra= () => {
    return async(dispatch)=> {
        const arrayContratos= await loadPedidoCompra()
        dispatch(setPedidoCompra(arrayContratos))
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

export const starSaveContract = (data) => {
    return async (dispatch) => {
        try {
            const { contrato, numero,nombre,nombreEmpresa, id } = data;
            const newData = { contrato, numero, nombre, nombreEmpresa };
            console.log(id)
            
            const resp = await updateDoc(doc(FirebaseDB, "usuarios/NVJKnqX8MI7dJryiq0hW/contratos", id), newData);
            dispatch(updateContract(data));
          } catch (error) {
            console.error(error);
          }

    }
}

export const starSavePC =(data) => {
    return async(dispatch) => {
        const {pc,servicio,nombreEmpresa,id} = data
        const newData = {pc,servicio,nombreEmpresa}
        await updateDoc(doc(FirebaseDB,'usuarios/NVJKnqX8MI7dJryiq0hW/pedidos-compras',id),newData)
        console.log(data)
        dispatch(updatePC(data))
    }
}

export const startDeletContract = (id) => {
    return async( dispatch) => {

        const docRef = doc( FirebaseDB, `/usuarios/NVJKnqX8MI7dJryiq0hW/contratos/${id}`);
        await deleteDoc( docRef );
        dispatch( deleteContractById(id) );

    }
}

export const startDeletingContractor = (id) => {
    return async( dispatch) => {

        const docRef = doc( FirebaseDB, `/usuarios/NVJKnqX8MI7dJryiq0hW/contratista/${id}`);
        await deleteDoc( docRef );
        dispatch( deleteContractorById(id));

    }
}

export const startDeletePC = (id) => {
    return async( dispatch) => {

        const docRef = doc( FirebaseDB, `/usuarios/NVJKnqX8MI7dJryiq0hW/pedidos-compras/${id}`);
        await deleteDoc( docRef );
        dispatch( deletePCById(id));

    }
}