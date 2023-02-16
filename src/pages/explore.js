import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CollectionGrid from '@/components/explore/CollectionGrid'

const explore = () => {
  return (
    <div className='bg-[#0C1616] min-h-screen mt-20'>
      <Header explore='bg-gradient-to-r' />
      <div className="flex">
      <CollectionGrid />
      </div>
        <Footer /></div>
    
  )
}

export default explore