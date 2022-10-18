import React from 'react'
//import PropTypes from 'prop-types'

function Dateclass() {
  return (
   
    <h4>Vegetables prices at market on {fulldate}</h4>
    
  )
}

//Dateclass.propTypes = {}
var tdate=new Date();
var year=tdate.getFullYear();
var month=tdate.getUTCMonth()+1;
var day=tdate.getDate();
var fulldate=day+"-"+month+"-"+year;
export default Dateclass
