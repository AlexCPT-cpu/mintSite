import React from 'react'

const Main = () => {
  return (
    <div className="main mt-10 p-16 flex flex-col lg:flex-row lg:space-x-52 mb-28">
    <div className='flex flex-col'>
      <h1 className='font-bold text-4xl md:text-5xl'>LOREM IPSUM</h1>
        <p className='mt-5 font-light'>Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nun vulputate <br/>
        libero et velit interdum, ac aliquet odio mattis. Class aptent
        taciti sociosqu<br/> 
        ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
      <div className='flex flex-row space-x-2 mt-3 border border-white p-4 rounded-full bg-[#182b2383]'>
        <p className='font-semibold'>Price: </p>
        <p className='font-semibold'>2.5 ETH</p>
      </div>
      <div className='flex justify-center space-x-2 mt-3 p-4 rounded-full bg-gradient-to-bl from-pink-600 to-purple-600 cursor-pointer'>
        <button className='font-semibold text-center'>Connect Wallet </button>
        </div>
    </div>
    <div className='text-center mt-12 lg:mt-0 text-black items-center justify-center flex min-w-[200px] lg:min-h-[400px] lg:min-w-[400px] min-h-[300px] bg-white rounded-lg'> 
    </div>
    </div>
  )
}

export default Main
