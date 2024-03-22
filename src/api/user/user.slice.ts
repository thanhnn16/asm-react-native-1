import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from './user.type.ts';

interface UserState {
  currentUser: User | null;
  error: string | null;
  loading: boolean;
  token: string | null;
}

const initialState: UserState = {
  currentUser: null,
  error: null,
  loading: false,
  token: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
    removeCurrentUser: state => {
      state.currentUser = null;
    },
    setEditAvatar: (state, action: PayloadAction<string>) => {
      if (state.currentUser) {
        state.currentUser.avatar = action.payload;
      } else {
        state.currentUser = null;
      }
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    removeToken(state) {
      state.token = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setCurrentUser,
  removeCurrentUser,
  setToken,
  removeToken,
  setError,
  setLoading,
  setEditAvatar,
} = userSlice.actions;

export default userSlice.reducer;
