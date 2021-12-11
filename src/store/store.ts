import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user';

const reducer = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof reducer>;

export default store;
