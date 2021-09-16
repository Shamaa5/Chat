import React, { useEffect } from 'react';
import s from './app.module.css';
import Contacts from './Contacts';
import Messages from './Messages';
import Profile from './Profile';
import { loadContacts } from '../../redux/ducks/contacts';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { loadProfile } from '../../redux/ducks/application';

function App() {
  const dispatch = useDispatch();
  const loadingContacts = useSelector((state) => state.contacts.loading);

  useEffect(() => {
    dispatch(loadContacts());
    dispatch(loadProfile());
  }, [dispatch]);

  if (loadingContacts) {
    return (
      <div className={s['cssload-container']}>
        <h2>Идет загрузка</h2>
        <div className={s['cssload-whirlpool']} />
      </div>
    );
  }
  return (
    <div className={s.container}>
      <Route path="/">
        <Contacts />
      </Route>
      <Route path="/:id?">
        <Messages />
        <Profile />
      </Route>
    </div>
  );
}

export default App;
