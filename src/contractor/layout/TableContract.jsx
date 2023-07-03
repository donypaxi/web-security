import { useDispatch, useSelector } from "react-redux"
import { active } from "../../store/contractor/contractorSlice"
import { startDeletContract } from "../../store/contractor/thunks"

export const TableContract = () => {

  const dispatch =useDispatch()

  const {contratos}=useSelector(state=> state.contractor)
  const onBtnEdit = (id) => {
    const getElement = contratos.find(item=>item.id == id)
    dispatch(active(getElement))
  }
  const onBtnDelete = (id) => {
    dispatch(startDeletContract(id))
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>contrato</th>
            <th>Empresa</th>
            <th>servicio</th>
          </tr>
        </thead>
        <tbody>
          {contratos.map((item) => (
            <tr key={item.id} className="text-center">
              <td>{item.contrato}</td>
              <td>{item.nombreEmpresa}</td>
              <td>{item.nombre}</td>
              <td></td>
              <td></td>
              <td><button onClick={()=>onBtnEdit(item.id)} className="rounded-xl py-1 px-3 bg-green-400 text-white">Editar</button></td>
              <td><button onClick={()=>onBtnDelete(item.id)} className="rounded-xl py-1 px-3 bg-red-400 text-white">Eliminar</button></td>
            </tr>
            )
          )}
          </tbody>
      </table>
    
    </>
  )
}
