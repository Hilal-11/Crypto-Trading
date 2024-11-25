import React from 'react'
import PaymentSuccessImage from '../Assets/PaymentSuccess.png'
import { FcApproval } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

function PaymentSuccess() {
    const navigate = useNavigate('')
  return (
    <div className=' bg-slate-950 w-svw h-svh -my-6'>
      <div className='bg-white py-6 rounded-bl-[60px] rounded-br-[60px]'>
        <img className='w-full -my-6' src={PaymentSuccessImage} alt="Error" />
      </div>

      <div className=' py-10 px-6 w-full '>
        <div className='flex justify-center'>
            <FcApproval className=' animate-bounce text-5xl z-10'/>
        </div>
        <h1 className='my-2 text-center font-bold text-blue-600 text-2xl'>Payment Successful!</h1>
        <p className=' text-center font-medium px-8 text-blue-800'>We are recived your valuable payment</p>
        <div className=' py-6 flex justify-center'>
            <button className=' bg-blue-600 text-white font-bold py-3 rounded-full w-full' onClick={ () => { navigate('/')}}>Back to home</button>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccess
