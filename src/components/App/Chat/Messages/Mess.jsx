import React from 'react';
import IncomingMessage from './IncomingMessage';
import OutGoingMessage from './OutGoingMessage';
import PropTypes from 'prop-types';

function Mess(props) {
  if (props.message.toUserId !== props.myId) {
    return (
      <OutGoingMessage
        message={props.message}
        key={props.message._id + 'outgoing'}
      />
    );
  }
  return (
    <IncomingMessage
      message={props.message}
      key={props.message._id + 'incoming'}
    />
  );
}
Mess.propTypes = {
  message: PropTypes.object,
  toUserId: PropTypes.string,
  myId: PropTypes.string,
};
export default Mess;
