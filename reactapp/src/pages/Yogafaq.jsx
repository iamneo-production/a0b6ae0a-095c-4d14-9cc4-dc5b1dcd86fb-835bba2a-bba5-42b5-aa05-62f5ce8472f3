import React, { useState } from 'react';
import data from './data';
import Singleques from './Singleques';
import '../assets/css/Faq.css'
import backgroundImage from '../assets/img/faqimg.jpg';
import { useNavigate, Link } from 'react-router-dom'


function Yogafaq() {
  const navigate=useNavigate();
  const [questions, setQuestions] = useState(data);
  const backHandler=(e)=>{
    navigate('/Home');
  }
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '100vh',
    margintop: '-80px',
    minWidth: '100vw',
    
  };

  return (
    <main>
    <div className='ii'>
      <div className='container07' style={containerStyle}>
      
        <h1 className='faqh'>Frequently Asked Questions</h1>
        <section>
          {questions.map((question) => (
            <Singleques key={question.id} {...question} />
          ))}
        </section>
        <button onClick={backHandler} className='back-faq'>Back</button>
      </div>
      </div>
      
    </main>
  );
}

export default Yogafaq;
