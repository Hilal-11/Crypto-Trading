import React ,{useEffect} from 'react'
import dashBoardHeadingImage from '../Assets/coin.png'
import CoinsTable from './CoinsTable'
import MarketMegaChart from './MarketMegaChart'

function Home() {

  useEffect(() => {
    // Inject the TradingView widget script
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;

    // Widget configuration
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
        { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
        { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "compact",
      colorTheme: "dark",
      locale: "en",
    });

    // Append the script to the container
    const container = document.getElementById("tradingview-widget-container");
    container.appendChild(script);
  }, []);

   
  return (
    <main className='main-container bg-slate-950'>
        <div className='h-[600px] overflow-auto lg:h-auto lg:overflow-hidden grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-10 py-6'>
          <div className='ring-1 bg-slate-900 lg:col-span-4 rounded-md lg:rounded-xl flex gap-4 p-4 lg:p-10 flex-wrap lg:flex-nowrap'>
            <div className='relative'>
              <h1 className='text-2xl lg:text-5xl font-extrabold lg:px-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Buy & Sell 100+ coins instantly</h1>
                <p className='my-4 lg:px-20 text-slate-500 text-justify'>Seamlessly buy Bitcoin, Ethereum, and Binance Coin on our platform. Enjoy instant transactions, competitive rates, and complete security. Start building your portfolio today with our user-friendly interface designed for both beginners and experienced crypto traders</p>

                <div className='tradingview-widget-container absolute my-24' id="tradingview-widget-container">
                  <div className="tradingview-widget-container__widget">
                      
                  </div>
                </div>
            </div>
       
            <div className='my-40 lg:my-0'>
              <img className='my-10 w-screen h-[200px] lg:w-[700px] lg:h-[360px] ' src={dashBoardHeadingImage} alt="" />
            </div>
          </div>
          {/* <div className='ring-1 bg-slate-900 lg:row-span-2 rounded-md lg:rounded-xl'></div> */}
          
        
        </div>

        <div className=' px-2 py-6 grid grid-flow-col overflow-x-auto  lg:space-x-2'>
          <div className='w-[260px] lg:w-[320px] bg-slate-900 rounded-md lg:rounded-xl h-[160px] py-5 '>
            <h1 className=' text-3xl font-bold px-6 py-0  text-blue-700'>${localStorage.getItem('')}</h1>
            <h1 className=' font-bold text-lg px-6 text-blue-700'>Total Balance</h1>

          </div>
          <div className='w-[260px] lg:w-[320px] bg-slate-900 rounded-md lg:rounded-xl h-[160px] py-5 '>
            <h1 className=' text-3xl font-bold px-6 py-0  text-red-600'>$2,478.90</h1>
            <h1 className=' font-bold text-lg px-6 text-red-600'>Total Loss</h1>
          </div>
          <div className='w-[260px] lg:w-[320px] bg-slate-900 rounded-md lg:rounded-xl h-[160px] py-5 '>
            <h1 className=' text-3xl font-bold px-6 py-0 text-blue-700'>$2,478.90</h1>
            <h1 className=' font-bold text-lg px-6 text-blue-700'>Total Deposit</h1>
          </div>
          <div className='w-[260px] lg:w-[320px] bg-slate-900 rounded-md lg:rounded-xl h-[160px] py-5 '>
            <h1 className=' text-3xl font-bold px-6 py-0  text-orange-500'>$2,478.90</h1>
            <h1 className=' font-bold text-lg px-6 text-orange-500'>Rewards Earned</h1>
          </div>
        </div>

        <div className=' h-auto w-full bg-slate-900 rounded-2xl py-2 '>
            <MarketMegaChart/>
        </div>

        {/*    API DATA Rendering of COIN GECKO secession */}

        <div className='w-full h-auto bg-slate-900 my-10 rounded-xl'>
          <div>
            <CoinsTable/>
          </div>
        </div>
        


        
    </main>
  )
}

export default Home