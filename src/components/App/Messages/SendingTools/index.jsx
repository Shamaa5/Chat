import React from 'react';
import s from './sending.module.css'

function SendingTools(props) {
  return (
    <div className={s.tools}>
      <input type='text' placeholder='Введите сообщение' className={s.input}/>
      <div>
        1
      </div>
      <div>
        2

      </div>
    </div>
  );
}

export default SendingTools;