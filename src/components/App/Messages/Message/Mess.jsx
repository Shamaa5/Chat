import React from 'react';
import IncomingMessage from './IncomingMessage';
import OutGoingMessage from './OutGoingMessage';
import PropTypes from 'prop-types';

function Mess(props) {
  const myId = '5f2ea3801f986a01cefc8bcd';
  if (props.message.toUserId !== myId) {
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
};
export default Mess;
