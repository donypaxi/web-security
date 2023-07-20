import { collection, getDocs } from "firebase/firestore"
import { FirebaseDB } from "../firebase/config"

export const loadEmployees = async(id) => {
    const collectionRef = collection(FirebaseDB,`/usuarios/NVJKnqX8MI7dJryiq0hW/registros/${id}/personal`)
    const docs = await getDocs(collectionRef)
    const empleado = []
    docs.forEach(doc  => {
        empleado.push({id:doc.id, ...doc.data()})
    })
    return empleado
}
