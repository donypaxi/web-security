import { useSelector } from "react-redux"

export const TablePedidoCompra = () => {

    const {pedidoCompras}=useSelector(state=> state.contractor)
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
