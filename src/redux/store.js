import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistCombineReducers } from 'redux-persist';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'root',
  storage: localStorage,
  whitelist: ['contacts'],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: persistCombineReducers(persistConfig, rootReducer),
});
