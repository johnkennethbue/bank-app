import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const TransferModal = (props) => {
    const closeTransferModal = (e) =>{
        e.preventDefault();
        props.setShowTransferModal(view => !view);
}; 

// const MySwal = withReactContent(Swal)
// const confirmTransfer = () => {MySwal.fire({
//     title: 'Do you want to save the changes?',
//     showCancelButton: true,
//     confirmButtonText: `Confirm`,
//     confirmButtonColor: "#FBBF24",   
//     denyButtonText: `Cancel`,
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire('Fund transfer successful', '', 'success')
//     } else if (result.isDenied) {
//       Swal.fire('Transaction Cancelled', '', 'info')
//     }
//   })}

    return ( 
    <> {props.showTransferModal ? (
        <div class="modal-container z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div class="modal-overlay absolute w-full h-full bg-black opacity-80"> </div>
    
        <div class="modal-container mb-60 mt-40 bg-white w-auto h-auto md:max-w-md mx-auto rounded-3xl shadow-lg z-50 ">
        <div class="modal-close absolute opacity-1 top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-lg z-50">
        </div>
        <div class="modal-content py-4 text-left px-6 z-50">
            <div class="flex justify-end items-center pb-3 ">
                <div class="modal-close cursor-pointer z-50">
                    <button onClick = {closeTransferModal} class = "text-2xl">Ⅹ</button>
                </div>
                </div>
                <div>
    
                <form class = "flex flex-col justify-center items-center">
                        <h1 class = "text-3xl">Click an account to switch:</h1>
                        <button class = "w-auto h-12 px-16 mt-8 border-2 border-black rounded-xl text-xl outline-none">Sample</button>
                        <button class = "w-auto h-12 px-16 mt-4 border-2 border-black rounded-xl text-xl outline-none">Sample</button>
                        <button class = "w-auto h-12 px-16 mt-4 border-2 border-black rounded-xl text-xl outline-none">Sample</button>
                                            
                        <div class = "flex flex-row justify-end items-end mt-12 ml-52 space-x-3.5 ">
                        <button type = "submit" class = "w-full border-2 border-black rounded-xl px-4 py-2 bg-yellow-400">Confirm</button>
                        <button onClick = {closeTransferModal} class = "w-full border-2 border-black rounded-xl px-4 py-2">Cancel</button>
                        </div>
                </form>
                </div>
            </div>
        </div>
        </div>
        ) : null} </>
        )
    };