import React from 'react';
import s from './message.module.css';

function MessagePreloader(props) {
  return (
    <div className={s['message-container']}>
      <div className={s['preloader-container']}>
        <div id="inTurnFadingTextG">
          <div id="inTurnFadingTextG_1" className={s.inTurnFadingTextG}>
            L
          </div>
          <div id="inTurnFadingTextG_2" className={s.inTurnFadingTextG}>
            o
          </div>
          <div id="inTurnFadingTextG_3" className={s.inTurnFadingTextG}>
            a
          </div>
          <div id="inTurnFadingTextG_4" className={s.inTurnFadingTextG}>
            d
          </div>
          <div id="inTurnFadingTextG_5" className={s.inTurnFadingTextG}>
            i
          </div>
          <div id="inTurnFadingTextG_6" className={s.inTurnFadingTextG}>
            n
          </div>
          <div id="inTurnFadingTextG_7" className={s.inTurnFadingTextG}>
            g
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagePreloader;
