
export const WithdrawModal = ({showWithdrawModal, setShowWithdrawModal}) => {
    const closeWithdrawModal = (e) =>{
        e.preventDefault();
        setShowWithdrawModal(view => !view);
}; 

        return (
            <> {showWithdrawModal ? (          
    <div class="modal-container z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center">
    <div class="modal-overlay absolute w-full h-full bg-black opacity-80"> </div>

    <div class="modal-container mb-60 mt-40 bg-white w-3/4 h-1/2 md:max-w-md mx-auto rounded-3xl shadow-lg z-50 ">
    <div class="modal-close absolute opacity-1 top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-lg z-50">
    </div>
    <div class="modal-content py-4 text-left px-6 z-50">
        <div class="flex justify-end items-center pb-3 ">
            <div class="modal-close cursor-pointer z-50">
                <button onClick = {closeWithdrawModal} class = "text-2xl">Ⅹ</button>
            </div>
            </div>
            <div>

            <form class = "flex flex-col justify-center items-center">
                    <h1 class = "text-3xl">Enter the amount you want to withdraw:</h1>
                    <input class = "w-full h-12 pl-4 mt-12 border-2 border-black rounded-xl text-2xl outline-none " type = "number" placeholder = "Amount" required></input>
                    <div class = "flex flex-row justify-end items-end mt-16 ml-52 space-x-3.5 ">
                    <button class = "w-full border-2 border-black rounded-xl px-4 py-2 bg-yellow-400">Confirm</button>
                    <button onClick = {closeWithdrawModal} class = "w-full border-2 border-black rounded-xl px-4 py-2">Cancel</button>
                    </div>
            </form>
            </div>
        </div>
    </div>
    </div>
  
            ): null} </>
            )
        };