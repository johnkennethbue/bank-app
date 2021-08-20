import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export const WithdrawModal = (props) => {

const [withdrawAmount, setWithdrawAmount] = useState(0)

useEffect(() => {
   props.onChange(withdrawAmount)  
   return;
}, [withdrawAmount]);

const closeWithdrawModal = (e) =>{
    e.preventDefault();
    props.setShowWithdrawModal(view => !view);
}; 

const MySwal = withReactContent(Swal)
const confirmWithdraw = () => {MySwal.fire({
    title: `Are you sure you want to withdraw` + " " + "$" + [withdrawAmount] + " " + "USD" + " " + "to your account?",
    showCancelButton: true,
    confirmButtonText: `Confirm`,
    confirmButtonColor: "#FBBF24", 
    denyButtonText: `Cancel`,
  }).then((result) => {
    if (result.isConfirmed && props.newBalance < props.oldBalance) {
        Swal.fire("Sorry, you don't have enough balance on your account.", '', 'warning')

  } else if (result.isConfirmed && props.newBalance >= props.oldBalance && props.newBalance > 0) {
        props.withdraw();
        Swal.fire('Withdraw Successful', '', 'success');
        setWithdrawAmount(0);
        
  } else if (result.isConfirmed && withdrawAmount === 0) {
    Swal.fire("Minimum withdraw amount: $1 USD", '', 'error')

  } else if (result.isDenied) {
    Swal.fire('Transaction Cancelled', '', 'info')
  } 
  })}

        return (
            <> {props.showWithdrawModal ? (          
    <div class="modal-container z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center">
    <div class="modal-overlay absolute w-full h-full bg-black opacity-80"> </div>

    <div class="modal-container px-2 mb-60 mt-40 bg-white w-auto h-auto md:max-w-md mx-auto rounded-3xl shadow-lg z-50 ">
    <div class="modal-close absolute opacity-1 top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-8 text-white text-lg z-50">
    </div>
    <div class="modal-content py-4 text-left px-6 z-50">
        <div class="flex justify-end items-center pb-3 ">
            <div class="modal-close cursor-pointer z-50">
                <button onClick = {closeWithdrawModal} class = "text-2xl">Ⅹ</button>
            </div>
            </div>
            <div>

            <div class = "flex flex-col justify-center items-center">

                    <h1 class = "text-2xl">Enter the amount you want to withdraw: ($USD)</h1>

                    <input class = "w-full h-12 pl-4 mt-8 border-2 border-black rounded-xl text-xl outline-none " 
                    type = "number" 
                    placeholder = "Amount" 
                    required
                    onChange = {e => setWithdrawAmount(+e.target.value)} 
                    />

                    <div class = "flex flex-row justify-end items-end mt-12 ml-48 mr-4 space-x-3.5 ">

                    <button onClick = {confirmWithdraw} 
                    type = "submit" 
                    class = "w-full border-2 border-black rounded-xl px-4 py-2 bg-yellow-400">Confirm</button>

                    <button onClick = {closeWithdrawModal} 
                    class = "w-full border-2 border-black rounded-xl px-4 py-2">Cancel</button>

                    </div>
            </div>
            </div>
        </div>
    </div>
    </div>
  
            ): null} </>
            )
        };