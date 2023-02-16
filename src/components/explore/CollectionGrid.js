import React from 'react'
import CollectionCard from './CollectionCard'

const CollectionGrid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 content-center justify-items-center items-center place-content-center center mt-10 mb-20 w-full'>
        <CollectionCard className='flex justify-center items-center self-center' logo='/log.png' left='/one.png' mid='/two.png' right='/three.png' ColName='Suiheroes' />
        <CollectionCard className='flex justify-center items-center self-center' logo='/bolt.webp' left='/b1.webp' mid='/b2.webp' right='/b1.webp' ColName='BoltApeYc' />
        <CollectionCard className='flex justify-center items-center self-center' logo='/log.png' left='/one.png' mid='/two.png' right='/three.png' ColName='Suiheroes' />
        <CollectionCard className='flex justify-center items-center self-center' logo='/bears.webp' left='/bears.webp' mid='/bears.webp' right='/bears.webp' ColName='Sui Bears' />
        <CollectionCard className='flex justify-center items-center self-center' logo='/log.png' left='/one.png' mid='/two.png' right='/three.png' ColName='Suiheroes' />
        <CollectionCard className='flex justify-center items-center self-center' logo='/goat.webp' left='/g1.webp' mid='/g2.webp' right='/g3.webp' ColName='GOATs of Sui' />
        <CollectionCard className='flex justify-center items-center self-center' logo='/log.png' left='/one.png' mid='/two.png' right='/three.png' ColName='Suiheroes' />
        <CollectionCard className='flex justify-center items-center self-center' logo='/hominid.png' left='/hominid.png' mid='/hominid.png' right='/hominid.png' ColName='Hominid' />
        <CollectionCard className='flex justify-center items-center self-center' logo='/log.png' left='/one.png' mid='/two.png' right='/three.png' ColName='Suiheroes' />
        <CollectionCard className='flex justify-center items-center self-center' logo='/wine.png' left='/wine.png' mid='/wine.png' right='/wine.png' ColName='Wine' />
        <CollectionCard className='flex justify-center items-center self-center' logo='/bolt.webp' left='/b1.webp' mid='/b2.webp' right='/b1.webp' ColName='BoltApeYc' />
        <CollectionCard className='flex justify-center items-center self-center' logo='/log.png' left='/one.png' mid='/two.png' right='/three.png' ColName='Suiheroes' />
    </div>
  )
}

export default CollectionGrid