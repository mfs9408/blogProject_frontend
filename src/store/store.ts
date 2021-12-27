import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user';
import postDataReducer from './postData';

const reducer = combineReducers({
  user: userReducer,
  postData: postDataReducer,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof reducer>;

export default store;
