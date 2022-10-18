import React from 'react'
import './HomeModule.css';

import {Link} from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import Dateclass from './Dateclass';

import { Dropdown } from 'react-bootstrap';
import { FaUser} from 'react-icons/fa';
import './HomeModule';
import './Addproduct';
import Updatedelete from './Updatedelete';
//import axios from 'axios';

class admindashboard extends React.Component {
   
 
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    
    render() {
      

        // const {  items } = this.state;
        
         const admin=localStorage.getItem('uname');
        // if (!DataisLoaded) return <div>
        //     <h1> working on it!!</h1> </div> ;

   
        return (
        <div className = "App">
          <nav class="navbar navbar-light bg-dark">
      <div class="container-fluid ">
      <Link to="/HomeModule" class="vpd" ><h3 class="navbar-brand " >VPD </h3></Link>
         <div class="d-flex" >
           {/* <h3 style={{color:'green'}}>{admin}</h3> */}
           <Dropdown>
            
            <Dropdown.Toggle variant='success' id='dropdown-basic'>
              <FaUser />{admin}
            </Dropdown.Toggle>
            <Dropdown.Menu >
            <Dropdown.Item href="/Addproduct" style={{color:'green'}}>Add Product</Dropdown.Item>
              <Dropdown.Item href="/homemodule" style={{color:'green'}}>Logout</Dropdown.Item>
            </Dropdown.Menu>
           </Dropdown>
         </div>
     </div>
    </nav>
    <div>
       <h1 className='heading'>Welcome to Owner</h1>
        <Marquee  style={{color:'#ff0000',fontSize:'22px' }}>{<Dateclass />}</Marquee> 
       </div>
      
        <Updatedelete />
        
      </div>
    );
    
}

}

export default admindashboard
