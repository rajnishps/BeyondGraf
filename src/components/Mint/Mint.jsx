import React, { useState } from "react"

const Mint = () => {
  const [amount, setAmount] = useState(3)
  return (
    <div className="py-32 px-8 bg-black text-white w-full text-center flex items-center flex-col">
      <h2 className=" font-black text-6xl tracking-widest uppercase">
        Evolution aps presale!
      </h2>
      <h4 className="py-8 w-1/2 text-lg">
        Congratulations, you are one of the lucky few who made it to our
        WhiteList! <br />
        You are able to mint up to 3 NFTs at the price of ( TBA ) ETH
      </h4>
      <div className="flex flex-row gap-32 ">
        <div>
          <p className=" font-black text-6xl tracking-widest uppercase">01</p>
          <p className="uppercase text-2xl font-bold tracking-widest">days</p>
        </div>
        <div>
          <p className=" font-black text-6xl tracking-widest uppercase">23</p>
          <p className="uppercase text-2xl font-bold tracking-widest">hours</p>
        </div>
        <div>
          <p className=" font-black text-6xl tracking-widest uppercase">45</p>
          <p className="uppercase text-2xl font-bold tracking-widest">
            minutes
          </p>
        </div>
        <div>
          <p className=" font-black text-6xl tracking-widest uppercase">60</p>
          <p className="uppercase text-2xl font-bold tracking-widest">second</p>
        </div>
      </div>
      <div className="flex gap-8 w-full mt-8 ">
        <div className="w-3/6 h-[640px] px-8 py-16 bg-gray-800 border border-gray-500">
          <h3 className="uppercase text-4xl text-teal-400 font-bold">
            pre-sale mint
          </h3>
          <h4 className="my-6">203 NFTs Minted</h4>
          <form action="">
            <div className="flex items-end border-b-2 border-white pb-2">
              <input
                className="w-1/2 placeholder:text-2xl  placeholder:text-white bg-transparent border-0 mt-8"
                type="text"
                placeholder="BALANCE"
                disabled
              />
              <div className="w-1/2 text-right mb-2 font-bold">0.01 ETH</div>
            </div>
            <div className="flex items-end border-b-2 border-white pb-2">
              <input
                className="w-1/2 placeholder:text-2xl  placeholder:text-white bg-transparent border-0 mt-8"
                type="text"
                placeholder="AMOUNT"
                disabled
              />
              <div className="w-1/2 text-right mb-2 font-bold">
                <button
                  type="button"
                  onClick={() => amount > 0 && setAmount(amount - 1)}
                  className="h-6 w-8 mr-4 rounded text-black bg-white"
                >
                  -
                </button>
                <button
                  type="button"
                  className="h-10 w-12 mr-4 rounded text-white border-2 border-green-900 bg-black"
                >
                  {amount}
                </button>
                <button
                  type="button"
                  onClick={() => amount < 3 && setAmount(amount + 1)}
                  className="h-6 w-8 mr-4 rounded text-black bg-white"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex items-end border-b-2 border-white pb-2 mb-8">
              <input
                className="w-1/2 placeholder:text-2xl  placeholder:text-white bg-transparent border-0 mt-8"
                type="text"
                placeholder="TOTAL"
                disabled
              />
              <div className="w-1/2 text-right mb-2 font-bold">0.01 ETH</div>
            </div>

            <button className="w-full bg-teal-500 h-16 my-6 rounded text-2xl font-bold">
              MINT
            </button>
          </form>
        </div>
        <div className="w-4/6 h-[640px] flex justify-center p-4 border-2 border-gray-800 ">
          <img src="/images/ape.gif" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Mint
