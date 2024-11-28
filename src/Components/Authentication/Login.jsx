import React, { useEffect, useState } from 'react'
import  Login3d2  from '../../Assets/coin.png'
import { Navigate } from 'react-router-dom'
import './Login.css'
function Login() {

    // const [isLoginSuccess , setIsLoginSuccess] = useState(true);

    const [isLoged , setIsLoged] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailHandler = (event) => {
        setEmail(event.target.value)
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }

    localStorage.setItem('loginEmail' , email);
    localStorage.setItem('loginPassword' , password);

    const submitFormHandler = (e) => {
        e.preventDefault();
        setIsLoged(true);
        const loginData = {
            email: email,
            password: password,
            bonus: 320,
        }
        setEmail('')
        setPassword(''); 
    }


    // if(localStorage.getItem('signUpEmail') === localStorage.getItem('loginEmail')  && localStorage.getItem('signUpPassword') === localStorage.getItem('loginPassword')) {
    //     setIsLoginSuccess(true)
    // }else{
    //     setIsLoginSuccess(false)
    // }


    if(isLoged) {
        return <Navigate to="/AdminPanel"/>
    }else{
    }


  return (
    <div className=' flex-col w-full h-svh -my-5 px-4' >
        <div className=' my-20 lg:w-[80%] rounded-t-xl mx-auto grid grid-cols-1 justify-between items-start w-full ring-0  rounded-lg lg:grid lg:grid-cols-2 lg:justify-center lg:gap-20 space-y-10'>
            <div className='lg:order-1 lg:py-20'>
                <img className='rounded-t-xl h-[auto]' src={Login3d2} alt="error"  />
            </div>
            <div className=' bg-slate-950  ring-1 lg:w-[500px] lg:h-[500px] px-4 rounded-lg py-10 shadow-2xl shadow-blue-500'>
                <span className='hidden lg:block animate-spin rounded-full absolute -left-16 -top-12 -z-50   w-[620px] h-[620px] bg-transparent border-[20px]  border-t-purple-600 border-b-orange-600 border-l-blue-600 border-r-violet-800-600'></span>
                <div>
                    <h1 className=' text-center py-3 text-white font-bold text-2xl'>Login Here</h1>
                </div>
                <div className=''>
                    <form onSubmit={ submitFormHandler } className=' space-y-6'>
                        <div>
                            <input className=' w-full h-14 rounded-md px-2' 
                            type="text" 
                            name='email'
                            placeholder='Enter Email :- '
                            value={email}
                            onChange={ emailHandler }
                            required />
                        </div><br />
                        <div>
                            <input className=' w-full h-14 rounded-md px-2' 
                            name='password'
                            id="password"
                            type="passsword" 
                            value={password}
                            placeholder='••••••••'
                            onChange={ passwordHandler }
                            required />
                        </div>
                        <div className='flex justify-center text-white'>
                            <button className='bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-md w-full py-4 font-bold text-lg my-6'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>



        </div>
        <br />
    </div>
  )
}

export default Login
