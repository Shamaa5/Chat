import React from 'react';
import styles from './media.module.css';

function UserMedia(props) {
  return (
    <div className={styles['media-container']}>
      <div className={styles['media-title']}>
        <h3>Media</h3>
      </div>
      <div className={styles['media-content-container']}>
        <div className={styles['media-content-file']} />
        <div className={styles['media-content-name']}>file.pdf</div>
      </div>
    </div>
  );
}

export default UserMedia;
