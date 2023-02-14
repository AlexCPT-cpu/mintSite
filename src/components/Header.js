import React from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { UserCircleIcon } from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <header className="App-header flex justify-between p-5 pt-5">
      <div className="mt-2 mr-3">origin</div>
      <div className="flex flex-row space-x-4 lg:space-x-8">
        <div className="bg-[#5c9d8183] rounded-3xl px-6 py-2 text-white flex flex-row space-x-0">
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
