import React ,{useEffect, useState} from 'react'
import dashBoardHeadingImage from '../Assets/coin.png'
import CoinsTable from './CoinsTable'
import MarketMegaChart from './MarketMegaChart'
import { useNavigate } from 'react-router-dom'
import { PiCurrencyInrBold } from "react-icons/pi";
import { FaShareAlt } from "react-icons/fa";
function Home() {
  const navigate = useNavigate('')

  const [balance , setBalance] = useState(320);
  const incrementalStep = Math.floor(Math.random() * 200);
  useEffect(() => {
      setInterval(() => {
          setBalance((prev) => prev + incrementalStep)
      },86400000)
  },[incrementalStep])
  localStorage.setItem('bonusValue' , balance);

  const [reward , setReward] = useState(0)
  const [appURL , setAppUrl] = useState('')
  const rewaredHandler = () => {
      setReward((prev) => prev += 88)
      setAppUrl(window.location.origin)
      alert(`Copy This url and share to get reward : ${appURL}`)
  }
  console.log(appURL);
  localStorage.setItem('reward' , reward);

  const Totalbalance = localStorage.getItem('bonusValue');
  const tradeValue = localStorage.getItem('tradePrize')

  return (
    <main className=' bg-transparent px-2 '>
          <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-20'>
            <div className='my-0 lg:my-0 lg:order-2'>
              <img className='my-10 w-screen h-[200px] lg:w-[700px] lg:h-[360px] ' src={dashBoardHeadingImage} alt="" />
            </div>
              <div className='border w-full lg:w-full h-[200px]  lg:h-[300px] bg-green-100 rounded-md lg:rounded-xl py-5 '>
                <div className=' flex justify-center'>
                <PiCurrencyInrBold className='text-blue-700 text-2xl text-center relative top-1 left-6'/>
                <p className=' text-3xl font-bold px-6 py-0  text-blue-700 text-center '>{Number(Totalbalance) + Number(tradeValue)}</p>
                </div>
                <h1 className=' font-bold text-lg px-6 text-blue-700 text-center'>Total Balance</h1>
                {/* <button onClick={ increaseBalanceHandler }>Increase Balance</button> */}
                <div className='px-6 text-sm font-medium py-1 text-black'>
                  <p>Your balance must be greater than<span className='font-bold text-blue-600'> 6,000 </span>to withdraw funds. Please ensure your account meets this requirement before initiating a withdrawal</p>
                </div>
              </div>
          </div>

        <div className=' grid grid-cols-2 py-10 gap-6 lg:gap-40   text-black'>
            <button  onClick={ () => { navigate('/PaymentGatewayQR') } } className='rounded-full bg-blue-600 py-3 lg:py-8 font-bold '>Invest</button>
            <button  onClick={ () => { navigate('/TradeSignal') } } className='rounded-full bg-green-700 py-3 lg:py-8 font-bold '>Trade Tip</button>
        </div>

        <div className='grid grid-flow-col overflow-x-auto gap-10'>
          <div className='w-[260px] lg:w-full bg-slate-900 rounded-md lg:rounded-xl h-[160px] py-5 '>
            <h1 className=' text-3xl font-bold px-6 py-0  text-red-600'>{localStorage.getItem('low')}</h1>
            <h1 className=' font-bold text-lg px-6 text-red-600'>Total Loss</h1>
          </div>
          <div className='w-[260px] lg:w-full bg-slate-900 rounded-md lg:rounded-xl h-[160px] py-5 '>
            <h1 className=' text-3xl font-bold px-6 py-0 text-blue-700'>0</h1>
            <h1 className=' font-bold text-lg px-6 text-blue-700'>Total Deposit</h1>
          </div> 
          <div className='w-[260px] lg:w-full bg-slate-900 rounded-md lg:rounded-xl h-[160px] py-5 '>
            <h1 className=' text-3xl font-bold px-6 py-0  text-orange-500'>{reward}</h1>
            <h1 className=' font-bold text-lg px-6 text-orange-500'>Rewards Earned</h1>
            <div className='flex justify-center py-4'>
            <p onClick={ rewaredHandler } className='text-center font-bold border px-2 py-2 rounded-xl text-orange-700 hover:bg-blue-700 hover:text-white duration-150'>Share to get Reward's<span className='relative top-1 px-2 text-2xl inline-block text-center'><FaShareAlt/></span></p>
            
            </div>
          </div>
          
        </div>

        <div className='my-20 h-auto w-full bg-slate-900 rounded-2xl py-2 '>
            <MarketMegaChart/>
        </div>

        {/*    API DATA Rendering of COIN GECKO secession */}

        <div className='w-full h-auto bg-slate-900 my-10 rounded-xl'>
            <CoinsTable/>
        </div>
        
    </main>
  )
}

export default Home