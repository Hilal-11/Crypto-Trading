import { useState } from 'react'
import '../App.css'
import HomeAdmin from './HomeAdmin'

function AdminPanel () {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
     
    return (
    <div className=''>
        <HomeAdmin />
    </div>
    )
}

export default AdminPanel;