import React from 'react'
import { useNavigate ,Navigate } from 'react-router-dom'

function Deposit() {

    const navigate = useNavigate('')

  return (
    <div className='w-full h-svh bg-transparent'>
        <div>
            <p className='text-center text-2xl font-bold text-white'>Deposit</p>
        </div>
        <div className='grid grid-cols-2 gap-4 justify-center my-10 px-6 '>
        <div className='text-center bg-slate-800 px-10 py-3 rounded-lg font-bold text-white'>
            <p>6000</p>
        </div>
        <div className='text-center bg-slate-800 px-10 py-3 rounded-lg font-bold text-white'>
            <p>10000</p>
        </div>
        <div className='text-center bg-slate-800 px-10 py-3 rounded-lg font-bold text-white'>
            <p>15000</p>
        </div>
        <div className='text-center bg-slate-800 px-10 py-3 rounded-lg font-bold text-white'>
            <p>20000</p>
        </div>
        <div className='text-center bg-slate-800 px-10 py-3 rounded-lg font-bold text-white'>
            <p>25000</p>
        </div>
        <div className='text-center bg-slate-800 px-10 py-3 rounded-lg font-bold text-white'>
            <p>30000</p>
        </div>

        </div>

        <div className='my-10  w-full px-10'>
            <p className='text-xl font-bold text-white'>Deposit Amount</p>

            <div className='grid grid-cols-1 gap-10 my-6'>
                <div className='w-full'>
                    <input className='px-2 w-full py-3 rounded-sm' type="number" placeholder='Enter Amount'/>
                </div>
                <div className='w-full '>
                    <button onClick={() => {navigate('/PaymentGatewayQR')}} className='w-full bg-blue-500 text-white font-bold py-3 rounded-sm'>Continue</button>
                </div>
            </div>
        </div>
  </div>
  )
}

export default Deposit
