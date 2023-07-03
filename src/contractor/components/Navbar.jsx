import NotificationsIcon from '@mui/icons-material/Notifications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Button } from '@mui/material';
export const Navbar = () => {
  return (
    <>
        <div className='flex flex-row-reverse px-10 pt-5 gap-5'>
            <button>
                <ExitToAppIcon fontSize="medium" color='error'/>
            </button>
            <button>
                <NotificationsIcon fontSize="medium" color='info'/>
            </button>
        </div>
    </>
  )
}
