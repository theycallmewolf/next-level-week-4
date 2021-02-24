import { useCallback, useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export default function Countdown() {
  const [time, setTime] = useState(.05 * 60);
  const [isActive, setIsActive] = useState(false);

  const minutes =  Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
  
  const startCountDown = useCallback(() => {
    setIsActive(true);
  }, []);
  
  const resetCountDown = useCallback(() => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(.05 * 60);
  }, []);
  
  useEffect(() => {
    if(isActive && time > 0) {
      countdownTimeout = setTimeout(() =>{
        setTime(time -1);
      }, 1000);
    }
  }, [isActive, time]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { isActive ? (
        <button 
          type="button"
          onClick={resetCountDown}
          className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
            Cancelar
        </button>
      ) : (
        <button 
          type="button"
          onClick={startCountDown}
          className={styles.countdownButton}>
            Começar
        </button>
      )}
    </div>
  )
}