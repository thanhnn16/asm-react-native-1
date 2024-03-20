import {createSlice} from '@reduxjs/toolkit';

interface TokenState {
  token: string | null;
  error: string | null;
  loading: boolean;
}

const initialState: TokenState = {
  token: null,
  error: null,
  loading: false,
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: state => {
      state.token = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {setToken, removeToken, setError, setLoading} = tokenSlice.actions;

export default tokenSlice.reducer;
