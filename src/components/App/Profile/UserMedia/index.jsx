import React from 'react';
import s from './media.module.css';

function UserMedia(props) {
  return (
    <div className={s['media-container']}>
      <div className={s['media-title']}>
        <h3>Media</h3>
      </div>
      <div className={s['media-content-container']}>
        <div className={s['media-content-file']} />
        <div className={s['media-content-name']}>file.pdf</div>
      </div>
    </div>
  );
}

export default UserMedia;
