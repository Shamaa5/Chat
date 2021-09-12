import { applyMiddleware, combineReducers, createStore } from 'redux';
import { application, messages, contacts } from './ducks';
import thunk from 'redux-thunk';
import { createLogger } from "redux-logger/src";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReduser =  combineReducers({
  application: application,
  messages: messages,
  contacts: contacts,
})

export const store = createStore(rootReduser, applyMiddleware(thunk, logger))
