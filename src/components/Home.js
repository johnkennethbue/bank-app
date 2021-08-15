import React, { useState } from "react";
import Deposit from './deposit.png';
import Withdraw from './withdraw.png';
import Transfer from './transfer.png';
import { WithdrawModal } from './Withdraw.js';
import { DepositModal } from './Deposit.js';
import { TransferModal } from './Transfer.js';


function Home () {

        const [showWithdrawModal, setShowWithdrawModal] = useState(false);
        const openWithdrawModal = (e) =>{
                e.preventDefault();
                setShowWithdrawModal(view => !view);
        };  
        const [showDepositModal, setShowDepositModal] = useState(false);
        const openDepositModal = (e) =>{
            e.preventDefault();
            setShowDepositModal(view => !view);
        }
        const [showTransferModal, setShowTransferModal] = useState(false);
        const openTransferModal = (e) =>{
            e.preventDefault();
            setShowTransferModal(view => !view);
        }

    return (

<div class = "flex w-full justify-center items-center text-black">
<div class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
<div class="sm:w-1/2 xl:w-3/5 h-screen md:flex flex-auto items-center justify-center p-10 overflow-y-auto bg-gradient-to-l from-yellow-600 to-gray-200 text-black bg-repeat bg-cover relative">
  <div class="absolute bg-gradient-to-l from-yellow-600 to-gray-200 opacity-85 inset-0 z-1"></div>
  <div class="w-full  max-w-md z-50">

  <div class = "flex w-full h-full justify-center items-center">
  <div class = "flex flex-col border-2 z-50 sm:z-50 border-black rounded-3xl w-auto ml-36 mr-36 h-full px-4 py-2">
            
            <h1 class = "flex flex-col text-center font-light text-5xl mt-12"> Welcome, John Kenneth! </h1>
            <h1 class = "text-2xl font-normal mt-20 ml-4 mb-8 sm:text-4xl sm:justify-right sm:ml-24 ">Account Balance:</h1>
            <div class = "text-4xl flex justify-right ml-4 sm:text-5xl sm:ml-24 border-transparent w-3/4  h-12 text-black font-bold">$124,395.68 USD</div>

        <div class = "flex justify-center flex-col space-x-5 mb:8 sm:flex-row sm:mt-4 md:flex-row mx-8 my-8 z-1">
           <div class = "flex justify-right">
           <button onClick = {openWithdrawModal} value = "Withdraw" class = "bg-yellow-500 opacity-80 flex flex-col w-full px-36 py-26 h-36 mt-16 justify-center items-center text-black p-4  rounded-3xl tracking-wide font-semibold  shadow-2xl cursor-pointer transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-110"> <img src={Withdraw} /> Withdraw</button>
           <WithdrawModal showWithdrawModal = {showWithdrawModal} setShowWithdrawModal = {setShowWithdrawModal} />
          </div>
        <div class = "flex justify-end">
          <button onClick = {openDepositModal} value = "Deposit" class = "bg-yellow-500 opacity-80 flex flex-col w-full px-36 py-26 h-36 mt-16 justify-center items-center text-black p-4  rounded-3xl tracking-wide font-semibold  shadow-2xl cursor-pointer transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-110"> <img src={Deposit} />  Deposit</button>
          <DepositModal showDepositModal = {showDepositModal} setShowDepositModal = {setShowDepositModal} />
          </div>
        <div class = "flex justify-end">
          <button onClick = {openTransferModal} value = "Transfer Funds" class = "bg-yellow-500 opacity-80 flex flex-col w-full px-36 py-26 h-36 mt-16 justify-center items-center text-black p-4  rounded-3xl tracking-wide font-semibold  shadow-2xl cursor-pointer transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-110"> <img src={Transfer} /> Transfer</button>
          <TransferModal showTransferModal = {showTransferModal} setShowTransferModal = {setShowTransferModal} />
          </div>
        </div>
        </div>
        </div>
  </div>
</div>
<ul class="design-animation">
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
</ul>
</div> 
</div>
    )
};




export default Home;