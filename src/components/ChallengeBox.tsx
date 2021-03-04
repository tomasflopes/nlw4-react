import React from 'react';

import styles from '../styles/components/ChallengeBox.module.css';

const ChallengeBox: React.FC = () => {
  const hasActiveChallenge = true;

  return (
    <div className={styles.container}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Win 400 xp</header>

          <main>
            <img src="icons/body.svg" alt="Exercise" />
            <strong>New challenge</strong>
            <p>Get up and cenas</p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFailedButton}>
              Failed
            </button>
            <button type="button" className={styles.challengeSucceededButton}>
              Completed
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Complete a cycle to get a challenge</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Grind your level completing challenges
          </p>
        </div>
      )}
    </div>
  );
};

export default ChallengeBox;
