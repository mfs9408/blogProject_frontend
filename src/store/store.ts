import { configureStore, combineReducers } from "@reduxjs/toolkit";

const reducer = combineReducers({});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof reducer>;

export default store;
