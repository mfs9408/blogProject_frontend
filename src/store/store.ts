import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user';
import postDataReducer from './postData';
import searchDataReducer from './searchData';
import metaDataReducer from './meta';

const reducer = combineReducers({
  user: userReducer,
  postData: postDataReducer,
  searchData: searchDataReducer,
  metaData: metaDataReducer,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof reducer>;

export default store;
