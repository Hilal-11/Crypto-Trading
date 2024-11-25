import { useState } from 'react'
import '../App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import HomeAdmin from './HomeAdmin'

function AdminPanel (props) {
  console.log("Admin Panel Data = ",props.data.email);
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
     
    return (
    <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <HomeAdmin />
    </div>
    )
}

export default AdminPanel;