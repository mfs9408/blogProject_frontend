import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInterface, UserResponseInterface } from '../../types';

interface UserStore {
  accessToken: string | null | undefined;
  user: UserInterface | null | undefined;
}

const initialState: UserStore | null = {
  accessToken: null,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (
      state,
      { payload }: PayloadAction<UserResponseInterface | null>
    ) => {
      state.accessToken = payload?.tokens.accessToken;
      state.user = payload?.user;
    },
    removeUser: (state) => {
      state.accessToken = null;
      state.user = null;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
