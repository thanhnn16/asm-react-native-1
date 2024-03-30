import {createSlice} from '@reduxjs/toolkit';

const serviceFavoriteSlice = createSlice({
  name: 'serviceFavorite',
  initialState: [] as string[],
  reducers: {
    addServiceFavorite: (state, action) => {
      state.push(action.payload._id);
    },
    removeServiceFavorite: (state, action) => {
      return state.filter(id => id !== action.payload._id);
    },
  },
});

export const {addServiceFavorite, removeServiceFavorite} =
  serviceFavoriteSlice.actions;

export default serviceFavoriteSlice.reducer;
