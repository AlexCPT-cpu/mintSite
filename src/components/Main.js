import React, { useState } from "react";
import { ConnectKitButton } from "connectkit";
import truncateEthAddress from "truncate-eth-address";
import { useAccount } from "wagmi";
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { MinusCircleIcon } from '@heroicons/react/24/outline'

const Main = () => {
  const { address, isConnected } = useAccount();

  const [counter, setCount] = useState(0)

  const setCounter = (bool) => {

    if (bool === 'plus') {
      setCount(prev => prev+=1)
    } else if(bool === 'minus') {
      if (counter === 0) return
      else {
        setCount(prev => prev-=1)
      }
    }
  }

  return (
    <div className="main mt-10 p-16 flex flex-col lg:flex-row lg:space-x-52 mb-28">
      <div className="flex flex-col">
        <h1 className="font-bold text-4xl md:text-5xl">LOREM IPSUM</h1>
        <p className="mt-5 font-light">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nun vulputate{" "}
          <br />
          libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
          sociosqu
          <br />
          ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
        <div className="flex flex-row space-x-2 mt-3 border border-neutral-500 p-4 rounded-full bg-[#162323] mb-4">
          <p className="font-semibold">Price: </p>
          <p className="font-semibold">2.5 ETH</p>
        </div>

        <ConnectKitButton.Custom>
          {({ isConnected, isConnecting, show, hide, address, ensName }) => {
            return (
              <div
                onClick={show}
                className="flex justify-center mt-3 p-3 rounded-full bg-gradient-to-bl from-pink-600 to-purple-600 cursor-pointer"
              >
                <button className="font-semibold text-center">
                  {" "}
                  {isConnected
                    ? truncateEthAddress(address)
                    : "Connect Wallet"}{" "}
                </button>
              </div>
            );
          }}
        </ConnectKitButton.Custom>
        {isConnected ? (
          <div>
            <div className="flex justify-between space-x-4 md:space-x-10 mt-4">
            <div className="flex justify-between space-x-2 mt-3 p-3 rounded-full w-full bg-[#162323] cursor-pointer border border-neutral-500">
              <button onClick={() => setCounter('minus')} className="font-semibold text-center"><MinusCircleIcon className="w-5"/></button>
              <button className="font-semibold text-center">{counter}</button>
              <button onClick={() => setCounter('plus')} className="font-semibold text-center"><PlusCircleIcon className="w-5" /></button>
            </div>
            <div className="flex justify-center space-x-2 mt-3 p-3 rounded-full bg-gradient-to-bl w-full from-pink-600 to-purple-600 cursor-pointer">
              <button className="font-semibold text-center">Mint</button>
            </div>
            </div>

            <div className="flex justify-between space-x-3 md:space-x-10 mt-4 text-center">
            <div className="flex justify-center space-x-2 mt-3 p-3 rounded-full w-full bg-[#162323] cursor-pointer text-center border border-neutral-500">
              <button className="font-semibold text-center">Mint 1</button>
            </div>
            <div className="flex justify-center space-x-2 mt-3 p-3 rounded-full w-full bg-[#162323] cursor-pointer text-center border border-neutral-500">
              <button className="font-semibold text-center">Mint 3</button>
            </div>
            <div className="flex justify-center space-x-2 mt-3 p-3 rounded-full w-full bg-[#162323] cursor-pointer text-center border border-neutral-500">
              <button className="font-semibold text-center">Mint 5</button>
            </div>
              </div>
          </div>
        ) : null}
      </div>
      <div className="text-center mt-12 lg:mt-0 text-black items-center justify-center flex min-w-[200px] lg:min-h-[400px] lg:min-w-[400px] min-h-[300px] bg-white rounded-lg"></div>
    </div>
  );
};

export default Main;
