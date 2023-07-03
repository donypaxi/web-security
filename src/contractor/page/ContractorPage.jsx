import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { starLoadingContract, starLoadingContractor, starSaveContractor, startNewContractor } from "../../store/contractor/thunks";
import { TableContractor } from "../layout/TableContractor";
import { desactivarContractor } from "../../store/contractor/contractorSlice";
import { Box, Button, Grid, TextField } from "@mui/material";

export const ContractorPage = () => {
  const dispatch =useDispatch()
  const {dataEdit,activeEdit} =useSelector(state => state.contractor)  
  
  const [empresa, setEmpresa] = useState('')
  const [ruc, setRuc] = useState('')  
  const [telefono, setTelefono] = useState('')
  const [id, setId] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState({
    error:'false',
    msg:'ingrese un ruc valido'
  })
  useEffect(() => {
    if (activeEdit) {
      setEmpresa(dataEdit.empresa);
      setRuc(dataEdit.ruc);
      setTelefono(dataEdit.telefono);
      setId(dataEdit.id);
    } else {
      setEmpresa('');
      setRuc('');
      setTelefono('');
    }
  }, [activeEdit, dataEdit.empresa, dataEdit.ruc, dataEdit.telefono]);

  const handleTelefonoChange = (e) => {
    setTelefono(Math.max(0, parseInt(e.target.value)))
  }
  const handleRucChange = (e) => {
    setRuc(Math.max(0, parseInt(e.target.value)))
    
  }

  const handleCancel = () => {
    setEmpresa('')
    setRuc('')
    setTelefono('')
    dispatch(desactivarContractor())
    
  }
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
    useEffect(() => {
      dispatch(starLoadingContractor())
      dispatch(starLoadingContract())
    }, [])
    
  return (
    <>
        <div className="w-full">
          <br />
          <p className="text-slate-700 px-10 text-2xl font-medium">DATOS DE LA NUEVA EMPRESA CONTRATISTA</p>
          <form onSubmit={handleSend} className="px-10 flex flex-col">

          {/* <Box
            component="form"
            onSubmit={handleSend}
            sx={{width:'100%',border:'1px solid black', px:'20px'}}
            > */}
            <Grid container spacing={3} sx={{px:'0px'}}>
             
                <Grid item xs={12} md={6}>
                  <TextField
                  id="empresa"
                  label="empresa"
                  type="text"
                  variant="standard"
                  value={empresa}
                  onChange={(e)=>setEmpresa(e.target.value)}
                  fullWidth
                  // helperText={(empresa.length>10) ? 'Error: No cumple la condición' : ''}
                  >
                  </TextField>
                </Grid>
                <Grid item xs={6} md={6}>
                  <TextField
                  error={!error.error}
                  helperText={!error.error? 'Ingrese un Ruc Valido':''}
                  id="ruc"
                  label="ruc"
                  type="Number"
                  variant="standard"
                  value={ruc}
                  onChange={handleRucChange}
                  fullWidth
                  
                  >
                  </TextField>
                </Grid>
                <Grid item xs={6} md={6}>
                  <TextField
                  id="telefono"
                  label="telefono"
                  type="Number"
                  variant="standard"
                  value={telefono}
                  onChange={handleTelefonoChange}
                  fullWidth
                  >
                  </TextField>
                </Grid>
            </Grid>
            <div className="flex justify-end gap-5">
              <Button
                variant="contained"
                color="error"
                onClick={handleCancel}
                sx={{my:2, alignSelf:'flex-end',display: activeEdit ? 'block' : 'none' }}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{my:2, alignSelf:'flex-end'}}
              >
                {activeEdit? 'Guardar' : 'Crear'}
              </Button>
            </div>
          {/* </Box> */}
          </form>

          <div className="text-center bg-[#235DDB] text-white py-3 mb-5 font-semibold ">EMPRESAS CONTRATISTAS </div>
          
          <TableContractor/>
        </div>
    </>
  )
}
