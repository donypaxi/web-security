import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { starLoadingContract, starLoadingContractor, startNewContract } from "../../store/contractor/thunks"
import { TableContract } from "../layout/TableContract"

export const NewContract = () => {
    const  dispatch= useDispatch()
    const {contratistas}=useSelector(state=> state.contractor)
    const empresas = contratistas.map(contratista => ({id:contratista.id, nombre:contratista.empresa}))
    const [numero, setNumero] = useState('')
    const [nombre, setNombre] = useState('')
    const [nombreEmpresa, setNombreEmpresa] = useState('')
    const year = new Date().getFullYear();
    const newNumero = `Es-c-${numero}-${year}`
    const newContract = {contrato:newNumero,nombreEmpresa,nombre  }

    const handleSend = (e) => {
      setNumero('')
      setNombreEmpresa('')
      setNombre('')
      e.preventDefault()
      dispatch(startNewContract(newContract))
      dispatch(starLoadingContract())
    }
    useEffect(() => {
      dispatch(starLoadingContractor())
      dispatch(starLoadingContract())
    }, [])
    
  return (
    <>
      <div className="text-center bg-red-400 text-white py-3 ">NUEVO CONTRATO </div>
      <form className="bg-cyan-500 pt-5">
        <div className="flex flex-col justify-center gap-5 px-5 flex-wrap">
          <div>
            <label className="mr-5">NÚMERO</label>
            <input type="text" value={numero}  onChange={(e)=>setNumero(e.target.value)}/>
          </div>
          <div>
            <label className="mr-5">NOMBRE</label>
            <input className="w-96" type="text" value={nombre}  onChange={(e)=>setNombre(e.target.value)}/>
          </div>
          <div>
            <label className="mr-5">Seleccione Empresa</label>
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
        <button className="bg-green-400 rounded-xl  p-2 m-5" type="submit" onClick={handleSend}>Crear</button>
      </form>
      <TableContract/>
    </>
  )
}
