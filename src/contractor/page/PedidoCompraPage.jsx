import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { starLoadingContractor } from "../../store/contractor/thunks"

export const PedidoCompraPage = () => {
    const  dispatch= useDispatch()
    const {contratistas}=useSelector(state=> state.contractor)
    const empresas = contratistas.map(contratista => contratista.empresa)
    const [pc, setPc] = useState('')
    const [contrato, setContrato] = useState('')  
    const [servicio, setServicio] = useState('')
    const [nombreEmpresa, setNombreEmpresa] = useState('')

    const handleSend = (e) => {
        setPc('')
        setContrato('')
        setServicio('')
        setNombreEmpresa('')
        e.preventDefault()
      console.log(nombreEmpresa)
    }
    useEffect(() => {
      dispatch(starLoadingContractor())
    }, [])
    
  return (
    <>
      <div className="text-center bg-red-400 text-white py-3 ">NUEVO PEDIDO COMPRA </div>
      <form className="bg-cyan-500 pt-5">
        <div className="flex justify-center gap-5 px-5">
          <div>
            <label>Pedido Compra</label>
            <input type="text" value={pc}  onChange={(e)=>setPc(e.target.value)} />
          </div>
          <div>
            <label>Contrato</label>
            <input type="text" value={contrato}  onChange={(e)=>setContrato(e.target.value)}/>
          </div>
          <div>
            <label>Servicio</label>
            <input type="text" value={servicio}  onChange={(e)=>setServicio(e.target.value)}/>
          </div>
          <div>
            <label>Seleccione Empresa</label>
            <select id="cars"
              value={nombreEmpresa}
              onChange={(e)=>setNombreEmpresa(e.target.value)}
            >
              <option value="" disabled >Seleccione una opción</option>
              {empresas.map((nombre,i) => (
                <option key={i} value ={nombre}>{nombre} </option>
              ))}
            </select>
          </div>
        </div>
        <button className="bg-green-400 rounded-xl  p-2 m-5" type="submit" onClick={handleSend}>Crear</button>
      </form>
    </>
  )
}
