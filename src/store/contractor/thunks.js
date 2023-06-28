import { addDoc, collection } from "firebase/firestore"
import { FirebaseDB } from "../../firebase/config"
import { loadContract, loadContractor, loadPedidoCompra } from "../../helpers"
import { setContratista, setContratos, setPedidoCompra } from "./contractorSlice"

export const startNewNote = (form) => {
    return async() => {
        const {empresa,ruc,telefono} = form
        const newContractor = {
            empresa,
            ruc,
            telefono
        }
        const docRef = await addDoc(collection(FirebaseDB,'usuarios/NVJKnqX8MI7dJryiq0hW/contratista'),newContractor)
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