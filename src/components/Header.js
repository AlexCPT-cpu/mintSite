import React, { useState } from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { UserCircleIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

const Header = () => {

  const [chevron, setChevron] = useState(false)

  return (
    <header className="App-header flex justify-between p-5 pt-5">
      <a href="/"><div className="mr-3 mt-1 md:mt-0">
        <img src="/origin.png" className="rounded-full w-19 h-10 lg:w-12 lg:h-12" />
      </div>
      </a>
      <div className="flex flex-row space-x-4 lg:space-x-8">
        <div className="bg-[#203d3d] rounded-3xl px-6 py-2 text-white flex flex-row space-x-0">
          <MagnifyingGlassIcon className="w-4 mr-2" />
          <input className="bg-transparent text-white border-none outline-none w-[50px] lg:w-[500px]" type="text" placeholder="Search.." />
        </div>
        <div className="hidden lg:flex">
        <div className="">
          <button className="grad-hover">Explore</button>
        </div>
        <div className="">
          <button className="grad-hover">Stats</button>
        </div>
        <a href="/" target='_blank'><div className="flex relative flex-row">
         <button onMouseOver={() => setChevron(true)} onMouseOut={() => setChevron(false)} className="grad-hover flex flex-row">Apply for Launchpad &nbsp; {chevron ? <ChevronUpIcon className="w-4 mt-1" /> : <ChevronDownIcon className="w-4 mt-1" /> }</button>
        </div></a>
        </div>
        <div className="">
          <button className="bg-gradient-to-r from-pink-700 via-pink-600 to-pink-400 px-8 py-3 rounded-3xl">Create</button>{" "}
        </div>
        <div className="mt-2">
          <UserCircleIcon className="w-8" />
        </div>
      </div>
    </header>
  );
};

export default Header;
