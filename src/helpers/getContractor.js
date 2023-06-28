import { doc, getDoc } from "firebase/firestore"
import { FirebaseDB } from "../firebase/config"

export const getContractor = async(id) => {
    const documento = await getDoc(doc(FirebaseDB,'usuarios/NVJKnqX8MI7dJryiq0hW/contratista',id))
    const contractor =  documento.data()
    return contractor
}