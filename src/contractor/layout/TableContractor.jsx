import { useDispatch, useSelector } from "react-redux"
import { activeContractor } from "../../store/contractor/contractorSlice"
import { useEffect } from "react"

export const TableContractor = () => {
    const dispatch =useDispatch()
    const {contratistas}=useSelector(state=> state.contractor)

    // useEffect(() => {
    //   console.log('constratistas actualizados')
    //   console.log(contratistas)
    // }, [contratistas])
    

    const onBtnEdit = (id) => {
      const getElement = contratistas.find(item=>item.id == id)
      dispatch(activeContractor(getElement))
    }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Empresa</th>
            <th>Ruc</th>
            <th>telefono</th>

          </tr>
        </thead>
        <tbody>
          {contratistas.map((item) => (
            <tr key={item.id}>
              <td>{item.empresa}</td>
              <td>{item.ruc}</td>
              <td>{item.telefono}</td>
              <td></td>
              <td></td>
              <td><button onClick={()=>onBtnEdit(item.id)} className="rounded-xl py-1 px-3 bg-green-600 text-white">Editar</button></td>
              <td><button className="rounded-xl py-1 px-3 bg-red-600 text-white">Eliminar</button></td>
            </tr>
            )
          )}
          </tbody>
      </table>
    
    </>
  )
}
