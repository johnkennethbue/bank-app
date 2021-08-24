import {useState, useCallback} from "react";
import { useHistory } from 'react-router-dom';
import historyIcon from './assets/history.png';
import Deposit from './assets/deposit.png';
import Withdraw from './assets/withdraw.png';
import userIcon from './assets/userIcon.png';
import logOut from './assets/logout.png'
import WithdrawModal  from './WithdrawModal.js';
import DepositModal  from './DepositModal';
import SwitchAccountModal  from './TransHistory.js';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



const Home = () => {

const [balanceState, setBalanceState] = useState(0);
const [displayBalance, setDisplayBalance] = useState(0);
const [nameDisplay, setNameDisplay] = useState("John Kenneth");

const depositFunction = () => setDisplayBalance(balanceState + displayBalance)
const withdrawFunction = () => setDisplayBalance(displayBalance - balanceState) 

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
const [showSwitchAccountModal, setShowSwitchAccountModal] = useState(false);
const openSwitchAccountModal = (e) =>{
        e.preventDefault();
        setShowSwitchAccountModal(view => !view);
    }

const history = useHistory();
const handleLogOut = useCallback(() => history.push('/bank-app'), [history]);

const MySwal = withReactContent(Swal);
const confirmLogOut = () => {MySwal.fire({
    title: `Are you sure you want to log out?`,
    showCancelButton: true,
    confirmButtonText: `Confirm`,
    confirmButtonColor: "#FBBF24", 
    denyButtonText: `Discard`,
  }).then((result) => {
     if (result.isConfirmed) {
       handleLogOut();
      }
    }
)}

    return (

<div class = "flex w-full justify-center items-center text-black">
<div class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
<div class="sm:w-1/2 xl:w-3/5 h-screen md:flex flex-auto items-center justify-center p-10 overflow-y-auto sm:overflow-y-hidden bg-gradient-to-b from-yellow-600 to-gray-200 text-black bg-repeat bg-cover relative">
  <div class="absolute bg-gradient-to-t from-yellow-600 to-gray-200 opacity-85 inset-0 z-1"></div>
  <div class="w-full  max-w-md z-50">

  <div class = "flex w-full h-full justify-center items-center">
  <div class = "flex flex-col border-2 z-50 sm:z-50 border-black rounded-3xl w-auto ml-36 mr-36 h-full px-4 py-2">

            <button class = "m-auto mt-4"> <img src = {userIcon} /> </button> 
            <h1 class = "m-auto text-center font-light text-5xl mt-8 "> {"Welcome," + " " + nameDisplay + "!"}</h1>
            <h3 class = "m-auto text-center font-light text-2xl mt-2"> Savings Account </h3>
            <h3 class = "m-auto text-center font-light text-2xl mt-2"> Account number: 123-223-4039  </h3>


            <h1 class = "text-2xl font-normal mt-14 ml-4 mb-8 sm:text-4xl sm:justify-right sm:ml-24 ">Account Balance:</h1>
            <div class = "text-5xl flex justify-right ml-4 sm:text-5xl sm:ml-24 border-transparent w-3/4  h-12 text-black font-bold">{"$" + displayBalance.toLocaleString() + " " + "USD"}</div>

        <div class = "flex flex-col justify-center mx-8 my-8 z-1 space-x-5 mb:8 sm:flex-row sm:mt-4 md:flex-row ">

        <div>
           <button onClick = {openWithdrawModal} 
           value = "Withdraw" 
           class = "text-l bg-yellow-500 opacity-80 flex flex-col w-full px-24 py-16 h-36 mt-16 justify-center items-center text-black rounded-3xl tracking-wide font-semibold  shadow-2xl cursor-pointer transition duration-200 ease-in-out hover: transform hover:-translate-y-1 hover:scale-110"> <img src={Withdraw} /> <p class = "font-normal mt-2 ">Withdraw</p></button>
           <WithdrawModal showWithdrawModal = {showWithdrawModal} 
           setShowWithdrawModal = {setShowWithdrawModal} 
           onChange={value => setBalanceState(value)} 
           withdraw = {withdrawFunction} 
           newBalance = {displayBalance} 
           oldBalance = {balanceState}/>
        </div>

        <div>
          <button onClick = {openDepositModal} 
          value = "Deposit" 
          class = "text-xl font-semibold bg-yellow-500 opacity-80 flex flex-col w-full px-24 py-16 h-36 mt-16 justify-center items-center text-black  rounded-3xl tracking-wide font-semibold  shadow-2xl cursor-pointer transition duration-200 ease-in-out hover: transform hover:-translate-y-1 hover:scale-110">          
          <img src={Deposit} />  
          <p class = "font-light mt-2 ">Deposit</p> </button>
          <DepositModal balance = {balanceState} 
          showDepositModal = {showDepositModal} 
          setShowDepositModal = {setShowDepositModal} 
          onChange={value => setBalanceState(value)} 
          deposit = {depositFunction} />
        </div>

        <div>
          <button onClick = {openSwitchAccountModal} value = "Switch Account" 
          class = "text-md bg-yellow-500 opacity-80 flex flex-col w-full px-20 py-16 h-36 mt-16 justify-center items-center text-black rounded-3xl tracking-wide font-semibold  shadow-2xl cursor-pointer transition duration-200 ease-in-out hover: transform hover:-translate-y-1 hover:scale-110"> 
          <img src = {historyIcon} />  <p class = "font-normal ">Transaction History</p></button>
          <SwitchAccountModal showSwitchAccountModal = {showSwitchAccountModal} 
          setShowSwitchAccountModal = {setShowSwitchAccountModal} 
          onChange={(value) => setBalanceState(value)} />
        </div>

        <div>
          <button onClick = {confirmLogOut} 
          value = "Log Out" 
          class = "text-xl bg-yellow-500 opacity-80 flex flex-col w-full px-24 py-16 h-36 mt-16 justify-center items-center text-black rounded-3xl tracking-wide font-semibold  shadow-2xl cursor-pointer transition duration-200 ease-in-out hover: transform hover:-translate-y-1 hover:scale-110">          
          <img src={logOut} />  
          <p class = "font-normal mt-2 ">Sign Out</p> </button>
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