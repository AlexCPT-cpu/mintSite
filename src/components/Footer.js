import React from "react";
import { FiTwitter } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
import { AiOutlineYoutube, AiOutlineReddit, AiOutlineMail } from 'react-icons/ai'
import { RxDiscordLogo } from 'react-icons/rx'

const Footer = () => {
  return (
    <div className="bg-[#0c1616]">
      <div className="flex lg:hidden">
      <div className="w-full bottom-0 flex flex-col px-8 pb-8">
        
      <div className="flex flex-col space-x-8">
        <div className="flex flex-col">
          <div className="font-bold mb-5">Get the latest NFT updates</div>

          <div className="flex justify-between bg-gradient-to-t from-[#508e7383] to-[#0f251c83] px-3 py-1 rounded-full mt-3">
            <div>
              <input placeholder="Your e-mail" className="bg-transparent border-none outline-none mt-1" type='e-mail' />
            </div>
            <div className='flex justify-betwen px-3 py-1 ml-9 rounded-full bg-gradient-to-bl from-pink-600 to-purple-600'>
        <button className='font-semibold text-center'>I'm in </button>
        </div>
          </div>
        </div>

        <div className="flex justify-between space-x-20 mt-8">
        <div className="space-y-4">
          <h3 className="font-bold mb-4">NFT</h3>
          <h3 className="font-light">Explore</h3>
          <h3 className="font-light">Help Center</h3>
          <h3 className="font-light">Blog</h3>
          <h3 className="font-light">Become a partner</h3>
          <h3 className="font-light">Bug bounty</h3>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold mb-4">Community</h3>
          <h3 className="font-light">Discussion</h3>
          <h3 className="font-light">Suggest feature</h3>
          <h3 className="font-light">NFT protocol</h3>
          <h3 className="font-light">Subscribe</h3>
          <h3 className="font-light">Jobs</h3>
        </div>
        </div>

        <div className="mt-5">
          <h3 className="font-bold mb-4">Language</h3>
          <div className="flex justify-between bg-gradient-to-t from-[#508e7383] to-[#0f251c83] px-8 py-1 text-left rounded-full mt-3">
            <div>
              <select className="bg-transparent border-none outline-none text-left">
                <option value='English'>English</option>
                <option value='Chinese'>Chinese</option>
                <option value='German'>German</option>
                <option value='Russian'>Russian</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-16 space-x-16">
        <div className="space-y-2">
          <div className="text-white font-light">&copy;NFT.inc All rights reserved</div>
          <div className="text-white font-light">Terms</div>
          <div className="text-white font-light">Privacy policy</div>
        </div>
        <div className="flex flex-col">
          <div>Communities</div>
          <div className="grid grid-cols-3">
          <div className="cursor-pointer"><AiOutlineMail size={30} className='ring-1 ring-white p-2 rounded-full m-1 mt-2 mr-3' /></div>
          <div className="cursor-pointer"><FaInstagram size={30} className='ring-1 ring-white p-2 rounded-full m-1 mt-2 mr-3' /></div>
          <div className="cursor-pointer"><FiTwitter size={30} className='ring-1 ring-white p-2 rounded-full m-1 mt-2' /></div>
          <div className="cursor-pointer"><AiOutlineYoutube size={30} className='ring-1 ring-white p-2 rounded-full m-1 mt-2 mr-3' /></div>
          <div className="cursor-pointer"><AiOutlineReddit size={30} className='ring-1 ring-white p-2 rounded-full m-1 mt-2 mr-3' /></div>
          <div className="cursor-pointer"><RxDiscordLogo size={30} className='ring-1 ring-white p-2 rounded-full m-1 mt-2' /></div>
          </div>
        </div>
      </div>
        </div>
      </div>



<div className="hidden lg:flex">
   <div className="w-full bottom-0 flex flex-col px-12 pb-8">
      <div className="flex justify-between space-x-8">
        <div className="flex flex-col">
          <div className="font-bold mb-5">Get the latest NFT updates</div>

          <div className="flex justify-between bg-gradient-to-t from-[#508e7383] to-[#0f251c83] px-3 py-1 rounded-full mt-3">
            <div>
              <input placeholder="Your e-mail" className="bg-transparent border-none outline-none mt-1" type='e-mail' />
            </div>
            <div className='flex justify-betwen px-3 py-1 ml-9 rounded-full bg-gradient-to-bl from-pink-600 to-purple-600'>
        <button className='font-semibold text-center'>I'm in </button>
        </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="cursor-pointer font-bold mb-4">NFT</h3>
          <h3 className="cursor-pointer font-light">Explore</h3>
          <h3 className="cursor-pointer font-light">Help Center</h3>
          <h3 className="cursor-pointer font-light">Blog</h3>
          <h3 className="cursor-pointer font-light">Become a partner</h3>
          <h3 className="cursor-pointer font-light">Bug bounty</h3>
        </div>
        <div className="space-y-4">
          <h3 className="cursor-pointer font-bold mb-4">Community</h3>
          <h3 className="cursor-pointer font-light">Discussion</h3>
          <h3 className="cursor-pointer font-light">Suggest feature</h3>
          <h3 className="cursor-pointer font-light">NFT protocol</h3>
          <h3 className="cursor-pointer font-light">Subscribe</h3>
          <h3 className="cursor-pointer font-light">Jobs</h3>
        </div>
        <div>
          <h3 className="font-bold mb-4">Language</h3>
          <div className="flex justify-between bg-gradient-to-t from-[#508e7383] to-[#0f251c83] px-10 py-1 text-left rounded-full mt-3">
            <div>
              <select className="bg-transparent border-none outline-none text-left">
                <option value='English'>English</option>
                <option value='Chinese'>Chinese</option>
                <option value='German'>German</option>
                <option value='Russian'>Russian</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-28">
      <div className="flex flex-row space-x-8 space-y-4">
          <div className="text-white font-light cursor-pointer">&copy;NFT.inc All rights reserved</div>
          <div className="text-white font-light cursor-pointer">Terms</div>
          <div className="text-white font-light cursor-pointer">Privacy policy</div>
          </div>
        <div className="flex flex-col">
          <div>join the community</div>

          <div className="grid grid-cols-3">
          <div className="cursor-pointer"><AiOutlineMail size={30} className='ring-1 ring-white p-2 rounded-full m-1 mt-2' /></div>
          <div className="cursor-pointer"><FaInstagram size={30} className='ring-1 ring-white p-2 rounded-full m-1 mt-2' /></div>
          <div className="cursor-pointer"><FiTwitter size={30} className='ring-1 ring-white p-2 rounded-full m-1 mt-2' /></div>
          <div className="cursor-pointer"><AiOutlineYoutube size={30} className='ring-1 ring-white p-2 rounded-full m-1 mt-2' /></div>
          <div className="cursor-pointer"><AiOutlineReddit size={30} className='ring-1 ring-white p-2 rounded-full m-1 mt-2' /></div>
          <div className="cursor-pointer"><RxDiscordLogo size={30} className='ring-1 ring-white p-2 rounded-full m-1 mt-2' /></div>
          </div>
        </div>
      </div>
    </div>
    </div>

    </div>
  );
};

export default Footer;
