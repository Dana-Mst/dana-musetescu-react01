import { combineReducers } from 'redux';
import authReducer from './authReducers';
import uiReducer from './uiReducer';

const reducers = combineReducers({
  ui: uiReducer,
  auth: authReducer,
});

export default reducers;
