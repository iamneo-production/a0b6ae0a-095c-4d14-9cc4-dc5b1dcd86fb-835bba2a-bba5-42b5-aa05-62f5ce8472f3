import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import ex5 from '../assets/img/chest.jpg';
import ex6 from '../assets/img/abs.jpg'
import ex7 from "../assets/img/lat.jpg";
import ex8 from '../assets/img/leg.jpg'
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/img/bg1.webp';


function Settings() {
    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '130vh',
        minWidth: '10vw',
      };
    const navigate=useNavigate();
    const submitHandler=(e)=>{
        navigate('/Workout');
    }
    
    return (
        <>
            <Layout/>
            <div className='main-wrapperplan' style={containerStyle}>
                <div className='welcome-containerplan'>
                    <h1>Workout Plan</h1>
                </div>
            </div>
            <div className='workoutphoto'>
            <img src={ex5} alt='ex5' width={280} height={280} style={{position:"absolute",paddingLeft:"15%",bottom:"35%"}}></img>
            <button  className='chestbtn1' onClick={submitHandler}>chest</button>
            <img src={ex6} alt='ex5' width={280} height={280} style={{position:"absolute",paddingLeft:"45%",bottom:"35%"}} ></img>
            <button className='chestbtn2' onClick={submitHandler}>Abs</button>
            <img src={ex7} alt='ex5' width={280} height={280} style={{position:"absolute",paddingLeft:"75%",bottom:"35%"}} ></img>
            <button className='chestbtn3' onClick={submitHandler}>Lat</button>
            <img src={ex8} alt='ex5' width={280} height={280} style={{position:"absolute",paddingLeft:"45%",top:"80%"}} ></img><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <img src={ex7} alt='ex5' width={280} height={280} style={{position:"absolute",paddingLeft:"75%",bottom:"35%"}} ></img>
            <button className='chestbtn4' onClick={submitHandler}>Leg</button>

            </div>
            
            <Footer/>
           
        </>
    );
}

export default Settings;
