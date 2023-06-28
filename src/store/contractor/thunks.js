import { addDoc, collection } from "firebase/firestore"
import { FirebaseDB } from "../../firebase/config"
import { loadContractor } from "../../helpers"
import { setContratista } from "./contractorSlice"

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


export const starLoadingContractor= () => {
    return async(dispatch)=> {
        const arrayContratistas= await loadContractor()
        dispatch(setContratista(arrayContratistas))
    }
}