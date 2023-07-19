import { Button, Grid, MenuItem, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";
import { starSaveEmployee } from "../../store/contractor/thunks";
import { useDispatch, useSelector } from "react-redux";

export const FormularioPersonal = () => {

    const {idRegister}=useSelector(state=> state.contractor)
    const dispatch =useDispatch()

    const {formState,onResetForm, onInputChange,apPaterno,apMaterno,nombres,emo,sctrp,sctrs,iperc,capacit,epp,ropa,dni,foto} = useForm({apPaterno:'',apMaterno:'',nombres:'', emo:'',sctrp:'',sctrs:'',iperc:'',capacit:'',epp:'',ropa:'',dni:'',foto:''})
  
   
    const [completeCampos, setCompleteCampos] = useState(true)

    const handleSend = (e) => {
        e.preventDefault()
        formState.id=idRegister
        dispatch(starSaveEmployee(formState))
        onResetForm()
    }
    // useEffect(() => {
    //   const allComplete = apPaterno !=='' && apMaterno !=='' && nombres !=='' && emo!=='' && sctrp!=='' && sctrs!=='' && iperc!=='' && capacit!=='' && epp!=='' && ropa!=='' && dni!=='' && foto!==''
    //   setCompleteCampos(allComplete);
    // }, [apPaterno,apMaterno,nombres,emo,sctrp,sctrs,iperc,capacit,epp,ropa,dni,foto])
    



  return (
    <>
        <form onSubmit={handleSend} className="px-10 flex flex-col">
            <Grid container spacing={2}  >
              <Grid item xs={12} md={6} >
                <TextField
                id="apPaterno"
                label="Apellido Paterno"
                type="text"
                name="apPaterno"
                variant="standard"
                value={apPaterno}
                onChange={onInputChange}
                fullWidth
                >
                </TextField>
              </Grid >
              <Grid item xs={12} md={6}>
                <TextField
                id="apMaterno"
                name="apMaterno"
                label="Apellido Materno"
                type="text"
                variant="standard"
                value={apMaterno}
                onChange={onInputChange}
                fullWidth
                
                >
                </TextField>
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                id="nombres"
                label="Nombres"
                type="text"
                variant="standard"
                name="nombres"
                value={nombres}
                onChange={onInputChange}
                fullWidth
                >
                </TextField>
              </Grid>              
              <Grid item xs={12} sm={6} md={3} lg={2}>
                  <TextField
                    id='emo'
                    select
                    type="text"
                    label='EMO'
                    name="emo"
                    value={emo}
                    fullWidth
                    // sx={{ width: '110px' }}
                    onChange={onInputChange}
                  >
                    <MenuItem value="P">P</MenuItem>
                    <MenuItem value="R">R</MenuItem>
                    <MenuItem value="F">F</MenuItem>
                  </TextField>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={2}>
                <TextField
                  id='sctrp'
                  select
                  type="text"
                  label='SCTRP'
                  name="sctrp"
                  value={sctrp}
                  fullWidth
                  onChange={onInputChange}
                >
                  <MenuItem value="P">P</MenuItem>
                  <MenuItem value="R">R</MenuItem>
                  <MenuItem value="F">F</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={2}>
                <TextField
                  id='sctrs'
                  select
                  type="text"
                  label='SCTRS'
                  name="sctrs"
                  value={sctrs}
                  fullWidth
                  onChange={onInputChange}
                >
                  <MenuItem value="P">P</MenuItem>
                  <MenuItem value="R">R</MenuItem>
                  <MenuItem value="F">F</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={2}>
                <TextField
                  id='iperc'
                  select
                  type="text"
                  label='IPERC'
                  name="iperc"
                  value={iperc}
                  fullWidth
                  onChange={onInputChange}
                >
                  <MenuItem value="P">P</MenuItem>
                  <MenuItem value="R">R</MenuItem>
                  <MenuItem value="F">F</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={2}>
                <TextField
                  id='capacit'
                  select
                  type="text"
                  label='CAPACIT'
                  name="capacit"
                  value={capacit}
                  fullWidth
                  onChange={onInputChange}
                >
                  <MenuItem value="P">P</MenuItem>
                  <MenuItem value="R">R</MenuItem>
                  <MenuItem value="F">F</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={2}>
                <TextField
                  id='epp'
                  select
                  type="text"
                  label='EPP'
                  name="epp"
                  value={epp}
                  fullWidth
                  onChange={onInputChange}
                >
                  <MenuItem value="P">P</MenuItem>
                  <MenuItem value="R">R</MenuItem>
                  <MenuItem value="F">F</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={2}>
                <TextField
                  id='ropa'
                  select
                  type="text"
                  label='ROPA'
                  name="ropa"
                  value={ropa}
                  fullWidth
                  onChange={onInputChange}
                >
                  <MenuItem value="P">P</MenuItem>
                  <MenuItem value="R">R</MenuItem>
                  <MenuItem value="F">F</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={2}>
                <TextField
                  id='dni'
                  select
                  type="text"
                  label='DNI'
                  name="dni"
                  value={dni}
                  fullWidth
                  onChange={onInputChange}
                >
                  <MenuItem value="P">P</MenuItem>
                  <MenuItem value="R">R</MenuItem>
                  <MenuItem value="F">F</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={2}>
                <TextField
                  id='foto'
                  select
                  type="text"
                  label='FOTO'
                  name="foto"
                  value={foto}
                  fullWidth
                  onChange={onInputChange}
                >
                  <MenuItem value="P">P</MenuItem>
                  <MenuItem value="R">R</MenuItem>
                  <MenuItem value="F">F</MenuItem>
                </TextField>
              </Grid>
            </Grid>

            <div className="flex justify-end gap-5">
              <Button
                variant="contained"
                color="error"
                onClick={onResetForm}
                // sx={{my:2, alignSelf:'flex-end'}}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="success"
                disabled={!completeCampos}
                // sx={{
                //   my:2, alignSelf:'flex-end'}}
              >
                Guardar
              </Button>
            </div>
          </form>
    </>
  )
}
