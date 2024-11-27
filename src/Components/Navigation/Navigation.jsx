import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import {NavLink , Link} from 'react-router-dom'
import { clsx } from 'clsx';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/bullLogo2.png'
function Navigation() {



    const [isSideBar , SetSideBar] = useState(false);
    function menuBarHandler () {
        SetSideBar(true);
    }

    const [isMenuBar , setIsMenuBar] = useState(false);

    function handleIsMenuBar () {
        setIsMenuBar(!isMenuBar);

    }



    const navigate = useNavigate('');

    const navLinksScreen = [ 
        {
            id : 2,
            label : "Dashboard",
            to : "AdminPanel"

        },

        {
            id : 4,
            label : "Signal",
            to : "TradeSignal"

        },
        {
            id : 4,
            label : "Guidence",
            to : "/Home"

        },
        {
            id : 6,
            label : "Deposit",
            to : "/Deposit"

        },
        {
            id : 7,
            label : "Withdraw",
            to : "/PaymentGatewayQR"

        }
      
    ];
    const navLinksMobile = [ 
        {
            id : 1,
            label : "Dashboard",
            to : "AdminPanel"
        },

        {
            id : 4,
            label : "Signal",
            to : "TradeSignal"

        },
        {
            id : 5,
            label : "Guidence",
            to : "/Home"

        },
        {
            id : 6,
            label : "Deposit",
            to : "/Deposit"

        },
        {
            id : 7,
            label : "Withdraw",
            to : "/PaymentGatewayQR"

        }
    ]
  return (
    <div>
        <nav className=' relative border-b border-slate-700 z-50 flex justify-between px-4 items-center py-6 bg-[#010B13] text-white '>
            
                  <div className=' relative flex gap-10 justify-between w-[80%] lg:mx-auto'>
                    <div className=' w-full'>
                       <img onClick={ () => { navigate('/') } } src={logo} alt="" className='w-[130px] h-[110px] lg:w-[150px] absolute -top-12 left-0 lg:h-[120px] lg:-top-10' />
                    </div>
                    <div className='hidden lg:flex'>
                        <GiHamburgerMenu className='text-3xl' onClick={ handleIsMenuBar }/>
                    </div>
                    {/* Big screens menu bar secession */}
                    {
                        isMenuBar ? (
                            <div className={'z-50 px-2 lg: w-[300px] h-auto rounded-lg bg-slate-800 absolute right-10 top-[5.3rem] shadow-xl shadow-slate-900'}>
                                {
                                    navLinksScreen.map((link) => (
                                        <li onClick={ ()=> {setIsMenuBar(false)}} key={link.id} className='font-sans font-bold text-xl list-none gap-10 py-3 hover:bg-blue-500 hover:ring-1 hover:shadow-sm rounded-sm px-2 cursor-pointer'>
                                            <span></span><NavLink to={link.to}>{link.label}</NavLink>
                                        </li>
                                    ))
                                }
                               
                            </div>
                         ) : ""
                    }
                  </div>
        
                    {/* Side bar section */}
                    <div className={clsx(
                        "absolute h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full",
                        isSideBar && "translate-x-0"
                    )}
                    >
                            {/* inside section */}
                            <section className='z-40 bg-white h-screen w-[80%] flex-col absolute top-0 left-0 p-6 gap-10 text-black rounded-tl-lg rounded-bl-lg'>
                                    <div className=' flex justify-end' >
                                        <IoCloseSharp className='text-4xl cursor-pointer' onClick={() => {SetSideBar(false)}} />
                                    </div><hr className='bg-black w-screen my-2 relative -left-6  shadow-sm shadow-stone-200' />
                                    <div>
                                        <div className='py-2 px-0 text-black flex-col gap-40 '>
                                            {
                                                navLinksMobile.map((link) => (
                                                    <li onClick={ ()=> {SetSideBar(false)}} key={link.id} className='font-sans font-bold text-xl list-none gap-10 py-3 hover:bg-slate-100 hover:ring-1 hover:shadow-sm rounded-sm px-2 '>
                                                        <NavLink to={link.to}>{link.label}</NavLink>
                                                    </li>
                                                ))
                                            }
                                        </div>
                                    </div>
                            </section>  
                    </div>
                    <div className=''>
                        <GiHamburgerMenu className=' text-3xl lg:hidden' onClick={ menuBarHandler } />
                    </div>   
        </nav>
    </div>
  )
}
export default Navigation
