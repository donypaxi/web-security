import { collection, getDocs } from "firebase/firestore"
import { FirebaseDB } from "../firebase/config"

export const loadPedidoCompra = async() => {
    const collectionRef = collection(FirebaseDB,'/usuarios/NVJKnqX8MI7dJryiq0hW/pedidos-compras')
    const docs = await getDocs(collectionRef)
    const pedidosCompras = []
    docs.forEach(doc  => {
        pedidosCompras.push({id:doc.id, ...doc.data()})
    })
    return pedidosCompras
}
