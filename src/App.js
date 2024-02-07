import FormattedTime from './components/FormattedTime/FormattedTime';
import { useState, useEffect } from 'react';
import styles from './components/Button/Button.module.scss'
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
      <span>
      <FormattedTime time={time}/>
      <button className={styles.button} onClick={startTimer}>Start</button>
      <button className={styles.button} onClick={stopTimer}>Stop</button>
      <button className={styles.button} onClick={resetTimer}>Reset</button>
      </span>
  );

}

export default App;
