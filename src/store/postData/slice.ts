import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostType } from '../../types';

interface PostDataInterface {
  title: string;
  content: PostType[];
}

const initialState: PostDataInterface = {
  title: '',
  content: [],
};

const postData = createSlice({
  name: 'postData',
  initialState,
  reducers: {
    addField: (state, { payload }: PayloadAction<PostType>) => {
      state.content.push(payload);
    },
    removeField: (state, { payload }: PayloadAction<string>) => {
      state.content = state.content.filter(
        (field: PostType) => field.id !== payload
      );
    },
    changeTitle: (state, { payload }: PayloadAction<string>) => {
      state.title = payload;
    },
    reset: (state) => {
      state.content = [];
      state.title = '';
    },
  },
});

export const postActions = postData.actions;
export default postData.reducer;
