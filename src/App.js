import { useState } from 'react';
import FormattedTime from './components/FormattedTime';

function App() {
    const [time, setTime] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const startTimer = () => {
        if (intervalId) return;
        const id = setInterval(() => {
            setTime(prevTime => prevTime + 10);
        }, 10);
        setIntervalId(id);
    };
    
  return(
      <div>
      <FormattedTime time={time} />
      <button onClick={startTimer}>Start</button>
      <button>Stop</button>
      <button>Reset</button>
      </div>
  );

}

export default App;
