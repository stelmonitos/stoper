import FormattedTime from './components/FormattedTime';
import { useState, useEffect } from 'react';

function App() {
    const [time, setTime] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        return () => {
            clearInterval(intervalId);
        };
    }, [intervalId]);

    const startTimer = () => {
        if (intervalId) return;
        const id = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1);
        setIntervalId(id);
    };

    const stopTimer = () => {
        clearInterval(intervalId);
        setIntervalId(null);
    };

    const resetTimer = () => {
        clearInterval(intervalId);
        setIntervalId(null);
        setTime(0);
    }

  return(
      <div>
      <FormattedTime time={time} />
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
      </div>
  );

}

export default App;
