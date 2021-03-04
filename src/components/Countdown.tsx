import React, { useEffect, useState } from 'react';

import styles from '../styles/components/Countdown.module.css';

const Countdown: React.FC = () => {
  const [time, setTime] = useState(0.05 * 60);
  const [isCountdownActive, setIsCountdownActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  // eslint-disable-next-line no-undef
  let countdownTimeout: NodeJS.Timeout;

  function startCountdown() {
    setIsCountdownActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsCountdownActive(false);
    setTime(25 * 60);
  }

  useEffect(() => {
    if (isCountdownActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(currentTime => currentTime - 1);
      }, 1000);
    } else if (isCountdownActive && time === 0) {
      setHasFinished(true);
    }
  }, [isCountdownActive, time]);

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

      {hasFinished ? (
        <button type="button" disabled className={styles.startCountdownButton}>
          Leave Cycle
        </button>
      ) : (
        <>
          {isCountdownActive ? (
            <button
              type="button"
              onClick={resetCountdown}
              className={`${styles.startCountdownButton} ${styles.startCountdownButtonActive}`}
            >
              Abandon Cycle
            </button>
          ) : (
            <button
              type="button"
              onClick={startCountdown}
              className={styles.startCountdownButton}
            >
              Start cycle
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Countdown;
