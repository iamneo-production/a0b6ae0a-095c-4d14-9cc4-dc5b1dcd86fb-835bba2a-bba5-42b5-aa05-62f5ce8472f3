import React from 'react'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import Footer from '../components/Footer'
import d1 from '../assets/img/d1.png'

function Dashboard() {
    const user = useSelector(selectUser);
    const username = user.user && user.user.username ? user.user.username : 'Guest';
   
    return (
        <>
           
            <Layout />
            <div className='main-wrapper' >
                <div className='welcome-container1'>
                <img src={d1} alt='ex5' width={500} height={500} style={{position:"absolute",paddingLeft:"1%",bottom:"10%",left:'450px'}}></img>
                    <h1> Welcome {username} !</h1>
                    
                </div>
            </div>
        </>
    )
}

export default Dashboard