import { useDispatch, useSelector } from "react-redux"
import { active } from "../../store/contractor/contractorSlice"
import { startDeletePC } from "../../store/contractor/thunks"

export const TablePedidoCompra = () => {

    const dispatch=useDispatch()
    const {pedidoCompras}=useSelector(state=> state.contractor)

    const onBtnEdit = (id) => {
      const getElement = pedidoCompras.find(pedidoCompra => pedidoCompra.id ===id)
      dispatch(active(getElement))
    }
    const onBtnDelete = (id) => {
      dispatch(startDeletePC(id))
    }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Pedido Compra</th>
            <th>Empresa</th>
            <th>servicio</th>
          </tr>
        </thead>
        <tbody>
          {pedidoCompras.map((item) => (
            <tr key={item.id}>
              <td>{item.pc}</td>
              <td>{item.nombreEmpresa}</td>
              <td>{item.servicio}</td>
              <td></td>
              <td></td>
              <td><button onClick={()=>onBtnEdit(item.id)} className="rounded-xl py-1 px-3 bg-green-600 text-white">Editar</button></td>
              <td><button onClick={()=>onBtnDelete(item.id)} className="rounded-xl py-1 px-3 bg-red-600 text-white">Eliminar</button></td>
            </tr>
            )
          )}
          </tbody>
      </table>
    
    </>
  )
}
