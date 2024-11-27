import React from 'react'

function TradeSignal() {

  const date = new Date();
  const format = date.toDateString();
  // const year = date.getFullYear();
  // const month = date.getMonth();
  // const day = date.getDay();

  // console.log(data)
  // console.log(year)
  // console.log(month)
  // console.log(day)



  return (
    <div className=' w-full h-svh bg-transparent px-10'>
      <div className=''>

        <div className='py-6'>
          <p className=' font-bold text-xl text-white'>{date.toDateString()} Trading Signal</p> 
          <br />
          <p className='text-bold text-xl '>Product : BTC-BITCOIN</p>
          <p className='text-bold text-xl '>Direction : CALL</p>
          <p className='text-bold text-xl text-blue-600'>Valid Time : 8:30 to 9:30pm</p>
        </div>
        <div>
          <span className=' text-2xl font-bold'>Tip: </span> <p className='text-justify text-white font-medium py-4'>We providing trading tips and signals within your app, the sognal are valid for 60 minutes , you empower users with actionable insights that can guide their decision-making. Whether it’s through automated alerts, educational resources, or real-time market updates, your app can become an essential tool for both novice and experienced traders navigating the exciting yet volatile world of cryptocurrency trading.</p>
        </div>
      </div>

      <button className='py-4 rounded-md bg-slate-500 w-full my-10 text-black font-bold hover:bg-slate-800'><p>8:30 to 9:30pm {date.toDateString()}</p></button>
    </div>

  )
}

export default TradeSignal
