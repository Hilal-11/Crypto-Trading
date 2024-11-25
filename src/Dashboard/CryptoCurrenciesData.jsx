import React ,{ useEffect } from 'react'
const CryptoCurrenciesData = () => { 
    useEffect(() => {
        // Dynamically load the TradingView script
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
        script.async = true;
    
        // Widget configuration as a string
        script.innerHTML = JSON.stringify({
          width: "100%",
          height: "1024px", // Adjust height here
          defaultColumn: "moving_averages",
          screener_type: "crypto_mkt",
          displayCurrency: "USD",
          colorTheme: "dark",
          locale: "en",
        });
    
        // Append script to widget container
        document.querySelector(".tradingview-widget-container__widget").appendChild(script);
    
        return () => {
          // Cleanup script on component unmount
          const widgetContainer = document.querySelector(".tradingview-widget-container__widget");
          if (widgetContainer) widgetContainer.innerHTML = "";
        };
      }, []);
    
    
      return (

    <div className="tradingview-widget-container" style={{ height: "800px", width: "100%" }}>
      <div className="tradingview-widget-container__widget"></div>

    </div>
      
      );
    };

export default CryptoCurrenciesData
