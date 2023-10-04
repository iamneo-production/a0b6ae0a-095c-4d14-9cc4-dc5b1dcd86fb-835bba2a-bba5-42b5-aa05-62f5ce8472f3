import React, { useState } from 'react';
 // Make sure to adjust the path to your CSS file
import '../assets/css/feed.css'
import backgroundImage from '../assets/img/feed.jpg';
import { useNavigate, Link } from 'react-router-dom'

function FeedbackForm() {
  const navigate=useNavigate();
  const submitHandler=(e)=>
  {
    navigate('/Home');
  }
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '100vh',
    minWidth: '100vw',
  };
  const [feedbackData, setFeedbackData] = useState({
    feedback: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the feedbackData to your server or perform any other action
    console.log('Feedback Data:', feedbackData);

    // After submission, reset the form and set submitted state to true if needed
    setFeedbackData({
      feedback: '',
      email: '',
    });
  };

  return (
    <div style={containerStyle}>
    <div className='feed' >
      <h2 className='feed1'>Feedback Form</h2>
      </div>
      <form  className='feed2' onSubmit={handleSubmit}>
        <label htmlFor="feedback">Feedback:</label>
        <textarea
          id="feedback"
          name="feedback"
          value={feedbackData.feedback}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>
        <div className='feed3'>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          className="feed-email"
          value={feedbackData.email}
          onChange={handleChange}
        />
        </div>
        <div >
        <button className='feed4' onClick={submitHandler}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FeedbackForm;