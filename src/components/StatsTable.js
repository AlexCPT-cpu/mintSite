import React from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import { StatsRow } from './StatsRow'

const StatsTable = () => {
  return (
    <div className="overflow-x-auto relative shadow-md rounded-lg m-5 lg:m-20">
   <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
         <tr>
            <th scope="col" className="p-4">Rank</th>
            <th scope="col" className="py-3 px-6">Collection</th>
            <th scope="col" className="py-3 px-6">
               <div className="flex items-center">
                  <span className="cursor-pointer dark:hover:text-gray-200 hover:text-blue-500 pt-[2px]">Total Volume</span>
                  <div className="ml-2 cursor-pointer">
                    <ChevronUpIcon className='w-3' />
                    <ChevronDownIcon className='w-3' />
                  </div>
               </div>
            </th>
            <th scope="col" className="py-3 px-6">
               <div className="flex items-center">
                  <span className="cursor-pointer dark:hover:text-gray-200 hover:text-blue-500 pt-[2px]">Volume Change</span>
                  <div className="ml-2 cursor-pointer">
                    <ChevronUpIcon className='w-3' />
                    <ChevronDownIcon className='w-3' />
                  </div>
               </div>
            </th>
            <th scope="col" className="py-3 px-6">
               <div className="flex items-center">
                  <span className="cursor-pointer dark:hover:text-gray-200 hover:text-blue-500 pt-[2px]">Floor Price</span>
                  <div className="ml-2 cursor-pointer">
                    <ChevronUpIcon className='w-3' />
                    <ChevronDownIcon className='w-3' />
                  </div>
               </div>
            </th>
            <th scope="col" className="py-3 px-6">
               <div className="flex items-center">
                  <span className="cursor-pointer dark:hover:text-gray-200 hover:text-blue-500 pt-[2px]">Floor Change</span>
                  <div className="ml-2 cursor-pointer">
                    <ChevronUpIcon className='w-3' />
                    <ChevronDownIcon className='w-3' />
                  </div>
               </div>
            </th>
            <th scope="col" className="py-3 px-6">
               <div className="flex items-center">
                  <span className="cursor-pointer dark:hover:text-gray-200 hover:text-blue-500 pt-[2px]">Items</span>
                  <div className="ml-2 cursor-pointer">
                    <ChevronUpIcon className='w-3' />
                    <ChevronDownIcon className='w-3' />
                  </div>
               </div>
            </th>
         </tr>
      </thead>
      <tbody>
        <StatsRow name='FootBullz' volume={3228.96} vChange={336.25} fPrice={10.00} fChange={11.11} items={9999} rank={1} image={'https://ipfs.bluemove.io/uploads/footbullz/logo.webp'} />
        <StatsRow name='Suiheroes' volume={3000.21} vChange={231.42} fPrice={8.00} fChange={23.53} items={4500} rank={2} image={'/log.png'} />
        <StatsRow name='Sui Bears' volume={2343.43} vChange={200.24} fPrice={12.00} fChange={21.04} items={3000} rank={3} image={'/bears.webp'} />
        <StatsRow name='BoltApeYc' volume={2000.54} vChange={139.53} fPrice={45.00} fChange={32.86} items={100} rank={4} image={'/bolt.webp'} />
        <StatsRow name='GOATS Of Sui' volume={1534.02} vChange={120.43} fPrice={3.00} fChange={82.43} items={800} rank={5} image={'/goat.webp'} />
        <StatsRow name='Hominid' volume={1234.74} vChange={93.25} fPrice={6.00} fChange={73.74} items={2500} rank={6} image={'/hominid.png'} />
      </tbody>
   </table>
</div>
  )
}

export default StatsTable