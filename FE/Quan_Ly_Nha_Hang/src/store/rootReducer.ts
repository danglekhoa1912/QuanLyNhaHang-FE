import {combineReducers} from 'redux';
import layoutSlice from './layout';
import user from './user';

const rootReducer = combineReducers({
  layout: layoutSlice,
  user: user,
});

export default rootReducer;
