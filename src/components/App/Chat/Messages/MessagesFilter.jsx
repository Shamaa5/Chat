import React from 'react';
import PropTypes from 'prop-types';
import SystemMessage from './SystemMessage';
import Mess from './Mess';

function MessagesFilter(props) {
  if (props.message.type === 'info') {
    return (
      <SystemMessage
        message={props.message}
        myId={props.myId}
        key={props.message._id + 'system'}
      />
    );
  }
  return <Mess message={props.message} myId={props.myId} />;
}
MessagesFilter.propTypes = {
  message: PropTypes.object,
  type: PropTypes.string,
  myId: PropTypes.string,
};
export default MessagesFilter;
