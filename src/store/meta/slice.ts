import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MetaState {
  isSideBarOpen: boolean;
  isAlertSnackBarOpen: boolean;
}

const initialState: MetaState = {
  isSideBarOpen: false,
  isAlertSnackBarOpen: false,
};

const metaData = createSlice({
  name: 'meta',
  initialState,
  reducers: {
    setIsSideBarOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isSideBarOpen = payload;
    },
    setIsAlertSnackBarOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isAlertSnackBarOpen = payload;
    },
  },
});

export const metaActions = metaData.actions;
export default metaData.reducer;
