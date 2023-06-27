import { collection, getDocs } from "firebase/firestore"
import { FirebaseDB } from "../firebase/config"

export const loadContractor = async() => {
    const collectionRef = collection(FirebaseDB,'contratista')
    const docs = await getDocs(collectionRef)
    const contratista = []
    docs.forEach(doc  => {
        contratista.push({id:doc.id, ...doc.data()})
    })
    return contratista
}