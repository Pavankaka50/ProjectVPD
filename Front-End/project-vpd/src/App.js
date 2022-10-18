import React from 'react'
import HomeModule from './component/HomeModule';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import './App.css';
import AdminDashboard from './component/AdminDashboard';
//import adminlogin from './component/Adminlogin';
//import Mainpage from './Mainpage';
import Adminlogin from './component/Adminlogin';
import Addproduct from './component/Addproduct';
import Updatedelete from './component/Updatedelete';
function App() {
  return (
    <>
    <BrowserRouter >
     <Routes >
       <Route index  element={<HomeModule />} />
       <Route path="/admindashboard" element={<AdminDashboard />} />
       <Route path="/Adminlogin" element={<Adminlogin/>} />
       <Route path="/homemodule" element={<HomeModule/>} />
       <Route path="/Addproduct" element={<Addproduct/>} />
       <Route path="/Updatedelete" element={<Updatedelete />} />
     </Routes>
    </BrowserRouter>
  </>
    
  );
}
/*const FormButton=(props)=>{
  return(
    <button className="btn btn-primary"><a href='/component/AdminDashboard'>{props.title}</a></button>
  )
}*/

export default App;
