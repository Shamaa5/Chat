import { applyMiddleware, combineReducers, createStore } from 'redux';
import { application, messages, contacts } from './ducks';
import thunk from 'redux-thunk';
import { createLogger } from "redux-logger/src";
import {composeWithDevTools} from "redux-devtools-extension"

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReduser =  combineReducers({
  application: application,
  messages: messages,
  contacts: contacts,
})

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk, logger)))
