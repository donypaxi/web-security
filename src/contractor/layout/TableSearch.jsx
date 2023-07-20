import { useDispatch, useSelector } from "react-redux"
import { active, idRegister, setMostrar } from "../../store/contractor/contractorSlice"
import { starLoadingEmployees, startDeletRegister } from "../../store/contractor/thunks"
import SearchIcon from '@mui/icons-material/Search';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button, Modal, TextField } from "@mui/material";
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import { useState } from "react";
import { FormularioPersonal } from "./FormularioPersonal";
import { TablePersonal } from "./TablePersonal";
import { blue } from '@mui/material/colors';

const bluelActive = blue[200];

export const TableSearch = () => {

    const dispatch=useDispatch()
    const {mostrar}=useSelector(state=> state.contractor)
    const [open, setOpen] = useState(false)
    const [openEmployees, setOpenEmployees] = useState(false)
    const [user, setUser] = useState('')
    const onBtnAddPersonal = () => {
      setOpen(true)
      dispatch(idRegister(user)) 
      // console.log(user)
    }
    const onBtnViewEmployees = (id) => {
      setOpenEmployees(true)
      dispatch(starLoadingEmployees(id))
      setUser(id)
      console.log(id)
    }
    const onBtnCloseEmployees = () => {
      setOpenEmployees(false)

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
                {/* <td className="pb-1"><button onClick={()=>onBtnAddPersonal(item.id)}><PersonAddAlt1Icon color="info"/></button></td> */}
                <td className="px-4"><button onClick={()=>onBtnViewEmployees(item.id)}><VisibilityIcon color="secondary"/></button></td>
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
        className="overflow-y-auto"
        
      >
        <div 
        className="rounded-xl mx-10 mt-5 bg-white flex flex-col items-center"
        >
          <p className="text-2xl pt-10 pb-5">Ingreso de Nuevo Personal</p>
          <FormularioPersonal/> 
          <br /> 
          <Button variant="contained" onClick={onBtnClose} sx={{mb:'20px'}}>
            Cerrar
          </Button> 
        </div>
      </Modal>



      <Modal open={openEmployees}
        onClose={onBtnCloseEmployees}
        className="overflow-y-auto"
      >
        <div 
        className="rounded-xl mx-10 mt-5 bg-white flex flex-col items-center"
        >
          <p className="text-2xl mt-10 ">Lista de Personal</p>
          <div className="flex justify-between	w-full px-12 align-center">
            <div className="flex gap-5 mt-5">
              <button ><SearchIcon /></button>
              <input className="rounded-md border-2 border-gray-700 px-2 text-sm" type="text" placeholder="aun no funciona"/>
            </div>
            <button onClick={onBtnAddPersonal} className="flex items-center justify-center "><PersonAddAltSharpIcon color="info" sx={{
          '&:hover': {
            color: bluelActive, 
          },
        }} /></button>
          </div>
          <TablePersonal/> 
          <br /> 
          <Button variant="contained" onClick={onBtnCloseEmployees} sx={{mb:'20px'}}>
            Cerrar
          </Button> 
        </div>
      </Modal>
    </>
  )
}
