// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';
import { useNavigate } from 'react-router-dom'
function CoinsDetailsGraph() {


  const navigate = useNavigate('');

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
   <div className='relative z-50 py-6 -my-10 w-full h-svh bg-[#010B13]'>

        <div className="tradingview-widget-container" ref={container}>
          <div className="tradingview-widget-container__widget"></div>
    </div>

    <div className='px-2 grid grid-cols-2 justifyd-center w-full absolute bottom-10 gap-10 lg:gap-20'>
      <button onClick={ () => { navigate('/PaymentGatewayQR') } } className='py-4 lg:py-6 rounded-lg bg-red-600 font-bold text-2xl text-white '>Sell</button>
      <button onClick={ () => { navigate('/PaymentGatewayQR') } } className='py-4 lg:py-6 rounded-lg bg-teal-600 font-bold text-2xl text-white '>Buy</button>
    </div>
    </div>
  );
}

export default memo(CoinsDetailsGraph);