import { useDispatch, useSelector } from "react-redux"
import { active } from "../../store/contractor/contractorSlice"
import { startDeletRegister } from "../../store/contractor/thunks"

export const TableRegister = () => {

    const dispatch=useDispatch()
    const {records}=useSelector(state=> state.contractor)
    const onBtnEdit = (id) => {
      const getElement = records.find(register => register.id ===id)
      dispatch(active(getElement))
    }
    const onBtnDelete = (id) => {
      dispatch(startDeletRegister(id))
    }

  return (
    <>
      <div className="px-10">
        <table className="min-w-full divide-gray-800">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left ">Registro</th>
              <th className="text-left ">Tipo</th>
              <th className="text-left">Empresa</th>
              <th className="text-left">servicio</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {records.map((item) => (
              <tr key={item.id}>
                <td className="pr-5" >{item.register}</td>
                <td className="pr-5">{item.type}</td>
                <td className="pr-5" >{item.empresa}</td>
                <td >{item.servicio}</td>
                <td className="pl-2 w-12 text-rigth"><button onClick={()=>onBtnEdit(item.id)} className=" rounded-xl py-1 px-3 bg-green-500 hover:bg-green-400 duration-200 text-white">Editar</button></td>
                <td className="w-12 text-rigth"><button onClick={()=>onBtnDelete(item.id)} className="rounded-xl py-1 px-3 bg-red-500 hover:bg-red-400 duration-200 text-white">Eliminar</button></td>
              </tr>
              )
            )}
            </tbody>
        </table>
      </div>
    
    </>
  )
}
