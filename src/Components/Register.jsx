import { useState } from "react"
import Navbar from "./index";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  const notify = () => toast.error("Please fill in all fields!");
  const [data,setdata] = useState({
    name : "",
    email : "",
    password : "",
  });
  const handlesubmit = (e)=>{
    e.preventDefault()
    if(!data.name || !data.email || !data.password){
      notify()
    }else{
      console.log(data);
    }
    
 
  }

  const handlechange = (e)=>{
    const {value , name} = e.target;
setdata({...data,[name] : value})
  }
  return (
<>
<Navbar data="Create Blog"/>
<div className=" bg-gray-800  w-full h-[89vh] flex justify-center items-center">
<form className=" w-80 h-80 bg-slate-200 rounded flex flex-wrap flex-col items-center justify-center" onSubmit={handlesubmit}>
  <input type="text" placeholder="enter your name" name="name" value={data.name}  className=" placeholder:text-gray-800 p-2 w-56 rounded" onChange={handlechange}/> <br />
  <input type="text" placeholder="enter your email" name="email" value={data.email} className=" p-2 w-56 rounded " onChange={handlechange}/> <br />
  <input type="text" placeholder="enter your password" name="password" value={data.password} className=" p-2 w-56 rounded " onChange={handlechange}/> <br />
  <button className=" text-white bg-gray-800 p-2 w-56 rounded">Register</button>
</form>
</div>
<ToastContainer/>

</>
  )
}

export default Register