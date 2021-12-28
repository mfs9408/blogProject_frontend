import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user';
import postDataReducer from './postData';
import searchDataReducer from './searchData';

const reducer = combineReducers({
  user: userReducer,
  postData: postDataReducer,
  searchData: searchDataReducer,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof reducer>;

export default store;
