import {createStore } from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export default () => {
  return createStore(
    rootReducer,
    composeWithDevTools()
  );
};
