import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoCloseSharp } from "react-icons/io5";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive rounded-tr-[40px] rounded-br-[40px] lg:rounded-none relative lg:ring-0 lg:shadow-2xl lg:shadow-zinc-950  w-[70%] lg:w-[16%] ring-1 shadow-xl shadow-slate-950  my-[4.0rem] lg:my-[0rem]": ""}>

        <div className='lg:hidden text-black p-1 absolute right-0 top-0 text-4xl rounded-tr-full ring-1 text-center bg-blue-500'>
            <span className='relative right-1 top-1' onClick={OpenSidebar}><IoCloseSharp/></span>
        </div>
        <div className='hidden lg:flex text-center my-4 justify-center font-extrabold text-4xl bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text'>
          <p className='text-center'>Dashboard</p>
        </div>

        <div className=' w-full h-auto my-14'>
          <div className='space-y-6 px-2'>
            <ul className='space-y-8 font-bold text-xl '>
              <li className='active:bg-orange-600 w-[90%] mx-auto py-2 rounded-md px-4 hover:bg-slate-950 duration-150 cursor-pointer hover:shadow-2xl hover:text-blue-700 hover:shadow-slate-800 hover:scale-[1.1]'>
                <NavLink>Trade</NavLink>
              </li>
              <li className='w-[90%] mx-auto py-2 rounded-md px-4 hover:bg-slate-950 duration-150 cursor-pointer hover:shadow-2xl hover:text-blue-700 hover:shadow-slate-800 hover:scale-[1.1]'>
                <NavLink>Buy Crypto</NavLink>
              </li>
              <li className='w-[90%] mx-auto py-2 rounded-md px-4 hover:bg-slate-950 duration-150 cursor-pointer hover:shadow-2xl hover:text-blue-700 hover:shadow-slate-800 hover:scale-[1.1]'>
                <NavLink>Markets</NavLink>
              </li>
              <li className='w-[90%] mx-auto py-2 rounded-md px-4 hover:bg-slate-950 duration-150 cursor-pointer hover:shadow-2xl hover:text-blue-700 hover:shadow-slate-800 hover:scale-[1.1]'>
                <NavLink>Chart</NavLink>
              </li>
              <li className='w-[90%] mx-auto py-2 rounded-md px-4 hover:bg-slate-950 duration-150 cursor-pointer hover:shadow-2xl hover:text-blue-700 hover:shadow-slate-800 hover:scale-[1.1]'>
                <NavLink>Fund History</NavLink>
              </li>
              <li className='w-[90%] mx-auto py-2 rounded-md px-4 hover:bg-slate-950 duration-150 cursor-pointer hover:shadow-2xl hover:text-blue-700 hover:shadow-slate-800 hover:scale-[1.1]'>
                <NavLink>Support</NavLink>
              </li>
              <li className='w-[90%] mx-auto py-2 rounded-md px-4 hover:bg-slate-950 duration-150 cursor-pointer hover:shadow-2xl hover:text-blue-700 hover:shadow-slate-800 hover:scale-[1.1]'>
                <NavLink>Trading Guidance</NavLink>
              </li>
            </ul>
          </div>
        </div>


    </aside>
  )
}

export default Sidebar