import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function CoinsTable() {
  const navigate = useNavigate('');
    const [coinsData , setCoinsData] = useState([])

    const fetchCoinsData = () => {
          axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=200&page=1&sparkline=false')
          .then(response => {
              setCoinsData(response.data)
          })
          .catch((err) => {
              console.log(err)
          })
        
    }

    useEffect(() => {
      fetchCoinsData();
    },[])



    const buyButtonHandler = (event) => {
        navigate('/PaymentGateway')
    }
        
  return (
    <div className='w-screen h-auto px-0'>
    <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
    <div className="px-0 mx-auto max-w-screen-3xl lg:px-12">
      <div className=" overflow-hidden shadow-md   sm:rounded-lg">
          <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
        </div>

          <div className="overflow-x-auto ">
              <table className="w-full text-sm text-left dark:text-black">
                  <thead className="text-md text-black font-bold uppercase bg-orange-500">
                      <tr>
                          <th scope="col" className="p-0">
                             
                          </th>
                          <th scope="col" className=" px-0 py-3">Name</th>
                          <th scope="col" className="px-4 py-3">Market CAP</th>
                          <th scope="col" className="px-10 py-3">FD Market CAP</th>
                          <th scope="col" className="px-10 py-3">Current Price</th>
                          <th scope="col" className="px-10 py-3">Total Volums</th>
                          <th scope="col" className="px-10 py-3">Total Supply</th>
                          <th scope="col" className="px-10 py-3">Maximum Supply</th>
                          <th scope="col" className="px-10 py-3">Circulating Supply</th>
                          <th scope="col" className="px-10 py-3">Last Update</th>
                          <th scope="col" className="px-10 py-3">High 24Hrs</th>
                          <th scope="col" className="px-10 py-3">Low 24Hrs</th>
                          <th scope="col" className="px-10 py-3">Change %</th>


                      </tr>
                  </thead>
                  <tbody>     
                    {
                      coinsData.map((coin) => (
                        <tr onClick={() => { navigate('/CoinsDetailsGraph')}}  key={coin.id} className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td className="w-4 px-4 py-3">
                              <div className="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                  <label className="sr-only">checkbox</label>
                              </div>
                          </td>
                          <th scope="row" className="flex items-center px-0 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <img src={coin.image} alt="iMac Front Image" className="w-auto h-8 mr-3"/>
                              {coin.id}
                          </th>
                          
                          
       
                          <td className="px-0 py-2">
                              <span className="bg-primary-100 lg:text-white text-black   font-medium px-0 py-0.5 rounded dark:bg-primary-900">{coin.market_cap}</span>
                          </td>
                          <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div className="flex items-center">
                                  <div className="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full"></div>
                                  {coin.fully_diluted_valuation}
                              </div>
                          </td>
                          <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{coin.current_price}</td>
                          <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{coin.total_volume}</td>

                          <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{coin.max_supply}</td>
                          <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{coin.current_price}</td>
                       
                          <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{coin.circulating_supply
                          }</td>

                          <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{coin.last_updated}</td>
                          
                          <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{coin.high_24h}</td>
                          <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{coin.low_24h}</td>
                          
                          <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{coin.atl_change_percentage}</td>
                      </tr>
                      ))
                    }
                  </tbody>
              </table>
          </div>
          <nav className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0" aria-label="Table navigation">
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Showing
                  <span className="font-semibold text-gray-900 dark:text-white">1-10</span>
                  of
                  <span className="font-semibold text-gray-900 dark:text-white">1000</span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                  <li>
                      <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                          <span className="sr-only">Previous</span>
                      </a>
                  </li>
                  <li>
                      <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                  </li>
                  <li>
                      <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                  </li>
                  <li>
                      <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                  </li>
                  <li>
                      <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                  </li>
                  <li>
                      <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                  </li>
                  <li>
                      <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                          <span className="sr-only">Next</span>
                      </a>
                  </li>
              </ul>
          </nav>
      </div>
  </div>
</section>
    </div>
  )
}

export default CoinsTable
