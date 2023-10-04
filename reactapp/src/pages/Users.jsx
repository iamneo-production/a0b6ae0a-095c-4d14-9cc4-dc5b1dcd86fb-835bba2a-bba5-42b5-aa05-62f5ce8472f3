import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import '../assets/css/User.css';
import backgroundImage from '../assets/img/live.avif';
import {useNavigate } from "react-router-dom";

function Users() {
    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
        minWidth: '100vw',
      };
      const navigate=useNavigate();
      const paymentHandler=()=>{
          navigate('/paymentyogi');
    
  };

  return (
    <>
      <Layout />
      <div className='qq'>
        <div style={containerStyle}>
        <h2 className='live-head'>Upcoming Live Sessions...</h2>
        <div className='live-sessions-container'>
          <div className='eve1'>
            <div className='eve-container'>
              <h4>Power Yoga</h4><br/>
              <p>Date: 10/11/2023</p>
              <p>Time: 10am to 12pm</p>
              <p>Price: Rs.499</p><br/>
              <button   className='user1' onClick={paymentHandler}>Book Now</button>
            </div>
          </div>

          <div className='eve2'>
            <div className='eve-container'>
              <h4>Yoga for Abs</h4><br/>
              <p>Date: 15/11/2023</p>
              <p>Time: 6pm to 8pm</p>
              <p>Price: Rs.499</p><br/>
              <button className='user3' onClick={paymentHandler}>Book Now</button>
            </div>
          </div>

          <div className='eve3'>
            <div className='eve-container'>
              <h4>Meditation for Beginners</h4><br/>
              <p>Date: 20/11/2023</p>
              <p>Time: 5am to 7am</p>
              <p>Price: Rs.499</p><br/>
              <button className='user2' onClick={paymentHandler}>Book Now</button>
            </div>
          </div>
        </div>
        </div>
        </div>
      
      <Footer/>
    </>
  );
}

export default Users;
