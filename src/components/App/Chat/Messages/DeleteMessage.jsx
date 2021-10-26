import React from 'react';
import styles from './message.module.css';
import { useDispatch } from 'react-redux';
import { deleteMessage } from '../../../../redux/ducks/messages';
import PropTypes from 'prop-types';

function DeleteMessage(props) {
  const dispatch = useDispatch();
  const id = props.message._id;

  const handleDeleteMessage = (id) => {
    dispatch(deleteMessage(id));
  };
  return (
    <div
      className={styles['delete-message']}
      onClick={() => handleDeleteMessage(id)}
    >
      Х
    </div>
  );
}
DeleteMessage.propTypes = {
  message: PropTypes.object,
};
export default DeleteMessage;
