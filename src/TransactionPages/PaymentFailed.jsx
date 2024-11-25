import React from 'react'
import paymentFailedImage from '../Assets/PaymentFailed.png'
import { FcDisapprove } from "react-icons/fc";
function PaymentFailed() {
  return (
    <div className=' bg-slate-950 w-full h-svh -my-6'>
    <div className='bg-white py-6 rounded-bl-[60px] rounded-br-[60px]'>
      <img className='w-full -my-8' src={paymentFailedImage} alt="Error" />
    </div>

    <div className='py-10 px-6 w-full '>
      
      <div className='flex justify-center'>
        <FcDisapprove className='animate-bounce text-5xl z-10' />
      </div>

      <h1 className='my-2 text-center font-bold text-red-600 text-2xl'>Payment Failed!</h1>
      <p className='text-center font-medium px-8 text-red-800'>Something went wrong we could't process your payment. please try again or contect our support</p>
      <div className='py-6 flex justify-center'>
          <button className='bg-red-600 text-white font-bold py-3 rounded-full w-full'>Retry Payment</button>
      </div>
      <div>
        <button></button>
        <button></button>
        <button></button>
      </div>
      
    </div>
  </div>
  )
}

export default PaymentFailed
