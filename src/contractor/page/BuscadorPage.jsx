import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { starLoadingContractor, starLoadingEmployees, starLoadingRecords, starSaveRegister, startNewRegister } from "../../store/contractor/thunks"
import { desactivarContractor, setFilter, setMostrar } from "../../store/contractor/contractorSlice"
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { TableSearch } from "../layout"


export const BuscadorPage = () => {

    const  dispatch= useDispatch()
    let datos ={
      expediente:'',
      cliente:'',
      proceso:''
  }
    const {contratistas}=useSelector(state=> state.contractor)
    const empresas = contratistas.map(contratista => ({id:contratista.id, nombreEmpresa:contratista.empresa}))
    const {dataEdit,activeEdit} =useSelector(state => state.contractor)  
    const [numero, setNumero] = useState('')
    const [type, setType] = useState('')
    const [empresa, setEmpresa] = useState('')
    const [servicio, setServicio] = useState('')
    const [id, setId] = useState('')
    const year = new Date().getFullYear();
    datos.numero=numero;
    datos.type=type
    datos.empresa=empresa
    datos.servicio=servicio
    useEffect(() => {
      dispatch(setFilter(datos))
    }, [numero,type,empresa,servicio])
    // console.log(datos)


    useEffect(() => {
      if (activeEdit) {
        setNumero(dataEdit.numero);
        setServicio(dataEdit.servicio);
        setEmpresa(dataEdit.empresa);
        setType(dataEdit.type);
        setId(dataEdit.id);
      } else {
        setNumero('');
        setServicio('');
        setEmpresa('');
        setType('');
      }
    }, [activeEdit, dataEdit.numero, dataEdit.servicio, dataEdit.empresa,dataEdit.type]);

    const handleCancel = (e) => {
      setNumero('');
      setServicio('');
      setEmpresa('');
      setType('');
      dispatch(desactivarContractor())

    }
    const handleSend = (e) => {
      e.preventDefault()
      if(activeEdit ){
        if(type==='contrato'){
          const register = `Es-c-${numero.slice(0, 3).padStart(3, '0')}-${year}`
          dispatch(starSaveRegister({register,numero,servicio,empresa,type,id}))
          console.log('actualizando')
          dispatch(desactivarContractor())
        }else {
          const register = `PC${4500000000 + parseInt(numero)}`
          dispatch(starSaveRegister({register,numero,servicio,empresa,type,id}))
          console.log('actualizando')
          dispatch(desactivarContractor())
        }
      }else{
        if(type === 'contrato'){
          const register = `Es-c-${numero.slice(0, 3).padStart(3, '0')}-${year}`
          const newRegister = {register,numero,empresa,servicio,type}    
          setNumero('')
          setEmpresa('')
          setServicio('')
          setType('')
          console.log(newRegister)
          dispatch(startNewRegister(newRegister))
          dispatch(starLoadingRecords())

        }else{
          const register = `PC${4500000000 + parseInt(numero)}`
          const newRegister = {register,numero,empresa,servicio,type}    
          setNumero('')
          setEmpresa('')
          setServicio('')
          setType('')
          console.log(newRegister)
          dispatch(startNewRegister(newRegister))
          dispatch(starLoadingRecords())

        }
      }
    }
    useEffect(() => {
      dispatch(starLoadingContractor())
      dispatch(starLoadingRecords())
      dispatch(starLoadingEmployees())

    }, [])
  return (
    <>
      <div className="w-full">
      <br />
      
      <p className="text-slate-700 px-10 text-2xl font-medium">BUSQUEDA DE REGISTRO</p>
        <form onSubmit={handleSend} className="flex flex-col px-10">
          <Grid container spacing={3}>
            <Grid item  xs={12} md={6}>
              <TextField
                id='numero'
                label='registro'
                type='Number'
                variant="standard"
                value={numero}
                onChange={(e)=>setNumero(e.target.value)}
                fullWidth
              >
                NÚMERO
              </TextField>
            </Grid>
                       
            <Grid item xs={12} md={6}>
              <FormControl sx={{ minWidth: 300 }}>

                <InputLabel id="empresa-label">Seleccione Empresa</InputLabel>
                <Select
                  labelId="empresa-label"
                  id="empresa"
                  value={empresa}
                  variant="standard"
                  onChange={(e) => setEmpresa(e.target.value)}
                  
                >
                <MenuItem value='' >
                  Seleccione una opción
                </MenuItem>
                {empresas.map((empresa) => (
                  <MenuItem key={empresa.id} value={empresa.nombreEmpresa}>
                    {empresa.nombreEmpresa}
                  </MenuItem>
                ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item  xs={12} md={6}>
              <TextField
                id='Servicio'
                label='Servicio'
                type='text'
                variant="standard"
                value={servicio}
                onChange={(e)=>setServicio(e.target.value)}
                fullWidth
              >
                SERVICIO
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl sx={{ minWidth: 300 }}>

                <InputLabel id="type-label">Seleccione el tipo</InputLabel>
                <Select
                  labelId="type-label"
                  id="type"
                  value={type}
                  variant="standard"
                  onChange={(e) => setType(e.target.value)}
                >
                <MenuItem value='' >
                  Seleccione una opción
                </MenuItem>
                <MenuItem value='pedido de compra'>Pedido de Compra</MenuItem>
                <MenuItem value='contrato'>Contrato</MenuItem>
                </Select>
              </FormControl>
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
                sx={{
                  display: activeEdit ? 'block' : 'none',
                  my:2, alignSelf:'flex-end'}}
              >
                {activeEdit? 'Guardar' : 'Crear'}
              </Button>
            </div>
         
        </form>
        <div className="text-center bg-[#235DDB] text-white mt-10 py-3 mb-5 font-semibold ">LISTA DE REGISTROS </div>

        <TableSearch/>
      </div>
    </>
  )
}
