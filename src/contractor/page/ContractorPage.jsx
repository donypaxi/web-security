import { useState } from "react"
import { useDispatch } from 'react-redux';
import { startNewNote } from "../../store/contractor/thunks";


export const ContractorPage = () => {

    const dispatch =useDispatch()
    
    const [razon, setRazon] = useState('')
    const [datos, setdatos] = useState('')

    const handleSend = (e) => {
        dispatch(startNewNote({razon,datos}))
        e.preventDefault()
    }
  return (
    <>
        <div className="text-center bg-red-400 text-white py-3">SISTEMA DE SEGURIDAD</div>
        <form className="bg-cyan-500 pt-5">
            <label>Razon social</label>
            <input type="text" onChange={(e)=>setRazon(e.target.value)} />
            <br />
            <br />
            <label>Ingrese sus datos</label>
            <input type="text"  onChange={(e)=>setdatos(e.target.value)}/>
            <br />
            <br />
            <button className="bg-green-400 rounded-sm" type="submit" onClick={handleSend}>Enviar</button>
        </form>
    </>
  )
}
