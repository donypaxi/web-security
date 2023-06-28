import { useSelector } from "react-redux"

export const TableContract = () => {

    const {contratos}=useSelector(state=> state.contractor)
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
            <tr key={item.id}>
              <td>{item.contrato}</td>
              <td>{item.nombreEmpresa}</td>
              <td>{item.nombre}</td>
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
