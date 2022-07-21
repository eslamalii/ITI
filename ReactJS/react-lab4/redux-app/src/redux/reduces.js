import { combineReducers } from 'redux';
import { CounterRedux } from './CounterRedux';
import UsersReducer from './usersReducer';

export default combineReducers({
  counter: CounterRedux,
  users: UsersReducer,
});
