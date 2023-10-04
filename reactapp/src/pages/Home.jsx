import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import backgroundImage from '../assets/img/last.avif';
import { useNavigate } from 'react-router-dom'; // Add this import statement

function Home() {
    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
        minWidth: '70vw',
      };
      const navigate = useNavigate();
      const handlesubmit = (e) => {
        navigate('/Settings');
      }

    return (
        <>
            <Layout />
            <div className='main-wrapperhome' style={containerStyle}>
                <div className='welcome-containerhome'>
                    <h1>ZenFlow Yoga</h1>
                    <button className='homebt' onClick={handlesubmit}> Explore Now</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;
