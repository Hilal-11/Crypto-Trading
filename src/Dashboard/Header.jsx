import React from 'react'
import { useNavigate } from 'react-router-dom';
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
 import { CgMenuGridO } from "react-icons/cg";


function Header({OpenSidebar}) {

  const navigate = useNavigate('')

  return (
    <header className='header bg-blue-600 text-white h-[60px] lg:h-[80px]'>
        <div className='menu-icon'>
            <CgMenuGridO className='icon text-3xl relative -left-10' onClick={OpenSidebar}/>
        </div>
        <div className='header-right flex w-full justify-between'>
            <p onClick={() => {navigate('/')}} className=' font-bold text-xl'>CRYPTO TRADE</p>
            <BsPersonCircle className='icon text-2xl'/>
        </div>
    </header>
  )
}

export default Header