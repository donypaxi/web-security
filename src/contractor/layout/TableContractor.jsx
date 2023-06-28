import { useEffect } from "react"
import { useSelector } from "react-redux"

export const TableContractor = () => {

    const {mostrar}=useSelector(state=> state.contractor)
    console.log(mostrar)
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Empresa</th>
            <th>Ruc</th>
            <th>telefono</th>
            <th>dirección</th>

          </tr>
        </thead>
        <tbody>
          {mostrar.map((item) => (
            <tr key={item.id}>
              <td>{item.empresa}</td>
              <td>{item.ruc}</td>
              <td>{item.telefono}</td>
              <td></td>
              <td></td>
              <td><button className="rounded-xl py-1 px-3 bg-green-600 text-white">Editar</button></td>
              <td><button className="rounded-xl py-1 px-3 bg-red-600 text-white">Eliminar</button></td>
            </tr>
            )
          )}
          </tbody>
      </table>
    
    </>
  )
}
