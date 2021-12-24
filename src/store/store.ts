import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user';
import contentReducer from './postContent';

const reducer = combineReducers({
  user: userReducer,
  content: contentReducer,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof reducer>;

export default store;
