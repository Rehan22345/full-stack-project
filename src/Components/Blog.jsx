import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = () => {
  const notify = () => toast.error("Please fill in all fields!");
  const [data,setdata] = useState({
    title : "",
    description : "",
    brand : "",
  });
  const handlechange = (e)=>{
    const {value,name} = e.target
setdata({...data,[name] : value});
  }
  const handlesubmit = (e)=>{
    e.preventDefault();
    if(!data.name || !data.email || !data.password){
      notify()
    }else{
      console.log(data);
    }
    
 
  
  }
  return (
   <>
<nav className=" flex justify-center h-20 font-bold  items-center bg-slate-800 text-white ">

<ul className="flex gap-40">
<a href="/login">Login</a>
<a href="/register">Register</a>
<a href="/">Home</a>
</ul>

</nav>


   <div className=" bg-gray-800  w-full h-[89vh] flex justify-center items-center">
<form className=" w-80 h-80 bg-slate-200 rounded flex flex-wrap flex-col items-center justify-center" onSubmit={handlesubmit}>
  <input type="text" placeholder="enter your product name" name="title" onChange={handlechange}   className=" placeholder:text-gray-800 p-2 w-56 rounded"/> <br />
  <input type="text" placeholder="enter your product desc.." name="description" onChange={handlechange}   className=" placeholder:text-gray-800 p-2 w-56 rounded "/> <br />
  <input type="text" placeholder="enter your product brand" name="brand" onChange={handlechange}  className=" placeholder:text-gray-800 p-2 w-56 rounded " /> <br />
  <button className=" text-white bg-gray-800 p-2 w-56 rounded">Create Products</button>
</form>
</div>
<ToastContainer/>
   </>
  )
}

export default Blog