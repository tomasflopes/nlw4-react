import React from "react";

import styles from "../styles/components/Profile.module.css";

const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/tomas050302.png" alt="Tomás" />
      <div>
        <strong>Tomás Lopes</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
};

export default Profile;
