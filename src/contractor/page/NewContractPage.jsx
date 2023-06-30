import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { starLoadingContract, starLoadingContractor, starSaveContract, startNewContract } from "../../store/contractor/thunks"
import { TableContract } from "../layout/TableContract"
import { desactivarContractor } from "../../store/contractor/contractorSlice"

export const NewContractPage = () => {
    const  dispatch= useDispatch()
    
    const {contratistas}=useSelector(state=> state.contractor)
    const empresas = contratistas.map(contratista => ({id:contratista.id, nombre:contratista.empresa}))

    const {dataEdit,activeEdit} =useSelector(state => state.contractor)  
    const [numero, setNumero] = useState('')
    const [nombre, setNombre] = useState('')
    const [nombreEmpresa, setNombreEmpresa] = useState('')
    const [id, setId] = useState('')
    const year = new Date().getFullYear();
    const contrato = `Es-c-${numero}-${year}`
    const newContract = {contrato,numero,nombreEmpresa,nombre  }

    useEffect(() => {
      if (activeEdit) {
        setNumero(dataEdit.numero);
        setNombre(dataEdit.nombre);
        setNombreEmpresa(dataEdit.nombreEmpresa);
        setId(dataEdit.id);
      } else {
        setNumero('');
        setNombre('');
        setNombreEmpresa('');
      }
    }, [activeEdit, dataEdit.numero, dataEdit.nombre, dataEdit.nombreEmpresa]);

    const handleSend = (e) => {
      e.preventDefault()
      if(activeEdit){
        dispatch(starSaveContract({contrato,numero,nombre,nombreEmpresa,id}))
        console.log('actualizando')
        dispatch(desactivarContractor())
      }else{
        setNumero('')
        setNombreEmpresa('')
        setNombre('')
        dispatch(startNewContract(newContract))
      }
    }
    useEffect(() => {
      dispatch(starLoadingContractor())
      dispatch(starLoadingContract())
    }, [])
    
  return (
    <>
      <div>
        <div className="text-center bg-red-400 text-white py-3">NUEVO CONTRATO </div>
        <form className="bg-cyan-500 pt-5">
          <div className="flex justify-center gap-5 px-5 flex-wrap">
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
          <button className="bg-green-400 rounded-xl  p-2 m-5" type="submit" onClick={handleSend}>{activeEdit? 'Guardar' : 'Crear'}</button>
        </form>
        <TableContract/>
      </div>
    </>
  )
}
