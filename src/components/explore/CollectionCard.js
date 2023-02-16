import Image from 'next/image'
import React from 'react'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

const CollectionCard = ({logo, left, mid, right, ColName}) => {
  return (
    <div className='flex flex-col mb-10'>
        <div className=''>
            <div>
                <Image className='w-[350px] md:w-64 lg:w-64 h-[200px] object-cover md:h-64 lg:h-52 rounded-tl-lg rounded-tr-lg' width={200} height={200} src={logo} alt='collection logo' />
            </div>
            <div className='flex flex-row'>
                <div className='border-t-8 border-[#0C1616]'><Image className='w-[111px] object-cover md:w-20 lg:w-20 rounded-bl-lg' width={200} height={200} src={left} alt='collection logo' /></div>
                <div className='border-8 border-[#0C1616]'><Image   className='w-[111px] object-cover md:w-20 lg:w-20' width={200} height={200} src={mid} alt='collection logo' /></div>
                <div className='border-t-8 border-[#0C1616]'><Image className='w-[111px] object-cover md:w-20 lg:w-20 rounded-br-lg' width={200} height={200} src={right} alt='collection logo' /></div>
            </div>
        </div>
        <div className='flex flex-row space-x-4 justify-center items-center mt-2'>
            <div className=''><Image className='w-8 rounded-full' width={200} height={200} src={logo} alt='collection logo' /></div>
            <div className='capitalize font-semibold text-xl md:text-2xl'>{ColName}</div>
            <div><CheckBadgeIcon className='w-7 md:mt-1 fill-sky-500' /></div>
        </div>
    </div>
  )
}

export default CollectionCard