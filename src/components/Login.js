import React, { useState, useCallback } from "react";
import Swal from 'sweetalert2'
import {useHistory} from 'react-router-dom';


const Login = () => {

    const [userName] = useState("johnkennethbue")
    const [passWord] = useState("12345")
    const [userNameInput, setUserNameInput] = useState("")
    const [passWordInput, setPassWordInput] = useState("")

    const history = useHistory();
    const handleLogInClick = useCallback(() => history.push('/home'), [history]);
    
    const logInFunction = () => {
        if (userName !== userNameInput || passWord !== passWordInput){
            Swal.fire("Incorrect Username/Password, please try again.", '', 'error')
        } else {
            handleLogInClick();
        }
    }

    return (
    <div class="relative min-h-screen flex ">
    <div class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
      <div class="sm:w-1/2 xl:w-3/5 h-screen hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-yellow-300 text-white bg-no-repeat bg-cover relative">
        <div class="absolute bg-gradient-to-b from-yellow-500 to-yellow-800 opacity-75 inset-0 z-0"></div>
        <div class="w-full  max-w-md z-10">
          <div class="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">Online banking has never been this easier...</div>
          <div class="sm:text-sm xl:text-xl text-white-200 font-light"> By simply logging in your account,
          you can deposit, withdraw, and manage your other accounts just a few clicks! If you are
          a new user, just click the Sign Up button below and register for free!
          Feel the freedom of managing your savings easily, and do your transactions safely and securely
          with My Bank App.
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
        <div className = "flex flex-col justify-center items-center font-bold  mt-10 ml-10 mr-10 l:flex l:justify-center l:items-center l:z-10 md:flex md:justify-center md:items-center sm:flex sm:justify-center sm:items-center sm:z-20 md:mr-8">
            <h1 class = "text-center pb-3 text-3xl">Welcome to My Bank App!</h1>
            <h3 class = "text-center pb-10 font-light text-2xl">Please log in to proceed</h3>

            <div>
            <div id = "login-input-userName">
                <input class =  "w-full mt-14 content-center mr-40 text-base px-4 py-2 border-b-2 rounded-xl border-gray-500 focus:outline-none focus:border-yellow-700" 
                type = "text"
                onChange = {e => setUserNameInput(e.target.value)}
                placeholder = 'Username' 
                required />
            </div>

            <div className = "login-input-passWord">
                <input class = "w-full mt-5 content-center mr-40 text-base px-4 py-2 border-b-2 rounded-xl border-gray-500 focus:outline-none focus:border-yellow-700" 
                type = "password" 
                onChange = {e => setPassWordInput(e.target.value)}
                placeholder = 'Password' 
                required>
                </input>
            </div>
            <button onClick = {logInFunction} class= "w-full mt-20 flex justify-center bg-gradient-to-r from-yellow-500 to-yellow-700 hover:bg-gradient-to-r hover:from-yellow-700 hover:to-yellow-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                   Log in
            </button>
           

            <h2 class = "text-center pt-10 pb-4 text-xl">Don't have an account?</h2>
            <a href = "_blank" class = "ml-28 text-blue-500 text-xl  hover:underline">
                Sign up here
            </a>
            <footer>
            <p class = "text-right pt-24 font-thin text-sm"> ⓒ John Kenneth Bue @ Github/AvionSchool</p>
            </footer>
            </div>
        </div>
        </div> 
    )
}
export default Login;