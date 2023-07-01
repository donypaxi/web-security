import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { starLoadingContractor, starLoadingPedidoCompra, starSavePC, startNewPedidoCompra } from "../../store/contractor/thunks"
import { TablePedidoCompra } from "../layout/TablePedidoCompra"
import { desactivarContractor } from "../../store/contractor/contractorSlice"

export const PedidoCompraPage = () => {
    const  dispatch= useDispatch()
    const {contratistas}=useSelector(state=> state.contractor)
    const {dataEdit, activeEdit} =useSelector(state=> state.contractor)
    const empresas = contratistas.map(contratista => ({id:contratista.id, nombre:contratista.empresa}))
    
    const [pc, setPc] = useState('')
    const [servicio, setServicio] = useState('')
    const [nombreEmpresa, setNombreEmpresa] = useState('')
    const [id, setId] = useState('')
    const newPC = {pc,servicio,nombreEmpresa  }

     

    useEffect(() => {
      if(activeEdit){
        setPc(dataEdit.pc)
        setServicio(dataEdit.servicio)
        setNombreEmpresa(dataEdit.nombreEmpresa)
        setId(dataEdit.id);
      }else {
        setPc('')
        setServicio('')
        setNombreEmpresa('')
      }
    }, [activeEdit])
    



    const handleSend = (e) => {
      e.preventDefault()
      if(activeEdit){
        dispatch(starSavePC({pc,servicio,nombreEmpresa,id}))
        dispatch(desactivarContractor())
      }else {
        setPc('')
        setServicio('')
        setNombreEmpresa('')
        dispatch(startNewPedidoCompra(newPC))
      }
          
    }
    useEffect(() => {
      dispatch(starLoadingContractor())
      dispatch(starLoadingPedidoCompra())

    }, [])
    
  return (
    <>
      <div className="w-full">
        <div className="text-center bg-red-400 text-white py-3 ">NUEVO PEDIDO COMPRA </div>
        <form className="bg-cyan-500 pt-5">
          <div className="flex justify-center gap-5 px-5">
            <div>
              <label>Pedido Compra</label>
              <input type="text" value={pc}  onChange={(e)=>setPc(e.target.value)} />
            </div>
            <div>
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
                {empresas.map((empresa) => (
                  <option key={empresa.id} value ={empresa.nombre}>{empresa.nombre} </option>
                ))}
              </select>
            </div>
          </div>
          <button className="bg-green-400 rounded-xl  p-2 m-5" type="submit" onClick={handleSend}>{activeEdit ? 'Guardar' : 'Crear'}</button>
        </form>
        <TablePedidoCompra/>
      </div>
    </>
  )
}
