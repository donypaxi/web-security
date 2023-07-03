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
          <form className="px-10 flex flex-col">

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
                  >
                  </TextField>
                </Grid>
                <Grid item xs={6} md={6}>
                  <TextField
                  id="ruc"
                  label="ruc"
                  type="text"
                  variant="standard"
                  value={ruc}
                  onChange={(e)=>setRuc(e.target.value)}
                  fullWidth
                  
                  >
                  </TextField>
                </Grid>
                <Grid item xs={6} md={6}>
                  <TextField
                  id="telefono"
                  label="telefono"
                  type="text"
                  variant="standard"
                  value={telefono}
                  onChange={(e)=>setTelefono(e.target.value)}
                  fullWidth

                  >
                  </TextField>
                </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{my:2, alignSelf:'flex-end'}}
            >
              {activeEdit? 'Guardar' : 'Crear'}
            </Button>
          {/* </Box> */}
          </form>

          <div className="text-center bg-[#235DDB] text-white py-3 mb-5 font-semibold ">EMPRESAS CONTRATISTAS </div>
          
          <TableContractor/>
        </div>
    </>
  )
}
