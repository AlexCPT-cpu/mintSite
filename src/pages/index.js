import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Mint Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="App bg-[#0c1616] min-h-screen text-white mt-20">
      <Header home={'bg-gradient-to-r'} />
      <Main />      
      <Footer />      
    </div>
    </>
  )
}
