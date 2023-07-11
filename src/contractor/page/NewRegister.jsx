import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { starLoadingContractor, starLoadingRecords, starSaveRegister, startNewRegister } from "../../store/contractor/thunks"
import { desactivarContractor } from "../../store/contractor/contractorSlice"
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { TableRegister } from "../layout"


export const NewRegister = () => {

    const  dispatch= useDispatch()
    
    const {contratistas}=useSelector(state=> state.contractor)
    const empresas = contratistas.map(contratista => ({id:contratista.id, nombreEmpresa:contratista.empresa}))
    const {dataEdit,activeEdit} =useSelector(state => state.contractor)  
    const [type, setType] = useState('')
    const [numero, setNumero] = useState('')
    const [servicio, setServicio] = useState('')
    const [empresa, setEmpresa] = useState('')
    const [completeCampos, setCompleteCampos] = useState(true)
    const [id, setId] = useState('')
    const year = new Date().getFullYear();
    // const formatNumber = numero.padStart(3, '0');
    useEffect(() => {
      const allComplete = numero !== '' && servicio !== '' && empresa !== '' && type !== '';
      setCompleteCampos(allComplete);
    }, [numero,servicio,empresa,type])
    
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
          console.log(newRegister)
          setNumero('')
          setEmpresa('')
          setServicio('')
          setType('')
          dispatch(startNewRegister(newRegister))
          // dispatch(starLoadingRecords())

        }else{
            const register = `PC${4500000000 + parseInt(numero)}`
            const newRegister = {register,numero,empresa,servicio,type}    
            setNumero('')
            setEmpresa('')
            setServicio('')
            setType('')
            console.log(newRegister)
            dispatch(startNewRegister(newRegister))
            // dispatch(starLoadingRecords())

        }
      }
    }
    useEffect(() => {
      dispatch(starLoadingContractor())
      dispatch(starLoadingRecords())
    }, [])
  return (
    <>
      <div className="w-full">
      <br />
      {/* {completeCampos === false && <p>Por favor, completa todos los campos.</p>} */}
      <p className="text-slate-700 px-10 text-2xl font-medium">DATOS DEL NUEVO REGISTRO</p>
        <form onSubmit={handleSend} className="flex flex-col px-10">
          <Grid container spacing={3}>
            <Grid item  xs={12} md={6}>
              <TextField
                id='numero'
                label='registro'
                type='Number'
                variant="standard"
                value={numero}
                onChange={(e)=>{
                  const inputNumber = e.target.value.slice(0, 6);
                  setNumero(inputNumber);
                }}
                inputProps={{ maxLength:6}}
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
                <MenuItem value='' disabled>
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
                <MenuItem value='' disabled>
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
                sx={{my:2, alignSelf:'flex-end'}}
                disabled={!completeCampos}

              >
                {activeEdit? 'Guardar' : 'Crear'}
              </Button>
            </div>
          {/* <button className="bg-green-400 rounded-xl  p-2 m-5" type="submit" onClick={handleSend}>{activeEdit? 'Guardar' : 'Crear'}</button> */}
        </form>
        <div className="text-center bg-[#235DDB] text-white py-3 mb-5 font-semibold ">LISTA DE CONTRATOS </div>

        <TableRegister/>
      </div>
    </>
  )
}
