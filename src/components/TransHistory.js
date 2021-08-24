import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

 const SwitchAccountModal = (props) => {

    const closeSwitchAccountModal = (e) =>{
        e.preventDefault();
        props.setShowSwitchAccountModal(view => !view);
}; 

    return ( 
    <> {props.showSwitchAccountModal ? (
        <div class="modal-container z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div class="modal-overlay absolute w-full h-full bg-black opacity-80"></div>

    
        <div class="modal-container mb-60 mt-40 bg-white w-screen h-auto md:max-w-2xl mx-auto rounded-3xl shadow-lg z-50 ">
        <div class="modal-close absolute opacity-1 top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-lg z-50">
        </div>
        <div class="modal-content py-4 text-left px-6 z-50 w-full">
            <div class="flex justify-end items-center pb-3 ">
                <div class="modal-close cursor-pointer z-50">
                    <button onClick = {closeSwitchAccountModal} class = "text-2xl">Ⅹ</button>
                </div>
                </div>
                <div>
    
                <h1 class = "text-3xl text-center">Transactions:</h1>
                <div class = "flex flex-col justify-center items-center">
                        
             <div class="py-8 w-full">
             <div class="shadow overflow-y-auto rounded border-b border-gray-200 w-full">
          <table class="max-w-full bg-white">
             <thead class="bg-yellow-500 text-white">
             <tr>
          <th class="w-1/3 text-left py-3 px-14 uppercase font-semibold text-sm">Date</th>
          <th class="w-1/3 text-left py-3 uppercase font-semibold text-sm">Account Number</th>
          <th class="text-left py-3 uppercase font-semibold text-sm">Transaction</th>
          <th class="text-left py-3 px-8 uppercase font-semibold text-sm">Amount</th>
            </tr>
             </thead>
          <tbody class="text-gray-700">
       <tr>
        <td class="w-1/3 text-left py-3 px-8">05/25/2021</td>
        <td class="w-1/3 text-left py-3 px-4">112-330-2301</td>
        <td class="text-left py-3 px-4"><p>Deposit</p></td>
        <td class="text-left py-3 px-10"><p>$10,000 USD</p></td>
       </tr>
      <tr class="bg-gray-100">
      <td class="w-1/3 text-left py-3 px-8">05/25/2021</td>
        <td class="w-1/3 text-left py-3 px-4">112-330-2301</td>
        <td class="text-left py-3 px-4"><p>Withdraw</p></td>
        <td class="text-left py-3 px-10"><p>$120 USD</p></td>
      </tr>
      <tr>
      <td class="w-1/3 text-left py-3 px-8">05/25/2021</td>
        <td class="w-1/3 text-left py-3 px-4">112-330-2301</td>
        <td class="text-left py-3 px-4"><p>Withdraw</p></td>
        <td class="text-left py-3 px-10"><p>$136 USD</p></td>
      </tr>
      <tr class="bg-gray-100">
      <td class="w-1/3 text-left py-3 px-8">05/25/2021</td>
        <td class="w-1/3 text-left py-3 px-4">112-330-2301</td>
        <td class="text-left py-3 px-4"><p>Deposit</p></td>
        <td class="text-left py-3 px-10"><p>$242 USD</p></td>
      </tr>
      
         </tbody>
        </table>
       </div>
    </div>               
           <div>
            <button onClick = {closeSwitchAccountModal} class = "w-full border-2 border-black rounded-xl px-4 py-2">Cancel</button>
            </div>
        </div>
    </div>
</div>
 </div>
  </div>

    ) : null} </>
  )
};

    export default SwitchAccountModal