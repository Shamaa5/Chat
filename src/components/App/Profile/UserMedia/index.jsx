import React from 'react';
import s from './media.module.css'

function UserMedia() {
  return (
    <div className={s['media-container']}>
      <div className={s['media-title']}>
        <h3>Media</h3>
      </div>
      <div className={s['media-content-container']}>
        <div className={s['media-content-file']}/>
        <div className={s['media-content-name']}>
          asdasd.pdf
        </div>
      </div>
    </div>
  );
}

export default UserMedia;
