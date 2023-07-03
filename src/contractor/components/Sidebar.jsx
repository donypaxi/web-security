import { Link } from "react-router-dom"
import GiteIcon from '@mui/icons-material/Gite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';

export const Sidebar = () => {

    const links = [
        {enlace:'nuevo-contratista',icon:<GiteIcon/>, msg:'Nuevo Contratista'},
        {enlace:'nuevo-contrato',icon:<NoteAddIcon/>, msg:'Nuevo Contrato'},
        {enlace:'pedido-compra',icon:<LocalMallIcon/>, msg:'Pedido Compra'},
        {enlace:'busqueda',icon:<SearchIcon/>, msg:'Buscador'},
    ]

  return (
    <div className="flex flex-col justify-between gap-5 text-white text-sm">
        <div className="flex flex-col align-center  w-full ">
            <div className="p-5 flex items-center bg-blue-600 text-sm">
                <AccountCircleIcon fontSize="large"/>
                <Link to="/" className="uppercase ml-3"> Jhon Corporaciones Quenta</Link>
            </div>
            {links.map((link,i) => (
                <Link key={i} className="flex items-center gap-3 hover:bg-opacity-50 p-5 w-full duration-200 hover:bg-slate-600 " to={`/${link.enlace}`}>{link.icon} {link.msg}</Link>
                ))}
        </div>
    </div>
  )
}
