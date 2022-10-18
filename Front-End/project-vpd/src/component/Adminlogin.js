import React from 'react'
import './Adminlogin.css';
import { Link } from 'react-router-dom';
//import { version } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard';

const Adminlogin = () => {
const [username, setMessge]=useState(' ');
const [typePasswordX, settypePasswordX]=useState(' ');

const handleChange=event=>{
setMessge(event.target.value);
};

const passwordSet=event=>{
  settypePasswordX(event.target.value);
};

function Validtions(){
  
    if(username===logindetails.username && typePasswordX===logindetails.password)
    {
     return 1;
    }
    else{
      return 0;
    }

}
  const navigate=useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const data=Validtions();
    if(data===1)
    {
      localStorage.setItem('uname',username);
      alert("Login SuccessFull!!");
      navigate('/Admindashboard');
    }
    else{
      alert("please enter correct details!!!");
    }
   
  }
  
   const logindetails={
     username:'Admin123',
     password:'Admin@123'
   };
  return (
 
        <section class="vh-100 gradient-custom bg-dark">
          <form onSubmit={handleSubmit}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="border border-danger card bg-dark  text-white" style={{borderRadius: '1rem '}}>
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Admin Login</h2>
              <p class="text-white-50 mb-5">Please enter your usernme and password!</p>

              <div class="form-outline form-white mb-4">
                <input type="text" id="username"  class="form-control form-control-lg" onChange={handleChange} />
                <label class="form-label" for="username">UserName</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX"  class="form-control form-control-lg" onChange={passwordSet} />
                <label class="form-label" for="typePasswordX">Password</label>
              </div>

              

              <button class="btn btn-outline-light btn-lg px-5" type="submit" >Login</button>
        
            </div>
            
            <h5 ><Link to="/HomeModule" className="h5">Back to HomePage</Link></h5>
            
          </div>
          
        </div>
        
      </div>
    </div>
    
  </div>
  </form>
</section>
   
  )
}


export default Adminlogin