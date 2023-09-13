import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './slices/contsctsSlice';
import { filterReducer } from './slices/filterSlice';
import { authReducer } from './slices/authSlice';

const persistConfig = {
  key: 'token',
  storage,
  blacklist: ['filter'],
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistedAuthReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
