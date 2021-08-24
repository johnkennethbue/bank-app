import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const SignUpForm = (props) => {

    const closeSignUpForm = (e) =>{
        e.preventDefault();
        props.setOpenSignUp(view => !view);
    }


const MySwal = withReactContent(Swal);
const confirmSignUp = () => {MySwal.fire({
    html: `<div class="text-2xl text-center mt-4"> 
    Please review account details: </div>` +
     `<div class = "text-xl text-left p-4"> <br/> First name:   ` + [props.firstNameDisplay] +
     `<br/> <div class = "mt-2"> Middle name:  ` + [props.middleNameDisplay] +
     `<br/> <div class = "mt-2"> Last name:  ` +  [props.lastNameDisplay]+
     `<br/> <div class = "mt-2"> Username:  ` +  [props.userNameDisplay]+
     `<br/> <div class = "mt-2"> Password:  ` +  [props.passWordDisplay],
    showCancelButton: true,
    confirmButtonText: `Create Account`,
    confirmButtonColor: "#FBBF24", 
    denyButtonText: `Discard`,

  }).then((result) => {
     if (props.firstNameDisplay === "" || props.middleNameDisplay === "" ||
      props.lastNameDisplay === "" || props.userNameDisplay === "" ||
      props.passWordDisplay === "") {
          Swal.fire('Please complete the form to proceed in creating an account.', '', 'error')
      } else {
        Swal.fire('Congratulations, your account has been created!', 'You may now log in using your new account.', 'success')
      }
    }
)}

    return (
    <> {props.openSignUp ? (
        
        <div class="modal-container z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div class="modal-overlay absolute w-full h-full bg-black opacity-80"> </div>
    
        <div class="modal-container px-2 mb-60 mt-40 bg-white w-auto h-auto md:max-w-md mx-auto rounded-3xl shadow-lg z-50 ">
        <div class="modal-close absolute opacity-1 top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-lg z-50">
        </div>
        <div class="modal-content py-4 text-left px-6 z-50 text-black">
            <div class="flex justify-end items-center pb-3 ">
                <div class="modal-close cursor-pointer z-50">
                    <button onClick = {closeSignUpForm} class = "text-2xl">Ⅹ</button>
                </div>
                </div>
                <div>

                <h1 class = "text-2xl text-center ">Please complete the form below:</h1>

                <div class = "flex flex-col justify-center items-center">
                        <input 
                        class =  "w-full mt-12 content-center text-base px-4 py-2 border-b-2 rounded-xl border-gray-500 focus:outline-none focus:border-yellow-700"                        
                        type = "text" 
                        onChange = {e => props.firstName(e.target.value)}
                        placeholder = "First Name" 
                        required
                        />
                        <input 
                        class =  "w-full mt-4 content-center text-base px-4 py-2 border-b-2 rounded-xl border-gray-500 focus:outline-none focus:border-yellow-700"                        
                        type = "text"
                        onChange = {e => props.middleName(e.target.value)}
                        placeholder = "Middle Name" 
                        required
                        />
                        <input 
                        class =  "w-full mt-4 content-center text-base px-4 py-2 border-b-2 rounded-xl border-gray-500 focus:outline-none focus:border-yellow-700"                        
                        type = "text"
                        onChange = {e => props.lastName(e.target.value)} 
                        placeholder = "Last Name" 
                        required
                        />
                        <input 
                        class =  "w-full mt-4 content-center text-base px-4 py-2 border-b-2 rounded-xl border-gray-500 focus:outline-none focus:border-yellow-700"                        
                        type = "text"
                        onChange = {e => props.userName(e.target.value)}
                        placeholder = "Set Username" 
                        required
                        />
                        <input 
                        class =  "w-full mt-4 content-center  text-base px-4 py-2 border-b-2 rounded-xl border-gray-500 focus:outline-none focus:border-yellow-700"                        
                        type = "text"
                        onChange = {e => props.passWord(e.target.value)}
                        placeholder = "Set Password" 
                        required
                        />
                <div class = "flex flex-row justify-end items-end mt-12 ml-48 mr-4 space-x-3.5 ">
                        <button 
                        onClick = {confirmSignUp}
                        class = "text-sm w-full h-auto border-2 border-black rounded-xl px-8 py-2 bg-yellow-400">
                            Confirm
                        </button>
                        <button 
                        onClick = {closeSignUpForm}
                        class = "text-sm w-full border-2 border-black rounded-xl px-4 py-2">
                            Cancel
                        </button>
                        </div>
                </div>
                </div>
            </div>
        </div>
        </div>

    ): null} 
    </>
    )
}


export default SignUpForm