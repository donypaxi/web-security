import { useDispatch, useSelector } from "react-redux"
import { active } from "../../store/contractor/contractorSlice"
import { startDeletingContractor } from "../../store/contractor/thunks"

export const TableContractor = () => {
    const dispatch =useDispatch()
    const {contratistas}=useSelector(state=> state.contractor)

    const onBtnEdit = (id) => {
      const getElement = contratistas.find(item=>item.id == id)
      dispatch(active(getElement))
    }
    const onBtnDelete = (id) => {
      dispatch(startDeletingContractor(id))

    }
  return (
    <>
      <div className="px-10">
        <table className="min-w-full divide-gray-800">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left">Empresa</th>
              <th className="text-left">Ruc</th>
              <th className="text-left">Telefono</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {contratistas.map((item) => (
              <tr key={item.id}>
                <td>{item.empresa}</td>
                <td>{item.ruc}</td>
                <td>{item.telefono}</td>
                
                <td className="w-12 text-rigth"><button onClick={()=>onBtnEdit(item.id)} className=" rounded-xl py-1 px-3 bg-green-500 hover:bg-green-400 duration-200 text-white">Editar</button></td>
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
