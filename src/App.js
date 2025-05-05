import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import './App.css';


function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='clock-container'>
      <h1>Welcome to Clocks</h1>
      <p>Current Time: {format(currentTime, 'PPpp')}</p>
    </div>
  );
}

export default App;
