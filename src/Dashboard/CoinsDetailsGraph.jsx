// TradingViewWidget.jsx
import React, { useEffect, useRef, memo, useState } from 'react';
import { useNavigate } from 'react-router-dom'
function CoinsDetailsGraph() {


  const navigate = useNavigate('');


    // Generating a randeom values
    // Generating a randeom values

  const[prize , setPrize] = useState(0);
  const[volume , setVolume] = useState(0);
  const[high , setHigh] = useState(0);
  const[low , setLow] = useState(0);

  const generateRandomValues = () =>  {
    setPrize(Math.floor(Math.random() * 100))
    setVolume(Math.floor(Math.random() * 100))
    setHigh(Math.floor(Math.random() * 100))
    setLow(Math.floor(Math.random() * 100))
  }
  useEffect(() => {
    generateRandomValues();
  },[])


  const container = useRef();
  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    },
    []
  );
  return (
   <div className=' z-50 py-6 -my-10 w-svw lg:h-svh h-[500px]  px-2'>

        <div className="tradingview-widget-container" ref={container}>
          <div className="tradingview-widget-container__widget"></div>
    </div>


    <div className='grid grid-cols-2 gap-4  justify-center my-10'>
      <div className='text-center  bg-slate-800 py-2 rounded-lg flex justify-start gap-6 lg:gap-16 px-2'>
        <p className='bg-slate-300 px-6 font-bold text-black py-1 rounded-md'>Prize</p>
        <h1 className='font-bold text-orange-600 text-lg'>{prize}</h1>
      </div>
      <div className='text-center  bg-slate-800 py-2 rounded-lg flex justify-start gap-6 lg:gap-16 px-2'>
        <p className='bg-slate-300 px-6 font-bold text-black py-1 rounded-md'>Vol</p>
        <h1 className='font-bold text-orange-600 text-lg'>{volume}</h1>
      </div>
      <div className='text-center  bg-slate-800 py-2 rounded-lg flex justify-start gap-6 lg:gap-16 px-2'>
        <p className='bg-slate-300 px-6 font-bold text-black py-1 rounded-md'>High</p>
        <h1 className='font-bold text-orange-600 text-lg'>{high}</h1>
      </div>
      <div className='text-center  bg-slate-800 py-2 rounded-lg flex justify-start gap-6 lg:gap-16 px-2'>
        <p className='bg-slate-300 px-6 font-bold text-black py-1 rounded-md'>Low</p>
        <h1 className='font-bold text-orange-600 text-lg'>{low}</h1>
      </div>
    </div>

    <div className='my-2 px-2 grid grid-cols-2 justifyd-center w-full  bottom-10 gap-4 lg:gap-20'>
      <button className='py-2 lg:py-6 rounded-lg bg-blue-600 font-bold text-xl text-white '>BUY</button>
      <button className='py-2 lg:py-6 rounded-lg  bg-red-600 font-bold text-xl text-white '>SELL</button>
    </div>
    <br />
    </div>
  );
}

export default memo(CoinsDetailsGraph);