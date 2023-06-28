import { collection, getDocs } from "firebase/firestore"
import { FirebaseDB } from "../firebase/config"

export const loadContract = async() => {
    const collectionRef = collection(FirebaseDB,'usuarios/NVJKnqX8MI7dJryiq0hW/contratos')
    const docs = await getDocs(collectionRef)
    const contratos = []
    docs.forEach(doc  => {
        contratos.push({id:doc.id, ...doc.data()})
    })
    return contratos
}
