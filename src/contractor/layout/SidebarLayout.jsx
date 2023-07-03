import sc from '../../assets/img/sc.png'
import { Grid } from "@mui/material"
import { Sidebar } from "../components/"

 
export const SidebarLayout = () => {
  return (
    <>
       <Grid 
        container
        spacing={0}
        alignItems="start"
        justifyContent='flex-start'
        sx={{height: '100vh', width:'250px'}}
        >
            <div className='relative h-full w-full'>
                <div className='absolute top-0 left-0 bg-red-400 w-full h-full border  bg-cover bg-center' style={{backgroundImage: `url(${sc})`}}>
                </div>
                <div className='z-30 opacity-70 h-full w-full bg-slate-800 '>
                </div>
                <div className='absolute top-0 left-0  h-full w-full z-30'>
                    <Sidebar/>
                </div>
            </div>
        </Grid> 
    </>

  )
}
