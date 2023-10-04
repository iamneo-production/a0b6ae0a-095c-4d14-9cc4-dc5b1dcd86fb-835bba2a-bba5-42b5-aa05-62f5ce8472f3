import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/img/newbg.jpg';
import video from '../assets/Videos/video.mp4';
import '../assets/css/Timer.css';
import Layout from '../components/Layout';

function Workout() {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '100vh',
    minWidth: '100vw',
  };

  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);

      if (seconds === 30) {
        setIsCompleted(true);
        clearInterval(timer);
      }
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, seconds]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleRestart = () => {
    setSeconds(0);
    setIsCompleted(false);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div style={containerStyle}>
      <Layout />
      <video autoPlay muted style={{ width: '400px', height: '400px', paddingLeft: '500px' }}>
        <source src={video} type="video/mp4" />
      </video>
      <div className='num'>
        <h1 className='time'>
          {Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, '0')}
        </h1>
      </div>

      {isCompleted ? (
        <p className='complete'>Completed successfully!</p>
      ) : (
        <div>
          <button className="start-button" onClick={handleStart} disabled={isRunning}>
            Start
          </button>
          <button className="restart-button" onClick={handleRestart}>
            Restart
          </button>
          <button className="stop-button" onClick={handleStop}>
            Stop
          </button>
        </div>
      )}
    </div>
  );
}

export default Workout;
