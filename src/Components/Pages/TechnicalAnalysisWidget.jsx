import React from 'react'
import { useState , useEffect , useRef } from 'react';
function TechnicalAnalysisWidget() {

    const widgetContainerRef = useRef(null);

    // Function to load the TradingView script
    const loadTradingViewScript = () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        interval: "1m",
        width: "100%",
        isTransparent: false,
        height: 450,
        symbol: "BITSTAMP:BTCUSD",
        showIntervalTabs: true,
        displayMode: "single",
        locale: "en",
        colorTheme: "dark"
      });
  
      // Append the script to the DOM
      widgetContainerRef.current.appendChild(script);
    };
  
    // Load the script when the component is mounted
    React.useEffect(() => {
      loadTradingViewScript();
    }, []);


      
  return (
    
    <div className='h-auto border my-10 mx-auto bg-slate-900 w-full  rounded-2xl grid grid-cols-1 lg:grid-cols-1 gap-20 px-4 py-5 text-justify lg:p-10 text-white'>
          <h1 className='text-center font-extrabold text-4xl lg:text-7xl text-orange-500'>Unlock the Secrets of Crypto Markets with Technical Analysis</h1>
          <p className='text-xl text-justify lg:text-center font-medium lg:px-20'>Analyze price movements, spot emerging trends, and make confident trading decisions using our powerful technical analysis tools. Utilize indicators tailored for crypto markets, such as On-Balance Volume (OBV), Relative Strength Index (RSI), and Moving Averages ,Access interactive, real-time charts with the ability to customize timeframes, add trendlines, and overlay key technical patterns. Gauge the mood of the market with sentiment indicators that analyze trading volumes and crypto news trends. Explore beginner-friendly guides to understand key concepts like candlestick patterns, Fibonacci retracements, and oscillators</p>

          <div className="tradingview-widget-container" ref={widgetContainerRef}>
            <div className="tradingview-widget-container__widget"></div>
      
         </div>

    </div>

    
  )
}

export default TechnicalAnalysisWidget
