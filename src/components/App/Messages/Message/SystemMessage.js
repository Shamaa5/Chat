import React from 'react';
import PropTypes from 'prop-types';
import s from './message.module.css'

function SystemMessage(props) {
  return (
    <div className={s['message-info']}>
      <h3>{props.message.content}</h3>
    </div>
  );
}

export default SystemMessage;

SystemMessage.propTypes = {
  message: PropTypes.object,
  content: PropTypes.string,
}