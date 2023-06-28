import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore"
import { FirebaseDB } from "../../firebase/config"
import { getContractor, loadContract, loadContractor, loadPedidoCompra } from "../../helpers"
import { addNewContratista, setContratista, setContratos, setPedidoCompra, updateContractor } from "./contractorSlice"

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
    return async() => {
        const docRef = await addDoc(collection(FirebaseDB,'usuarios/NVJKnqX8MI7dJryiq0hW/contratos'),contract)

    }
}

export const startNewPedidoCompra = (newPC) => {
    return async() => {
        const docRef = await addDoc(collection(FirebaseDB,'/usuarios/NVJKnqX8MI7dJryiq0hW/pedidos-compras'),newPC)

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