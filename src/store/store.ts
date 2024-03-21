import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import userSlice from '../api/user/user.slice.ts';
import {authApi} from '../api/user/auth/auth.service.ts';
import {productApi} from '../api/products/product.service.ts';
import {productTypeApi} from '../api/products/productTypes/productType.service.ts';

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  [productTypeApi.reducerPath]: productTypeApi.reducer,
  user: userSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
  stateReconciler: autoMergeLevel2,
  version: 1,
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(
      authApi.middleware,
      productApi.middleware,
      productTypeApi.middleware,
    ),
});

export const persistor = persistStore(store);

// export type AppDispatch = typeof store.dispatch;
