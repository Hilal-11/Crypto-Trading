import React from 'react'
import PaymentSuccessImage from '../Assets/PaymentSuccess.png'
import { GoCheckCircle } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

function PaymentSuccess() {
    const navigate = useNavigate('')
  return (
    <div className=' bg-slate-950 w-svw h-svh -my-6'>
      <div className=' py-10 px-6 w-full '>
        <div className='flex justify-center'>
            <GoCheckCircle className=' animate-bounce text-8xl z-10'/>
        </div>
        <h1 className='my-2 text-center font-bold text-blue-600 text-2xl'>Trade Buy Successfully!</h1>
        <div className=' py-6 flex items-end my-20'>
            <button className=' bg-blue-600 text-white font-bold py-3 rounded-full w-full' onClick={ () => { navigate('/AdminPanel')}}>Back to Dashboard</button>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccess
