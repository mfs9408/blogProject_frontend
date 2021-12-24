import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostType } from '../../types';

type ChangeValueInterface = {
  id: string;
  fieldValue: string;
};

const postContent = createSlice({
  name: 'postCreator',
  initialState: [] as PostType[],
  reducers: {
    addField: (state, { payload }: PayloadAction<PostType>) => {
      state.push(payload);
    },
    removeField: (state, { payload }: PayloadAction<string>) => {
      return state.filter((field: PostType) => field.id !== payload);
    },
    changeValue: (state, { payload }: PayloadAction<ChangeValueInterface>) => {
      state.filter((field: PostType) => {
        if (field.id === payload.id) {
          return (field.value = payload.fieldValue);
        }
        return '';
      });
    },
    reset: () => [],
  },
});

export const postActions = postContent.actions;
export default postContent.reducer;
