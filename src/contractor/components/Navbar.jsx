import { Link } from "react-router-dom"
import GiteIcon from '@mui/icons-material/Gite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';
export const Navbar = () => {
  return (
    <div className="flex flex-col justify-between gap-5 text-white text-sm">
        <div className="flex flex-col align-middle w-full ">
            <div className="p-5 flex items-center bg-blue-600 text-sm">
                <AccountCircleIcon fontSize="large"/>
                <p className="uppercase ml-3"> Jhon Corporaciones Quenta</p>
            </div>
            <Link className="hover:bg-opacity-50 p-5 w-full hover:bg-slate-600" to="/nuevo-contratista"><GiteIcon/> contratistas</Link>
            <Link className="hover:bg-opacity-70 p-5 w-full hover:bg-slate-600" to="/nuevo-contrato"><NoteAddIcon/> nuevo contrato</Link>
            <Link className="hover:bg-opacity-70 p-5 w-full hover:bg-slate-600" to="/pedido-compra ">  <LocalMallIcon/> pedido compra</Link>
            <Link className="hover:bg-opacity-70 p-5 w-full hover:bg-slate-600" to="/busqueda "> <SearchIcon/>BUSCADOR</Link>
        </div>
    </div>
  )
}
