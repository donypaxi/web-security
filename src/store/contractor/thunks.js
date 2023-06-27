import { addDoc, collection } from "firebase/firestore"
import { FirebaseDB } from "../../firebase/config"
import { loadContractor } from "../../helpers"
import { setContratista } from "./contractorSlice"

export const startNewNote = ({razon,datos}) => {
    return async() => {

        const newContractor = {
            razon,
            datos
        }

        const docRef = await addDoc(collection(FirebaseDB,'contratista'),newContractor)

    }
}


export const starLoadingContractor= () => {
    return async(dispatch)=> {
        const arrayContratistas= await loadContractor()
        dispatch(setContratista(arrayContratistas))
    }
}