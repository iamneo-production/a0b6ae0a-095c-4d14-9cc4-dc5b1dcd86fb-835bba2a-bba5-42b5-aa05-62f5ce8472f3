import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import '../assets/css/Faq.css';
const Singleques = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className='question'>
      <header>
        <h4 className='myfaq'>{title}</h4>
        <button className="btnm" onClick={toggleInfo}>{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          
        </button>
      </header>
      {showInfo && <p className='myp'>{info}</p>} 
    </article>
  );
};

export default Singleques;
