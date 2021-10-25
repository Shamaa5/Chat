import React, { useEffect } from 'react';
import styles from './app.module.css';
import Contacts from './Contacts';
import Profile from './Profile';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { loadProfile } from '../../redux/ducks/application';
import Chat from './Chat';
import { loadContacts } from '../../redux/ducks/contacts';

function App() {
  const dispatch = useDispatch();
  const loadingContacts = useSelector((state) => state.contacts.loading);

  useEffect(() => {
    dispatch(loadContacts());
    dispatch(loadProfile());
  }, [dispatch]);

  if (loadingContacts) {
    return (
      <div className={styles['cssload-container']}>
        <h2>Идет загрузка</h2>
        <div className={styles['cssload-whirlpool']} />
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <Contacts />
      <Route path="/:id?">
        <Chat />
        <Profile />
      </Route>
    </div>
  );
}

export default App;
