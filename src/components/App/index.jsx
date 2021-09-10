import React, { useEffect } from 'react';
import s from './app.module.css';
import Contacts from './Contacts';
import Messages from './Messages';
import Profile from './Profile';
import { loadContacts } from '../../redux/ducks/contacts';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch()
useEffect(() => {
  dispatch(loadContacts())
}, [dispatch])
  return (
    <div className={s.container}>
      <Route path='/'>
        <Contacts />
      </Route>
      <Route path='/:id?'>
        <Messages />
      </Route>
      <Profile />
    </div>
  );
}

export default App;
