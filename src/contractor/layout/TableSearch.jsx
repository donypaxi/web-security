import { useDispatch, useSelector } from "react-redux"
import { active, idRegister, setMostrar } from "../../store/contractor/contractorSlice"
import { startDeletRegister } from "../../store/contractor/thunks"
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button, Modal } from "@mui/material";
import { useState } from "react";
import { FormularioPersonal } from "./FormularioPersonal";

export const TableSearch = () => {

    const dispatch=useDispatch()
    const {mostrar}=useSelector(state=> state.contractor)
    const [open, setOpen] = useState(false)
  const onBtnAddPersonal = (id) => {
      setOpen(true)
      dispatch(idRegister(id)) 
    }
    const onBtnClose = () => {
      setOpen(false)
    }
    const onBtnEdit = (id) => {
        const getElement = mostrar.find(register => register.id ===id)
        dispatch(active(getElement))
    }
    const onBtnDelete = (id) => {
        dispatch(startDeletRegister(id))
    }
      

  return (
    <>
      <div className="px-10">
        <table className="min-w-full divide-gray-800">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left ">Registro</th>
              <th className="text-left ">Tipo</th>
              <th className="text-left">Empresa</th>
              <th className="text-left">servicio</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {mostrar.map((item) => (
              <tr key={item.id}>
                <td className="pr-5" >{item.register}</td>
                <td className="pr-5">{item.type}</td>
                <td className="pr-5" >{item.empresa}</td>
                <td >{item.servicio}</td>
                <td className="pb-1"><button onClick={()=>onBtnAddPersonal(item.id)}><PersonAddAlt1Icon color="info"/></button></td>
                <td className="px-4"><button><VisibilityIcon color="secondary"/></button></td>
                <td className="pl-2 w-12 text-rigth"><button onClick={()=>onBtnEdit(item.id)} className=" rounded-xl py-1 px-3 bg-green-500 hover:bg-green-400 duration-200 text-white">Editar</button></td>
                <td className="w-12 text-rigth"><button onClick={()=>onBtnDelete(item.id)} className="rounded-xl py-1 px-3 bg-red-500 hover:bg-red-400 duration-200 text-white">Eliminar</button></td>
              </tr>
              )
            )}
            </tbody>
        </table>
      </div>
      <Modal open={open}
        onClose={onBtnClose}
      >
        <div className="rounded-xl mx-auto  w-3/4 h-auto max-h-screen mt-20 bg-white flex flex-col items-center">
          <p className="text-2xl pt-10 pb-5">Ingreso de Nuevo Personal</p>
          <FormularioPersonal/> 
          <br /> 
          <Button variant="contained" onClick={onBtnClose} sx={{mb:'20px'}}>
            Cerrar
          </Button> 
        </div>
      </Modal>
    </>
  )
}
