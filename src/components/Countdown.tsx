import React, { useState } from "react";

import styles from "../styles/components/Countdown.module.css";

const Countdown: React.FC = () => {
  const [time, setTime] = useState(25 * 60);

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>2</span>
          <span>5</span>
        </div>
        <span>:</span>
        <div>
          <span>0</span>
          <span>0</span>
        </div>
      </div>

      <button type="button" className={styles.startCountdownButton}>
        Start Cycle
      </button>
    </div>
  );
};

export default Countdown;
