import { combineReducers } from 'redux';
import postsReducer from './posts';
import windowReducer from './window';
import adminReducer from './admin';

const reducers = combineReducers({
  posts: postsReducer,
  postState: windowReducer,
  adminState: adminReducer,
});

export default reducers;
