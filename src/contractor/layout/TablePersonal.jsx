
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useEffect } from "react";
import { setEmployees } from "../../store/contractor/contractorSlice";
import { startDeletEmpleado } from "../../store/contractor/thunks";

export const TablePersonal = () => {

    const dispatch =useDispatch()
    const {mostrarEmpleados}=useSelector(state=> state.contractor)
 
    const campos = ['Numero', 'Apellido Paterno', 'Apellido Materno','nombres','emo','sctrp', 'sctrs', 'iperc', 'capacit' ,'epp' ,'ropa','dni','foto']


    const onEditEmpleado =(id) =>{
        console.log(id)
    }
    const onEliminartEmpleado = (id) => {
        console.log(id)
        dispatch(startDeletEmpleado(id))

    }
    useEffect(() => {
    }, [mostrarEmpleados])
    
  return (
    <>
       <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                    {campos.map((campo,id) => (
                      <TableCell key={id}>{campo}</TableCell>
                    ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {mostrarEmpleados.map((empleado,i) => (
                  <TableRow key={empleado.id}>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>{empleado.apPaterno}</TableCell>
                    <TableCell>{empleado.apMaterno}</TableCell>
                    <TableCell>{empleado.nombres}</TableCell>
                    <TableCell>{empleado.emo}</TableCell>
                    <TableCell>{empleado.sctrp}</TableCell>
                    <TableCell>{empleado.sctrs}</TableCell>
                    <TableCell>{empleado.iperc}</TableCell>
                    <TableCell>{empleado.capacit}</TableCell>
                    <TableCell>{empleado.epp}</TableCell>
                    <TableCell>{empleado.ropa}</TableCell>
                    <TableCell>{empleado.dni}</TableCell>
                    <TableCell>{empleado.foto}</TableCell>   
                    <TableCell> 
                        <button onClick={()=>onEditEmpleado(empleado.id)}> <EditIcon color="success"/></button> </TableCell>   
                    <TableCell> 
                        <button onClick={()=>onEliminartEmpleado(empleado.id)}> <DeleteForeverIcon color="error"/> 
                        </button></TableCell>   

                  </TableRow>

                ))}
              </TableBody>
            </Table>
       </TableContainer>

    </>
  )
}
