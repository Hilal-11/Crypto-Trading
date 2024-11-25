import React from 'react'
import img1 from '../../Assets/m1.png'
import img2 from '../../Assets/m2.png'
import img3 from '../../Assets/m3.png'
import img4 from '../../Assets/m4.png'
import img5 from '../../Assets/m5.png'
import homePageImage from '../../Assets/HomePageImage.jpg'
import TechnicalAnalysisWidget from './TechnicalAnalysisWidget'
import Footer from './Footer'
import {useNavigate} from 'react-router-dom'



function Home() {
  

  const marketAppInfo = [ 
    {
      id : 1,
      heading : 'Real-Time Market Data',
      aboutHeading : 'Real-Time Market Data: Stay ahead with up-to-the-second updates on global stocks, cryptocurrencies, and forex markets, ensuring precise and informed trading decisions.',
      image : img1
    },
    {
      id : 2,
      heading : 'Intuitive Interface',
      aboutHeading : 'Whether you are a seasoned trader or a beginner, our user-friendly platform makes trading effortless.',
      image : img2
    },
    {
      id : 3,
      heading : 'Advanced Analytics',
      aboutHeading :'Leverage AI-powered tools and charts to analyze trends and maximize profits.',
      image : img3
    },
    {
      id : 4,
      heading : 'Secure Transactions',
      aboutHeading : 'Trade with peace of mind. Our platform uses top-tier encryption to safeguard your investments.',
      image : img4
    },
    {
      id : 5,
      heading : 'Expert Guidance',
      aboutHeading : 'Trade with peace of mind. Our platform uses top-tier encryption to safeguard your investments.',
      image : img5
    }
  ]


  const navigate = useNavigate('')

  return (
    <div className='px-3 lg:px-6'>
        <div className=' py-4 h-auto bg-[#010B13] lg:grid grid-cols-2 gap-10 lg:px-20 lg:my-12'>
          {/* Glowing Effects */}

            <span className=' animate-pulse absolute top-10 left-0 w-[50%] h-[30%] lg:left-20 lg:top-20 lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-[130px]'></span>
            {/* <span className=' animate-pulse absolute right-0 bottom-0 w-[50%] h-[30%] lg:right-20 lg:bottom-20 lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-r from-red-500 to-orange-500 blur-[140px]'></span> */}




            
          <div>
            <h1 className='text-4xl font-bold capitalize lg:text-6xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>
            Welcome to <span className='text-white text-5xl lg:text-7xl'>Crypto Trade</span> Unique Solution and innovative approach for trading
            </h1> <br /> <br />
            <p className='text-justify text-white font-medium my-5 lg:my-10'><span className=' font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-2xl'>Empower Your Trading Journey </span> <br /> <br />
            Dive into the world of trading with confidence and precision. <span className='font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-2xl'>Crypto Trade</span> is your ultimate partner for navigating the markets, offering cutting-edge tools and real-time insights to help you make smarter financial decisions.</p>

            <div className='space-y-5 grid grid-cols-1 gap-1 font-bold lg:grid-cols-2 lg:gap-10 lg:space-y-0 my-10'>
              <button onClick={() => { navigate('/AdminPanel') }} className='rounded-lg py-5 lg:py-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:scale-110 duration-500 hover:bg-slate-900'>Start Trading</button>
              <button onClick={() => { navigate('/AdminPanel') }} className='py-5 lg:py-6 bg-white rounded-lg border shadow-inner shadow-md shadow-black text-black hover:scale-110 duration-500 hover:bg-orange-600'>View Live Markets </button>
            </div>
          </div>
        <div className='my-10 flex justify-center'>
          <img src={homePageImage} alt="" />
        </div>


      </div>

        <div className=' my-16  '>
          <p className='text-center font-extrabold text-7xl text-orange-500'>Why Choose Us?</p>
        <div className=' my-10 mx-auto bg-slate-900 w-full h-auto rounded-2xl grid grid-cols-1 lg:grid-cols-3 gap-20  py-5 text-justify lg:p-10 text-white'>
         {
          marketAppInfo.map(dataItem => (
            <div key={dataItem.id} className='ring-1 shadow-2xl shadow-black py-4 px-3 rounded-2xl' >  
              <div><img className='rounded-xl' src={dataItem.image} alt="Error" /></div>
              <div className='my-6'>
                <h1 className='text-2xl font-bold text-blue-600 text-center'>{dataItem.heading}</h1>
                <p>{dataItem.aboutHeading}</p>
              </div>
            </div>
          ))
         }
        </div>

         <div>
            <TechnicalAnalysisWidget />
         </div>
        
        </div>

        
      </div>
  )
}

export default Home
