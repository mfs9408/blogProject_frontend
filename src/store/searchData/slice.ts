import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchDataInterface {
  searchValue: string;
}

const initialState: SearchDataInterface = {
  searchValue: '',
};

const searchData = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    changeSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.searchValue = payload;
    },
    reset: (state) => {
      state.searchValue = '';
    },
  },
});

export const searchDataActions = searchData.actions;
export default searchData.reducer;
