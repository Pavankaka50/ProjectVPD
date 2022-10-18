import React from 'react'
import{useState,useEffect} from 'react';
import './HomeModule.css';
import axios from 'axios';

function Updatedelete(){
    const[Users,fetchUsers]= useState([])
    const[vegetableId,setVegetableId]=useState([])
    const[vegetableName,setVegetableName]=useState([])
    const[vegetablePrice,setVegetablePrice]=useState([])
    const getData=()=>{
        fetch('https://localhost:44373/api/Vegetable/VegetableDetails')
        .then((res)=>res.json())
        .then((res)=>{
           
            fetchUsers(res)
        })
    }
    useEffect(()=>{
      getData()
    },[])
    
    function deleteOperation(id){
       if(window.confirm('Are you sure you want to delete product??')===true)
       {
        axios.delete('https://localhost:44373/api/Vegetable/Delete Vegetables?id='+id)
        .then(res=>{
            console.log(res.data)
            //alert("Product deleted Successfull!!")
            getData()
        })
       }
       else{
        getData()
       }
    }

    function updateOperation(id,name,price){
        setVegetableId(id)
        setVegetableName(name)
        setVegetablePrice(price)
    
    
    }

    function updateProduct(){
        let pData={vegetableId,vegetableName,vegetablePrice};
        axios.put('https://localhost:44373/api/Vegetable/UpdateVegetables',pData)
        .then(res=>{
            console.log(res.data)
            alert("Product Updated SuccessFull!!")
            getData()
        })
    }

    return(
       <div>
        <div className='home1'>
        <table className='table table-striped'>
            <thead style={{color:'green'}}>
            <th>VegetableId</th>
            <th>VegetableName</th>
            <th>VegetablePrice</th>
            <th>Status</th>
            </thead>
            {
                Users.map((item)=>
                    <tbody>
                    <tr>
                        <td >{item.vegetableId}</td>
                        <td >{item.vegetableName}</td>
                        <td >{item.vegetablePrice}Per/Kg</td>
                        <tr>
                        <td><button class="btn btn-success btn-outline-light btn-sm px-2" onClick={()=>updateOperation(item.vegetableId,item.vegetableName,item.vegetablePrice)}>Update</button></td>
                        <td><button class="btn btn-danger btn-outline-light btn-sm px-2" onClick={()=>deleteOperation(item.vegetableId)}>delete</button></td>
                        </tr>
                    </tr>
                    </tbody>
                )
            }
        </table>
        </div>
        <div className='card-body p-5 text-center '>
          <label>vegetableId</label><br />
          <input type="number" value={vegetableId} onChange={(e)=>{setVegetableId(e.target.value)}}></input><br />
          <label>vegetableName</label><br />
          <input type="text" value={vegetableName} onChange={(e)=>{setVegetableName(e.target.value)}}></input><br />
          <label>vegetablePrice</label><br />
          <input type="number" value={vegetablePrice} onChange={(e)=>{setVegetablePrice(e.target.value)}}></input><br />
          <button class="btn btn-success btn-outline-light btn-sm px-2" onClick={updateProduct}>Update product</button>
        </div>
        </div>
    
        
    )
}
export default Updatedelete