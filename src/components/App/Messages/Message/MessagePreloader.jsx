import React from 'react';
import styles from './message.module.css';

function MessagePreloader() {
  return (
    <div className={styles['message-container']}>
      <div className={styles['preloader-container']}>
        <div id="inTurnFadingTextG">
          <div id="inTurnFadingTextG_1" className={styles.inTurnFadingTextG}>
            L
          </div>
          <div id="inTurnFadingTextG_2" className={styles.inTurnFadingTextG}>
            o
          </div>
          <div id="inTurnFadingTextG_3" className={styles.inTurnFadingTextG}>
            a
          </div>
          <div id="inTurnFadingTextG_4" className={styles.inTurnFadingTextG}>
            d
          </div>
          <div id="inTurnFadingTextG_5" className={styles.inTurnFadingTextG}>
            i
          </div>
          <div id="inTurnFadingTextG_6" className={styles.inTurnFadingTextG}>
            n
          </div>
          <div id="inTurnFadingTextG_7" className={styles.inTurnFadingTextG}>
            g
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagePreloader;
