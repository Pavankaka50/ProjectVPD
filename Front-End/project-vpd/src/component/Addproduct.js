import React from 'react'
import './Adminlogin.css';
import { Link } from 'react-router-dom';
//import { version } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard';
//import axios from 'axios';

const Addproduct = () => {
//const [username, setMessge]=useState(' ');
//const [typePasswordX, settypePasswordX]=useState(' ');
const [ setPosts] = useState([]);
const [vegetableName,setVegetableName]=useState(' ');
const [vegetablePrice,setVegetablePrice]=useState(' ');

const navigate=useNavigate();
function validations(){
  if(vegetableName===" " || vegetablePrice===" ")
  {
    return 0;
  }
  
  else{
    return 1;
  }

}
const handleSubmit = (e) => {
  e.preventDefault();
  const vData=validations();
  if(vData===1)
  {
    fetch('https://localhost:44373/api/Vegetable/Add Vegetables', {
     method: 'POST',
     body: JSON.stringify({
        VegetableName: vegetableName,
        VegetablePrice: vegetablePrice,
        
     }),
     headers: {
        'Content-type': 'application/json; charset=UTF-8',
     },
     
  })
     .then((res) => res.json())
     .then((post) => {
        setPosts((posts) => [post, ...posts]);
        setVegetableName('');
        setVegetablePrice('');
     })
     
     .catch((err) => {
        console.log(err.message);
     });
     alert("Product added Successfull!");
        navigate('/Admindashboard');
  }
  else{
    alert("please Fill Data");
  }
  
};

  
  return (
 
        <section class="vh-100 gradient-custom bg-light">
          <form onSubmit={handleSubmit}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="border border-success card bg-dark  text-white" style={{borderRadius: '1rem '}}>
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Add Product</h2>

              <div class="form-outline form-white mb-4">
                <input type="text" id="VegetableName"  class="form-control form-control-lg" value={vegetableName} onChange={(e)=>{setVegetableName(e.target.value)}}/>
                <label class="form-label" for="VegetableName">ProductName</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="number" id="VegetablePrice"  class="form-control form-control-lg" value={vegetablePrice} onChange={(e)=>{setVegetablePrice(e.target.value)}} />
                <label class="form-label" for="VegetablePrice">ProductPrice</label>
              </div>

              

              <button class="btn btn-outline-light btn-lg px-5" type="submit">Add Prodduct</button>
        
            </div>
            
            <h5 ><Link to="/AdminDashboard" className="h5">Back to AdminPage</Link></h5>
            
          </div>
          
        </div>
        
      </div>
    </div>
    
  </div>
  </form>
</section>
   
  )
}


export default Addproduct