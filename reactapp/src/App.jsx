import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Workout from './pages/Workout';
import Yogafaq from './pages/Yogafaq';
import Feedback from './pages/Feedback';
import BookingSuccess from './pages/BookingSucess';
import Sucess from './pages/Sucess';
import Paymentyogi from './pages/Paymentyogi'
import Privacy from './pages/Privacy';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/Register' element={<Register />} />
        <Route exact path='/Home' element={<Home />} />
        <Route exact path='/Dashboard' element={<Dashboard />} />
        <Route exact path='/Users' element={<Users />} />
        <Route exact path='/Settings' element={<Settings />} />
        <Route exact path='/Terms' element={<Terms />} />
        <Route exact path='/Workout' element={<Workout />} />
        <Route exact path='/paymentyogi' element={<Paymentyogi />} />
        
        <Route exact path='/Yogafaq' element={<Yogafaq />} />
        <Route exact path='/Feedback' element={<Feedback/>} /> 
        <Route exact path='/BookingSucess' element={<BookingSuccess/>} /> 
        <Route exact path='/Sucess' element={<Sucess/>} /> 
        <Route exact path='/Privacy' element={<Privacy/>} />
     
      </Routes>
    </>
  );
}

export default App;
