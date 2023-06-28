import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { starSaveContractor, startNewContractor } from "../../store/contractor/thunks";
import { TableContractor } from "../layout/TableContractor";
import { LoadingPage } from "./LoadingPage";
import { desactivarContractor } from "../../store/contractor/contractorSlice";


export const ContractorPage = () => {
  const dispatch =useDispatch()
  const {formContractor,activeEdit} =useSelector(state => state.contractor)  
  const [empresa, setEmpresa] = useState('')
  const [ruc, setRuc] = useState('')  
  const [telefono, setTelefono] = useState('')
  const [id, setId] = useState('')
  useEffect(() => {
    if (activeEdit) {
      setEmpresa(formContractor.empresa);
      setRuc(formContractor.ruc);
      setTelefono(formContractor.telefono);
      setId(formContractor.id);
    } else {
      setEmpresa('');
      setRuc('');
      setTelefono('');
    }
  }, [activeEdit, formContractor.empresa, formContractor.ruc, formContractor.telefono]);

  const handleSend = (e) => {
      e.preventDefault()
      if(activeEdit){
        dispatch(starSaveContractor({empresa,ruc,telefono,id}))
        console.log('actualizando')
        dispatch(desactivarContractor())
      }else {
        setEmpresa('')
        setRuc('')
        setTelefono('')
        dispatch(startNewContractor({empresa,ruc,telefono}))
      }
    }
    
    
  return (
    <>
        <LoadingPage/>
        <div className="text-center bg-red-400 text-white py-3 ">EMPRESAS CONTRATISTAS </div>
        <form className="bg-cyan-500 pt-5">
          <div className="px-5 flex justify-center gap-5">
            <label>Empresa</label>
            <input type="text"  value={empresa}   onChange={(e)=>setEmpresa(e.target.value)} />
            <label>Ruc</label>
            <input type="text" value={ruc}  onChange={(e)=>setRuc(e.target.value)}/>
            <label>Teléfono</label>
            <input type="text" value={telefono}  onChange={(e)=>setTelefono(e.target.value)}/>
          </div>
            <button className="bg-green-400 rounded-xl  p-2 m-5" type="submit" onClick={handleSend}>{activeEdit? 'Guardar' : 'Crear'}</button>
        </form>
        <TableContractor/>
    </>
  )
}
