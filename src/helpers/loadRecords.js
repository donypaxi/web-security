import { collection, getDocs } from "firebase/firestore"
import { FirebaseDB } from "../firebase/config"

export const loadRecords = async() => {
    const collectionRef = collection(FirebaseDB,'/usuarios/NVJKnqX8MI7dJryiq0hW/registros')
    const docs = await getDocs(collectionRef)
    const registros = []
    docs.forEach(doc  => {
        registros.push({id:doc.id, ...doc.data()})
    })
    // console.log(registros,'load')
    return registros
}
