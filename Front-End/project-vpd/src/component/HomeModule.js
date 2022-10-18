import React from 'react'
import './HomeModule.css';
//import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import Dateclass from './Dateclass';

class homemodule extends React.Component {
   
 
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"https://localhost:44373/api/Vegetable/VegetableDetails")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
   
    render() {
      

         const {  items } = this.state;
        // if (!DataisLoaded) return <div>
        //     <h1> working on it!!</h1> </div> ;
   
        return (
        <div className = "App">
          <nav class="navbar navbar-light bg-dark">
      <div class="container-fluid ">
      <Link to="/HomeModule" class="vpd" ><h3 class="navbar-brand " >VPD </h3></Link>
         <div class="d-flex" >
          <button class='btn btn-primary offset'>
            <Link to="/Adminlogin" class="link">AdminLogin</Link>
            </button>
         </div>
     </div>
    </nav>
    <div>
       <h1 className='heading'>Welcome to VPD</h1>
       <Marquee  style={{color:'#ff0000',fontSize:'22px' }}>{<Dateclass />}</Marquee>
       </div>
         <div className="home">
          <table className="table table-striped">
            <thead style={{color:'green'}}>
            <th>VegetableId</th>
            <th>VegetableName</th>
            <th>VegetablePrice</th>
            </thead>
             {

                items.map((item) => ( 
                
                <tbody>
                  <tr>
                   <td> { item.vegetableId }</td>
                    <td>{ item.vegetableName } </td>
                   <td>{ item.vegetablePrice }Per/Kg </td>
                   </tr>
                  </tbody>
                ))
            }
            </table>
            </div>
        </div>
    );
    
}

}

export default homemodule