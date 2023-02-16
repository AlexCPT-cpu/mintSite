import React, { useState } from "react";
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { UserCircleIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import Link from "next/link";

const Header = ({ home, explore, stats }) => {

  const [chevron, setChevron] = useState(false)

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0%";
  };


  return (
    <header className="App-header flex justify-between p-5 pt-5 fixed w-full top-0 z-10 bg-[#0C1616]">
      <a href="/"><div className="mr-3 mt-1 md:mt-0">
        <img src="/origin.png" className="rounded-full w-24 h-10 lg:w-12 lg:h-12" />
      </div>
      </a>

      <div
        id="mySidenav"
        className="h-[100%] overflow-x-hidden pt-32 fixed w-0 z-10 top-0 left-0 text-center bg-[#0C1616]"
      >
        <p className="closebtn absolute top-2 right-5 text-4xl" onClick={() => closeNav()}>
          &times;
        </p>
        <div className="flex flex-col">
        <div className="">
          <Link href='/explore'><button className={`grad-hover ${explore} from-pink-700 via-pink-600 to-pink-400 px-8 py-3 rounded-3xl mr-2 m-2`}>Explore</button></Link>
        </div>
        <div className="">
         <Link href='/stats'> <button className={`grad-hover ${stats} from-pink-700 via-pink-600 to-pink-400 px-8 py-3 rounded-3xl mr-3 m-2`}>Stats</button></Link>
        </div>
        <div className="">
        <Link href='#'> <button className={`grad-hover from-pink-700 via-pink-600 to-pink-400 px-8 py-3 rounded-3xl m-2 text-center flex justify-center mx-auto mr-24 items-center`}>Apply for Launchpad {chevron ? <ChevronUpIcon className="w-4" /> : <ChevronDownIcon className="w-4" /> }</button></Link>
        </div>
        </div>
      </div>

      <div className="flex flex-row space-x-4 lg:space-x-8">
        <div className="bg-[#203d3d] rounded-3xl px-6 py-2 text-white flex flex-row space-x-0">
          <MagnifyingGlassIcon className="w-4 mr-2" />
          <input className="bg-transparent text-white border-none outline-none w-[50px] lg:w-[500px]" type="text" placeholder="Search.." />
        </div>
        
        <div className="hidden lg:flex">
        <div className="">
          <Link href='/explore'><button className={`grad-hover ${explore} from-pink-700 via-pink-600 to-pink-400 px-8 py-3 rounded-3xl mr-2`}>Explore</button></Link>
        </div>
        <div className="">
         <Link href='/stats'> <button className={`grad-hover ${stats} from-pink-700 via-pink-600 to-pink-400 px-8 py-3 rounded-3xl mr-3`}>Stats</button></Link>
        </div>
        <div className="flex flex-row">
         <button onMouseOver={() => setChevron(true)} onMouseOut={() => setChevron(false)} className="grad-hover flex flex-row">Apply for Launchpad &nbsp; {chevron ? <ChevronUpIcon className="w-4 mt-1" /> : <ChevronDownIcon className="w-4 mt-1" /> }</button>
        </div>
        </div>
        <div className="">
          <button className={`${home} grad-hover from-pink-700 via-pink-600 to-pink-400 px-6 py-3 rounded-3xl`}>Create</button>{" "}
        </div>
        <div className="space-x-2 flex flex-row">
          <UserCircleIcon className="w-8" />
          <Bars3Icon className="w-8 lg:w-0" onClick={() => openNav()} />
        </div>
      </div>
    </header>
  );
};

export default Header;
