import { useState } from 'react'
import '../App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import HomeAdmin from './HomeAdmin'

function AdminPanel () {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
     
    return (
    <div className=''>
        {/* <Header OpenSidebar={OpenSidebar}/> */}
        {/* <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> */}
        <HomeAdmin />
    </div>
    )
}

export default AdminPanel;