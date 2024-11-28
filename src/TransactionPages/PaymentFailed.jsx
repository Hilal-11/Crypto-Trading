import React from 'react'
import paymentFailedImage from '../Assets/PaymentFailed.png'
import { FaCoins } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'
function PaymentFailed() {
  const navigate = useNavigate('')
  return (
    <div className=' bg-slate-950 w-full h-svh -my-6'>
    <div className='py-10 px-6 w-full '>
      
      <div className='flex justify-center'>
        <FaCoins className='animate-bounce text-8xl z-10' />
      </div>

      <h1 className='my-2 text-center font-bold text-red-600 text-2xl'>Sell Trade Successfully!</h1>
      <div className='py-6 flex justify-center my-20'>
          <button className='bg-red-600 text-white font-bold py-3 rounded-full w-full'onClick={() => { navigate('/AdminPanel') }}>Back To Trade</button>
      </div>
      
    </div>
  </div>
  )
}

export default PaymentFailed
