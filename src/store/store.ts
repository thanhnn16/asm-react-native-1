import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import userSlice from '../api/user/user.slice.ts';
import {authApi} from '../api/user/auth/auth.service.ts';
import {productApi} from '../api/products/product.service.ts';
import {productTypeApi} from '../api/products/productTypes/productType.service.ts';
import {userApi} from '../api/user/user.service.ts';
import {serviceApi} from '../api/services/service.service.ts';
import {serviceTypeApi} from '../api/services/serviceTypes/serviceType.service.ts';
import serviceFavoriteSlice from './favorites/serviceFavorite.slice.ts';
import productFavoriteSlice from './favorites/productFavorite.slice.ts';

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  [productTypeApi.reducerPath]: productTypeApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [serviceApi.reducerPath]: serviceApi.reducer,
  [serviceTypeApi.reducerPath]: serviceTypeApi.reducer,
  user: userSlice,
  productFavorite: productFavoriteSlice,
  serviceFavorite: serviceFavoriteSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'productFavorite', 'serviceFavorite'],
  stateReconciler: autoMergeLevel2,
  version: 1,
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(
      authApi.middleware,
      productApi.middleware,
      productTypeApi.middleware,
      userApi.middleware,
      serviceApi.middleware,
      serviceTypeApi.middleware,
    ),
});

export const persistor = persistStore(store);

// export type AppDispatch = typeof store.dispatch;
