import {createSlice} from '@reduxjs/toolkit';

const productFavoriteSlice = createSlice({
  name: 'productFavorite',
  initialState: [] as string[],
  reducers: {
    addProductFavorite: (state, action) => {
      state.push(action.payload._id);
    },
    removeProductFavorite: (state, action) => {
      return state.filter(id => id !== action.payload._id);
    },
  },
});

export const {addProductFavorite, removeProductFavorite} =
  productFavoriteSlice.actions;

export default productFavoriteSlice.reducer;
