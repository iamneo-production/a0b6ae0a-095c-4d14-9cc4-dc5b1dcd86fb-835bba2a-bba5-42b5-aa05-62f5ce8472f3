import React from 'react'
import Layout from '../components/Layout'
import { Link, Navigate, useNavigate } from "react-router-dom";
import '../assets/css/Payment.css'
import backgroundImage from '../assets/img/pay07.avif';


function Payment() {
    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
        minWidth: '70vw',
      };
    const [value, setValue] = React.useState();
    const navigate=useNavigate();
    const payHandler=(e)=>{

        navigate('/Sucess');
    }
    const handleChange = (event) => {
   
      setValue(event.target.value);
   
    };
  
    return (
        <>

            <Layout />
            <div className='main-wrapper' style={containerStyle}>
                <div className='apply'>
                </div>
                <div className='bill-container'>
   <div className='billform'>
   <div className='billhead'>
   <h1>Payment</h1>
   </div>
  
   <br/>
   <label>
   SESSION TITLE : <input type  ="name" placeholder="Session Name" className='invoice'/>
   </label>
   <label>
   PAYMENT TYPE : 
   <select value={value} onChange={handleChange}>
   <option value="">Select Payment Type</option>
   <option value="cash">cash</option>
   <option value="card">card</option>
   </select>
   </label>
   <br/>
   <label>AMOUNT : <input type="number" placeholder="amount" className='invoice'/>
   </label>
   <br/>
   <br/>
   <button className='list1' onClick={payHandler}>
   PAY
   </button>
  
   </div>
   </div>
   </div>
            
        </>
    )
}

export default Payment