import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import {Link} from 'react-router-dom'
import '../assets/css/Tobar.css';

function Topbar() {
    const user = useSelector(selectUser);
    const username = user.user && user.user.username ? user.user.username : 'Guest';

    return (
        <>
            <div className='topbar'>
                <h1 className='user username-color'>{username}</h1>
                <div className='topbutton'>
                    <Link  to="/Yogafaq">FAQ</Link>
                </div>
                <div className='topbutton2'>
                    <Link  to="/Feedback">Feedback</Link>
                </div>
               

            </div>
        </>
    )
}

export default Topbar