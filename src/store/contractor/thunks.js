import { addDoc, collection } from "firebase/firestore"
import { FirebaseDB } from "../../firebase/config"

export const startNewNote = ({razon,datos}) => {
    return async() => {

        const newContractor = {
            razon,
            datos
        }

        const docRef = await addDoc(collection(FirebaseDB,'contratista'),newContractor)
        console.log(docRef)
        
    }
}