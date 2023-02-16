import React from 'react'

export const StatsRow = ({ image, name, volume, vChange, fPrice, fChange, items, rank }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <td className="p-4 w-4">
       <div className="flex justify-center items-center">{rank}</div>
    </td>
    <th scope="row">
       <a className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white" href="#">
          <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-10 h-10 cursor-pointer ring-1 ring-white dark:ring-neutral-900">
            <img className="absolute inset-0 w-full h-full object-cover rounded-full" src={image} alt="" /></div>
          <div className="pl-3 cursor-pointer">
             <div className="text-base font-semibold">{name}</div>
          </div>
          <div className="relative w-fit z-10">
             <div>
                <div className="ml-2 cursor-pointer">
                   <span className="">
                   </span>
                </div>
             </div>
          </div>
       </a>
    </th>
    <td className="py-4 px-6">
       <div className="flex gap-3 items-center ">
          <div className="flex items-center min-w-[90px]">
             <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-6 w-6 text-sm mr-2">
                <img className="absolute inset-0 w-full h-full object-cover rounded-full" src="/sui-logo.webp" alt="" /></div>
             {volume.toLocaleString()}
          </div>
       </div>
    </td>
    <td className="py-4 px-6">
       <div className="flex gap-3 items-center "><span className=" text-xs text-green-500">+{vChange}%</span></div>
    </td>
    <td className="py-4 px-6">
       <div className="flex gap-3 items-center">
          <div className="flex items-center min-w-[70px]">
             <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-6 w-6 text-sm mr-2">
                <img className="absolute inset-0 w-full h-full object-cover rounded-full" src="/sui-logo.webp" alt="" /></div>
             {fPrice}
          </div>
       </div>
    </td>
    <td className="py-4 px-6">
       <div className="flex gap-3 items-center"><span className="ml-2 mb-1 text-xs text-green-500">+{fChange}%</span></div>
    </td>
    <td className="py-4 px-6">
       <div className="flex items-center">{items.toLocaleString()}</div>
    </td>
 </tr>
  )
}
