import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function FrontEndPaymentPage() {
    const [name , setName] = useState('');
    const [mobile , setMobile] = useState('');
    const [amount , setAmount] = useState('');

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const data =  {
            name,
            mobile,
            amount,
            MUID : 'MUIDW' + Date.now(),
            transactionId : 'Transaction' + Date.now(),
        };
        await axios.post("http://localhost:8000/order", data).then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error)
        })
        console.log(data)
        setName('')
        setMobile('')
        setAmount('')
    }
  return (
    <div className='w-full h-svh flex justify-center px-4'>
        <div className='rounded-xl p-10 space-y-4 w-[500px] h-[500px] px-4 bg-slate-900 shadow-md shadow-blue-500'>
            <form onSubmit={ handleSubmit }>
                <div className='space-y-2'>
                    <label className=' font-bold text-xl'>Name</label><br />
                    <input className='w-full py-4 px-2 rounded-md font-medium text-xl text-black'
                     type="name"
                     placeholder='Enter Name:- '
                     name='name'
                     value={name}
                     required
                     onChange={(event) => { setName(event.target.value)}}

                    />
                </div>
                <div className='space-y-2'>
                    <label className='font-bold text-xl'>Mobile</label><br />
                    <input className='w-full py-4 px-2 rounded-md font-medium text-xl text-black' 
                    type="number"
                    placeholder='Enter Your Mobile Number :- '
                    name='number'
                    value={mobile}
                    required
                    onChange={(event) => { setMobile(event.target.value)}}

                    />
                </div>
                <div className='space-y-2'>
                    <label className='font-bold text-xl'>Amount</label><br />
                    <input className='w-full py-4 px-2 rounded-md font-medium text-xl text-black' 
                    type="number" 
                    placeholder='$ 0.00' 
                    name='amount'
                    value={amount}
                    required
                    onChange={(event) => {setAmount(event.target.value)}}
                    />
                </div>

                <div className=' my-10 text-center'>
                    <button 
                    type='submit'
                    className='bg-white px-10 py-2 rounded-xl font-bold text-black'>
                        Pay Now
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default FrontEndPaymentPage
